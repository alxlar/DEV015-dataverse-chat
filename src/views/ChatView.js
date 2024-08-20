import { navigateTo } from '../routes.js';
import data from "../data/dataset.js";
import { chatComponents } from "../components/chatComponents.js";
import { getMovieById } from "../lib/dataFunctions.js"

export default function ChatView() {
  const rootElement = document.createElement("div");
  const movieId = getQueryParam("id");
  const movie = getMovieById(data, movieId);
  rootElement.innerHTML = chatComponents(movie);


  let sendMessage = rootElement.querySelector("#send-message")

  if (sendMessage) {
      sendMessage.addEventListener('click', () => {
          testOpenAI();
      });
  }

  const testOpenAI = async () => {
    const messages = [
        { role: 'user', content: 'Tell me about Iron Man.' },
    ];

    try {
        const response = await communicateWithOpenAI(messages);
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
    }
};

  // Función para obtener el parámetro de la URL
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // ir a generar apikey
  const apiKeyButton = rootElement.querySelector('.api-key-button');
  apiKeyButton.addEventListener('click', () => {
    navigateTo("/api-key");
  });


  return rootElement;
}
