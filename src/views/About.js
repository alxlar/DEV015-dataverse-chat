import data from "../data/dataset.js";
import { detailsComponent } from "../components/detailsComponent.js";
import { getMovieById } from "../lib/dataFunctions.js"

export default function About() {
  const rootElement = document.createElement("div");
  let movieId = getQueryParam("id")
  let movie = getMovieById(data, movieId)
  rootElement.innerHTML = detailsComponent(movie);

  // Función para obtener el parámetro de la URL
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  return rootElement;
}
