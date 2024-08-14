import { apiKeyComponent } from "../components/apiKeyComponent.js";


export default function ApikeyView() {

  const getElementsAndEvents = () => {
    // const inputElement = document.getElementById("apikey");
    // const buttonSave = document.getElementById("buttonSafeApikey");
    //const buttonClear = document.getElementById("buttonSafeApikey");
  }
  const rootElement = document.createElement("div");
  rootElement.innerHTML = apiKeyComponent();

  return rootElement;


}

