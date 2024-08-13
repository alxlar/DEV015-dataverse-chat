export const apikey = () => {
const apiKeyComponent = document.createElement("div");
apiKeyComponent.innerHTML =  `
<div class="containerForm">
  <div class="containerForm__logo">
      <img src="../assets/ class="logo_image" alt="Logo" />
      <h1 class="tittle-apiKey">Marvel Movies</h1>
  </div>
  <div>
  <p class=apiDescription>Ingesa tu APIKEY y conoce más sobre tus películas favoritas</p>
  <input type="text" class="inputApiKey" id="apikey" placeholder="Ingresa tu API KEY" required/>
  <button id="buttonClearApi">Borrar</button>
  <button id="buttonSafeApikey">Guardar</button>
  </div>
</div>
`;

}
