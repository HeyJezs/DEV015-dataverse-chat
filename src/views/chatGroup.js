import { communicateWithOpenAI } from "../lib/openAIApi.js";
import bebidas from "../data/dataset.js";

export default function ChatGroup() {
  // Crear el contenedor principal para la vista
  const viewEl = document.createElement('div');
  viewEl.classList.add('container');

  // Crear la banda superior para el chat grupal
  const bebidaHeader = document.createElement('div');
  bebidaHeader.classList.add('bebida-header');
  bebidaHeader.innerHTML = `
    <div class="bebida-info">
      <h1 class="bebida-name">Chat Grupal</h1>
      <p class="bebida-short-description">Conversa con todos los cócteles</p>
    </div>
  `;

  // Crear el contenedor del chat
  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat-container');
  chatContainer.innerHTML = `
    <div class="chat-output" id="chatOutputGroup"></div>
    <form id="chatFormGroup" class="chat-form">
      <input id="chatInputGroup" class="chat-input" placeholder="Escribe tu mensaje..."></input>
      <button class="btn-chat" type="submit">Enviar</button>
    </form>
  `;

  // Agregar elementos al contenedor principal
  viewEl.appendChild(bebidaHeader);
  viewEl.appendChild(chatContainer);

  // Añadir funcionalidad de chat
  const chatForm = viewEl.querySelector('#chatFormGroup');
  const chatInput = viewEl.querySelector('#chatInputGroup');
  const chatOutput = viewEl.querySelector('#chatOutputGroup');

  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const userMessage = chatInput.value;

    if (userMessage.trim() !== '') {
      // Mostrar el mensaje del usuario en el chat
      const userMessageEl = document.createElement('p');
      userMessageEl.textContent = `👤 Tú: ${userMessage}`;
      userMessageEl.classList.add('message', 'message-user');
      chatOutput.appendChild(userMessageEl);
  
      // Crear un array de promesas para todas las bebidas
      const promises = bebidas.map(async (bebida) => {
        try {
          const response = await communicateWithOpenAI([{ role: "user", content: userMessage }], bebida);
  
          // Mostrar la respuesta en el chat
          const botMessageEl = document.createElement('p');
          botMessageEl.textContent = `🥂 ${bebida.name}: ${response}`;
          botMessageEl.classList.add('message', 'message-bot');
          chatOutput.appendChild(botMessageEl);
        } catch (error) {
          const botMessageEl = document.createElement('p');
          botMessageEl.textContent = `Error con ${bebida.name}: ${error.message}`;
          botMessageEl.classList.add('message', 'message-error');
          chatOutput.appendChild(botMessageEl);
        }
      });
  
      // Esperar a que todas las promesas se resuelvan
      await Promise.all(promises);
  
      // Limpiar el input después de enviar
      chatInput.value = '';
  
      // Desplazar el chat hacia el último mensaje
      chatOutput.scrollTop = chatOutput.scrollHeight;
    }
  });

  return viewEl;
}