import { communicateWithOpenAI } from '../lib/openAIApi.js';
import { getBebidaById } from '../data/dataset.js';

export default function BebidasView(params) {
  // Crear el contenedor principal para la vista
  const viewEl = document.createElement('div');
  viewEl.classList.add('container');

  // Obtener el ID desde los parámetros o search params
  const bebidaId = params.id || new URLSearchParams(window.location.search).get('id');
    
  // Verificar que se ha obtenido un ID válido
  if (!bebidaId) {
    viewEl.innerHTML = `<p>ID de bebida no especificado.</p>`;
    return viewEl;
  }

  // Obtener la bebida del conjunto de datos
  const bebida = getBebidaById(bebidaId);
    
  if (!bebida) {
    viewEl.innerHTML = `<p>Bebida no encontrada.</p>`;
    return viewEl;
  }

  // Crear la banda superior con la información de la bebida
  const bebidaHeader = document.createElement('div');
  bebidaHeader.classList.add('bebida-header');
  bebidaHeader.innerHTML = `
    <img class="bebida-avatar" src="${bebida.imageUrl}" alt="${bebida.name}">
    <div class="bebida-info">
      <h1 class="bebida-name">${bebida.name}</h1>
      <p class="bebida-short-description">${bebida.shortDescription}</p>
    </div>
  `;

  // Crear el contenedor del chat
  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat-container');
  chatContainer.innerHTML = `
    <div class="chat-output" id="chatOutput"></div>
    <form id="chatForm" class="chat-form">
      <input id="chatInput" class="chat-input" placeholder="Escribe tu mensaje..."></input>
      <button class="btn-chat" type="submit">Enviar</button>
    </form>
  `;

  // Añadir la banda superior y el contenedor de chat al contenedor principal
  viewEl.appendChild(bebidaHeader);
  viewEl.appendChild(chatContainer);

  // Funcionalidad de chat
  const chatForm = chatContainer.querySelector('#chatForm');
  const chatInput = chatContainer.querySelector('#chatInput');
  const chatOutput = chatContainer.querySelector('#chatOutput');

  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
        
    const userMessage = chatInput.value;
    
    if (userMessage) {
      // Mostrar el mensaje del usuario en el chat
      const userMessageEl = document.createElement('div');
      userMessageEl.classList.add('message', 'message-user');
      userMessageEl.textContent = userMessage;
      chatOutput.appendChild(userMessageEl);
      
      try {
        // Llamar a la función communicateWithOpenAI con el mensaje del usuario y la bebida
        const response = await communicateWithOpenAI([{ role: "user", content: userMessage }], bebida);
        
        // Mostrar la respuesta del bot
        const botMessageEl = document.createElement('div');
        botMessageEl.classList.add('message', 'message-bot');
        botMessageEl.textContent = response;
        chatOutput.appendChild(botMessageEl);
      } catch (error) {
        const errorEl = document.createElement('div');
        errorEl.classList.add('message', 'message-error');
        errorEl.textContent = `Error con ${bebida.name}: ${error.message}`;
        chatOutput.appendChild(errorEl);
      }

      // Limpiar el input después de enviar
      chatInput.value = '';
      chatOutput.scrollTop = chatOutput.scrollHeight;
    }
  });

  return viewEl;
}