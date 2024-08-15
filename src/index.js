import { setRootEl, setRoutes, onURLChange } from './routes.js';
import Home  from './views/Home.js';
import Details  from './views/Details.js';
import ApikeyView from './views/ApikeyView.js'
import Error from "./views/Error.js";

const routes = {
  '/': Home,
  '/about': Details,
  '/api-key': ApikeyView,
  '/error': Error
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

