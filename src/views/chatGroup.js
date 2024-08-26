import { communicateWithOpenAI } from "../lib/openAIApi.js";
import bebidas from "../data/dataset.js";

export default function ChatGroup() {

  const viewEl = document.createElement('div');
  const cocktailListHTML = bebidas.map(bebida => `<li>${bebida.name}</li>`).join('');

  viewEl.innerHTML = `
    <h1 class="h1-group">Chat grupal 👥</h1>
    <div class="chat-group">
      <h2 class="h2-group">Conversa con los cócteles</h2>
      <ul id="cocktailList">
        ${cocktailListHTML}
      </ul>
      <div class="chat-out" id="chatOutput"></div>
      <form id="chatForm">
        <input id="chatInput" placeholder="Escribe tu mensaje..."></input>
        <br>
        <button class="btn-chat" type="submit">Enviar</button>
      </form>
    </div>
  `;

  const chatForm = viewEl.querySelector('#chatForm');
  const chatInput = viewEl.querySelector('#chatInput');
  const chatOutput = viewEl.querySelector('#chatOutput');

  // Añade un listener para el envío del formulario
  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const userMessage = chatInput.value;

    const cocktailList = viewEl.querySelector('#cocktailList');
    cocktailList.classList.add('hidden');
  
    // Mostrar el mensaje del usuario en el chat
    const userMessageEl = document.createElement('p');
    userMessageEl.textContent = `👤​Tú: ${userMessage}`;
    userMessageEl.classList.add('user-message');
    chatOutput.appendChild(userMessageEl);
  
    // Crear un array de promesas para todas las bebidas
    const promises = bebidas.map(async (bebida) => {
      try {
        const response = await communicateWithOpenAI([{ role: "user", content: userMessage }], bebida);

        // Mostrar la respuesta en el chat
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `🥂​${bebida.name}: ${response}`;
        botMessageEl.classList.add('bot-message');
        chatOutput.appendChild(botMessageEl);
      } catch (error) {
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `Error con ${bebida.name}: ${error.message}`;
        botMessageEl.classList.add('bot-message');
        chatOutput.appendChild(botMessageEl);
        return botMessageEl;
      }
    });

    // Esperar a que todas las promesas se resuelvan y añadir las respuestas al chat
    Promise.all(promises)
      .then(botMessages => {
        botMessages.forEach(messageEl => chatOutput.appendChild(messageEl));
      })
      .catch(error => {
        const errorMessageEl = document.createElement('p');
        errorMessageEl.textContent = `Hubo un error al procesar las respuestas: ${error.message}`;
        chatOutput.appendChild(errorMessageEl);
      });

    // Limpiar el input después de enviar
    chatInput.value = '';
 
  // Desplazar el chat hacia el último mensaje
  chatOutput.scrollTop = chatOutput.scrollHeight;
});

  
  return viewEl;
}