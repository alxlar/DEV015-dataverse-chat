export const detailsComponent = (item) => {
    const element = `
    <header>
      <div class="logo">
        <img src="path/to/logo.png" alt="Marvel Logo">
      </div>
      <div class="api-key-button">
        <button>API Key</button>
      </div>
      <img src="${item.front}" alt="${item.name}">
    </header>
    <div class="details-container">
      <img src="${item.imageUrl}" alt="${item.imageDescription}" class="movie-image"/>
      <div class="details">
        <ul>
          <li class="year">${item.facts.year}</li>
          <li class="name">${item.name}</li>
          <li class="rating"><img class="rating-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb Logo" />  ${item.facts.rating}</li>
          <li class="description">${item.description}</li>
          <li class="director">${item.facts.director}</li>
          <li class="duration">${item.facts.duration}</li>
          <li class="awards">${item.extraInfo.awards}</li>
          <li class="audience">${item.extraInfo.audience}</li>
        </ul>
      </div>
      <div class="buttons-and-actors">
        <button>Chat individual</button>
        <button>Watch trailer</button>
        ${generateCharactersSection(item.characters)}
      </div>
    </div>
      `

      function generateCharactersSection(characters) {
        let charactersHTML = `<section id="characters"><h2>Main actors</h2>`;

        for (let i = 0; i < characters.length; i++) {
          charactersHTML += `
            <div class="character">
              <img src="${characters[i].imageUrl}" alt="${characters[i].actor}">
              <div class="character-info">
                <p class="actor-name">${characters[i].actor}</p>
                <p class="character-name">${characters[i].name}</p>
              </div>
            </div>`;
        }

        charactersHTML += `</section>`;
        return charactersHTML;
      }

      return element;
  }
