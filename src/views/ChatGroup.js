import { navigateTo } from '../routes.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';
import { chatGroupComponents } from "../components/chatGroupComponents.js";
import data from "../data/dataset.js";

// Función para obtener imágenes de todas las películas
function getPosters(movies) {
  const posters = [];
  movies.forEach(movie => {
    if (movie.imageUrl) posters.push(movie.imageUrl);
  });
  return posters;
}

// Función para obtener una película aleatoria
function getRandomMovie(movies) {
  if (movies.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

export default function ChatGroup() {

  const randomMovie = getRandomMovie(data); // Obtiene una película aleatoria
  const rootElement = document.createElement("div");

  if (randomMovie) {
    rootElement.innerHTML = chatGroupComponents(randomMovie); // Pasa la película aleatoria

    const sendMessageButton = rootElement.querySelector("#send-message");
    const messageInput = rootElement.querySelector("textarea");
    const chatInteractionBox = rootElement.querySelector(".chat-interaction");

    // Mostrar la imagen de la película seleccionada
    const imageChat = rootElement.querySelector('.image-chat img');
    if (imageChat && randomMovie.imageUrl) {
      imageChat.src = randomMovie.imageUrl;
      imageChat.alt = randomMovie.name;
    } else {
      console.error("randomMovie tiene una propiedad imageUrl no válida", randomMovie);
    }

    // Enviar mensaje con el botón
    if (sendMessageButton && messageInput) {
      sendMessageButton.addEventListener('click', () => sendMessage());

      // Permitir envío con "Enter"
      messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();  // Evita que se añada una nueva línea en el textarea
          sendMessage();
        }
      });
    }

    function sendMessage() {
      const userMessage = messageInput.value.trim();
      if (userMessage) {
        addMessageToChat(userMessage, 'outgoing', randomMovie);

        messageInput.value = '';

        try {
          data.forEach(async (movie) => {
            const messages = [
              {
                role: 'system',
                content: `You are the movie "${movie.name}". Here is some information: ${movie.description}. Please respond as if you are part of this movie, and keep your responses brief, no more than 50 words.`,
              },
              {
                role: 'user',
                content: userMessage,
              },
            ];

            const aiResponse = await communicateWithOpenAI(messages);
            addMessageToChat(`${movie.name}: ${aiResponse}`, 'incoming', movie);
          });
        } catch (error) {
          console.error('Error al enviar mensaje a OpenAI:', error);
          addMessageToChat('Error al comunicarse con la IA.', 'incoming', randomMovie);
        }
      }
    }

    function addMessageToChat(message, type, movie) {
      const li = document.createElement('li');
      li.classList.add(`chat-${type}`);
      if (type === "outgoing") {
        li.innerHTML = `<p>${message}</p>`;
      } else {
        li.innerHTML = `
          <div class="message-header">
            <img src="${movie.imageUrl}" alt="${movie.imageDescription}" class="movie-image"/>
            <span class="name">${movie.name}</span>
          </div>
          <div class="message-content">
            <p>${message}</p>
          </div>
        `;
      }

      chatInteractionBox.appendChild(li);

      // Desplaza automáticamente hacia el último mensaje
      chatInteractionBox.scrollTop = chatInteractionBox.scrollHeight;
    }

    const apiKeyButton = rootElement.querySelector('.api-key-button');
    apiKeyButton.addEventListener('click', () => {
      navigateTo("/api-key");
    });

  } else {
    console.error("No se encontró una película válida con imageUrl.");
    rootElement.innerHTML = "<p>Error: No se encontraron películas con imágenes válidas.</p>";
  }

  return rootElement;
}
