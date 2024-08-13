import data from "../data/dataset.js";
import { detailsComponent } from "../components/detailsComponent.js";
import { getMovieById } from "../lib/dataFunctions.js"

export default function About() {
  const rootElement = document.createElement("div");
  let movieId = getQueryParam("id")
  let movie = getMovieById(data, movieId)
  rootElement.innerHTML = detailsComponent(movie);

  const trailerPlay = rootElement.querySelector('.trailer-play');
  trailerPlay.addEventListener('click', event => {
    const trailerUrl = event.target.getAttribute('data-trailer');
    showTrailerModal(trailerUrl);
  });

  // background image
  let backgroundImageUrl = movie.front
  const backgrounHeader = rootElement.querySelector('.header-details');
  // Verifica si el elemento existe
if (backgrounHeader) {
  // Agrega la imagen de fondo utilizando la URL dinámica
  backgrounHeader.style.backgroundImage = `url(${backgroundImageUrl})`;
}

  function showTrailerModal(trailerUrl) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <iframe class="trailer-video" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }


  // Función para obtener el parámetro de la URL
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  return rootElement;
}
