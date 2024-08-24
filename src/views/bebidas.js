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
        <h1>${bebida.name}</h1>
        <img src="${bebida.imageUrl}" alt="${bebida.name}" style="width: 300px;">
        <p>${bebida.description}</p>
        <ul>
            <li>Contenido de Alcohol: ${bebida.facts.alcoholContent}</li>
            <li>Calorías: ${bebida.facts.calorias}</li>
            <li>Tiempo de Preparación: ${bebida.facts.tiempoDePreparacion}</li>
        </ul>
        <p>${bebida.extraInfo}</p>
        <div id="chatOutput"></div>
        <form id="chatForm">
            <input id="chatInput" placeholder="Escribe tu mensaje..."></input>
            <br>
            <button type="submit">Enviar</button>
        </form>
    `;

    // Agregar funcionalidad al formulario de chat
    const chatForm = viewEl.querySelector('#chatForm');
    const chatInput = viewEl.querySelector('#chatInput');
    const chatOutput = viewEl.querySelector('#chatOutput');

    chatForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const userMessage = chatInput.value;
    
    if (userMessage) {
      // Mostrar el mensaje del usuario en el chat
      const userMessageEl = document.createElement('p');
      userMessageEl.textContent = `Tú: ${userMessage}`;
      chatOutput.appendChild(userMessageEl);
      
      try {
        // Llamar a la función communicateWithOpenAI con el mensaje del usuario y la bebida
        const response = await communicateWithOpenAI([{ role: "user", content: userMessage }], bebida);
        
        // Mostrar la respuesta del bot
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `${bebida.name}: ${response}`;
        chatOutput.appendChild(botMessageEl);
      } catch (error) {
        const botMessageEl = document.createElement('p');
        errorbotMessageEl.textContent = `Error con ${bebida.name}: ${error.message}`;
        chatOutput.appendChild(botMessageEl);
      }

      // Limpiar el input después de enviar
      chatInput.value = '';
    }
  });

  return viewEl;
}