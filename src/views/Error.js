const Error = () => {
  const errorEl = document.createElement("div");
  errorEl.innerHTML = `
  <p class="titleError"> Error: Page not found</p>
  <div class="Tony">
  <img src="https://i.pinimg.com/originals/d3/e2/8f/d3e28fb5545b6052bf216163293f56b0.jpg" alt="tony startk">
  </div>
  `;

  return errorEl;
};

export default Error;
