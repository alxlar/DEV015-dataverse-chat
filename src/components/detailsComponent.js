export const detailsComponent = (item) => {
    const infoHome = `
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
        <section id="characters">
          <h2>Main actors</h2>
          <div class="character">
            <img src="${characters.imageUrl1}" alt="${characters.actor1}">
            <div class="character-info">
              <p class="actor-name1">${characters.actor1}</p>
              <p class="character-name1">${characters.name1}</p>
            </div>
          </div>
          <div class="character">
            <img src="${characters.imageUrl2}" alt="${characters.actor2}">
            <div class="character-info">
              <p class="actor-name2">${characters.actor2}</p>
              <p class="character-name2">${characters.name2}</p>
            </div>
          </div>
          <div class="character">
            <img src="${characters.imageUrl3}" alt="${characters.actor3}">
            <div class="character-info">
              <p class="actor-name3">${characters.actor3}</p>
              <p class="character-name3">${characters.name3}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
      `
  
      return infoHome;
  }