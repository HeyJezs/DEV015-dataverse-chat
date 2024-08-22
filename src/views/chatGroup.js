import { communicateWithOpenAI } from "../lib/openAIApi.js";
import bebidas from "../data/dataset.js";

export default function ChatGroup() {

  const viewEl = document.createElement('div');
  const cocktailListHTML = bebidas.map(bebida => `<li>${bebida.name}</li>`).join('');

  viewEl.innerHTML = `
    <h1>Chat grupal</h1>
    <div class="chat-group">
      <h2>Conversa con los cócteles</h2>
      <ul id="cocktailList">
        ${cocktailListHTML}
      </ul>
      <div id="chatOutput"></div>
      <form id="chatForm">
        <input id="chatInput" placeholder="Escribe"></input>
        <br>
        <button type="submit">Enviar</button>
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
  
    // Mostrar el mensaje del usuario en el chat
    const userMessageEl = document.createElement('p');
    userMessageEl.textContent = `Tú: ${userMessage}`;
    chatOutput.appendChild(userMessageEl);
  
    // Iterar sobre todas las bebidas y enviar el mensaje
    for (const bebida of bebidas) {
      try {
        const response = await communicateWithOpenAI([{ role: "user", content: userMessage }], bebida);

        // Mostrar la respuesta en el chat
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `${bebida.name}: ${response}`;
        chatOutput.appendChild(botMessageEl);
      } catch (error) {
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `Error con ${bebida.name}: ${error.message}`;
        chatOutput.appendChild(botMessageEl);
      }
    }

    // Limpiar el input después de enviar
    chatInput.value = '';
  });
  
  return viewEl;
}