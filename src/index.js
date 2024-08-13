import { setRootEl, setRoutes, onURLChange } from './routes.js';
import Home  from './views/Home.js';
import About  from './views/About.js';
import Error from "./views/Error.js";

const routes = {
  '/': Home,
  '/about': About,
  '/error': Error
  // ...
};

// Assign the routes
setRoutes(routes);


window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  setRootEl(root);
  onURLChange(window.location);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});


// window.addEventListener('load', onURLChange());

