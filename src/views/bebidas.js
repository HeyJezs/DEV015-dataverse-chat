import { communicateWithOpenAI } from '../lib/openAIApi.js';
import { getBebidaById } from '../data/dataset.js';

export default function BebidasView(params) {
  // Crear el contenedor principal para la vista
  const viewEl = document.createElement('div');
    
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

  // Mostrar los detalles de la bebida
  viewEl.innerHTML = `
        <h1 class="h1-ind">Chat con ${bebida.name}</h1>
        <img class="img-ind" src="${bebida.imageUrl}" alt="${bebida.name}" style="width: 300px;">
        <p class="p-ind">${bebida.description}</p>
        <div id="datosCoctel">
        <ul>
            <li>Contenido de Alcohol: ${bebida.facts.alcoholContent}</li>
            <li>Calorías: ${bebida.facts.calorias}</li>
            <li>Tiempo de Preparación: ${bebida.facts.tiempoDePreparacion}</li>
        </ul>
        <p class="p-ind">${bebida.extraInfo}</p>
        </div>
        <div id="chatOutput"></div>
        <form id="chatForm">
            <input id="chatInput" placeholder="Escribe tu mensaje..."></input>
            <br>
            <button class="btn-chat" type="submit">Enviar</button>
        </form>
    `;

  // Agregar funcionalidad al formulario de chat
  const chatForm = viewEl.querySelector('#chatForm');
  const chatInput = viewEl.querySelector('#chatInput');
  const chatOutput = viewEl.querySelector('#chatOutput');

  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
        
    const userMessage = chatInput.value;
    const datosCoctel = viewEl.querySelector('#datosCoctel');
    datosCoctel.classList.add('hidden')
    
    if (userMessage) {
      // Mostrar el mensaje del usuario en el chat
      const userMessageEl = document.createElement('p');
      userMessageEl.textContent = `👤 Tú: ${userMessage}`;
      userMessageEl.classList.add('user-message');
      chatOutput.appendChild(userMessageEl);
      
      try {
        // Llamar a la función communicateWithOpenAI con el mensaje del usuario y la bebida
        const response = await communicateWithOpenAI([{ role: "user", content: userMessage }], bebida);
        
        // Mostrar la respuesta del bot
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `🍹 ${bebida.name}: ${response}`;
        botMessageEl.classList.add('bot-message');
        chatOutput.appendChild(botMessageEl);
      } catch (error) {
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `Error con ${bebida.name}: ${error.message}`;
        botMessageEl.classList.add('bot-message');
        chatOutput.appendChild(botMessageEl);
      }

      // Limpiar el input después de enviar
      chatInput.value = '';
      chatOutput.scrollTop = chatOutput.scrollHeight;
    }
  });

  return viewEl;
}