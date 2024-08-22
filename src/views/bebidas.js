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
        <button id="chatButton">Chatear sobre esta bebida</button>
        <div id="chatOutput"></div>
    `;

    // Agregar funcionalidad al botón de chat
    const chatButton = viewEl.querySelector('#chatButton');
    chatButton.addEventListener('click', async () => {
        const userMessage = prompt('Escribe tu mensaje:');
    
    if (userMessage) {
      // Mostrar el mensaje del usuario
      const userMessageEl = document.createElement('p');
      userMessageEl.textContent = `Tú: ${userMessage}`;
      const chatOutput = viewEl.querySelector('#chatOutput');
      chatOutput.appendChild(userMessageEl);
      
      try {
        // Llamar a la función communicateWithOpenAI con el mensaje del usuario
        const response = await communicateWithOpenAI([{ role: "user", content: userMessage }]);
        // Mostrar la respuesta del bot
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `${bebida.name}: ${response}`;
        chatOutput.appendChild(botMessageEl);
      } catch (error) {
        const botMessageEl = document.createElement('p');
        botMessageEl.textContent = `Error con ${bebida.name}: ${error.message}`;
        chatOutput.appendChild(botMessageEl);
      }
    }
  });

  return viewEl;
}