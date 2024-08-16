export const chatComponents = (item) => {
  const chatComponents = `
    <header class="header-details">
        <section class="menu">
            <div class="logo">
                <img src="assets/marvel_logo.png" alt="Marvel Logo">
            </div>
            <div class="api-key-button">
                <button>API Key</button>
            </div>
        </section>
    </header>
    <main class="chat-container">
        <div class="chat-container">
            <div class="image-chat">
                <img class="img-movie">  
            </div>
            <div class="chat-box">
                <div class="chat-header">
                    <div>
                        <img src="${item.imageUrl}" alt="${item.imageDescription}" class="movie-image"/>
                        <div class="status-circle"></div>
                    </div>
                    <div>
                        <ul>
                            <li class="name">${item.name}</li>    
                            <li class="status">Active Now</li>  
                        </ul>
                    </div>  
                </div>
                <div class="chat-container">
                    <ul class="chat-interaction">
                        <li class="chat-incoming">
                            <img class="img-movie">                
                            <p>Hi there</p>
                        </li>  
                        <li class="chat-outgoing">                
                            <p>lorem ipsum</p>
                        </li>
                    </ul> 
                </div>
                <div class="chat-input">
                <textarea placeholder="Enter a message..."></textarea>
                 <button type="submit">
                    <img src="../assets/send.png" alt="send">
                </button>
                </div>
            </div>
        </div> 
    </main> 
    `;
    
  return chatComponents;
}
