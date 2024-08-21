import { communicateWithOpenAI } from '../lib/openAIApi.js';
import { getBebidaById } from '../data/dataset.js';

export default function BebidasView(params) {
    // Crear el contenedor principal para la vista
    const viewEl = document.createElement('div');
    
    // Obtener el ID desde los parámetros o search params
    const bebidaId = params.id || new URLSearchParams(window.location.search).get('id');
    
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
    `;

    // Agregar funcionalidad al botón de chat
    const chatButton = viewEl.querySelector('#chatButton');
    chatButton.addEventListener('click', () => {
        alert(`Chateando sobre ${bebida.name}`);
        // Aquí puedes agregar la lógica para el chat
    });

    return viewEl;
}