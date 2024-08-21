import { communicateWithOpenAI } from "../lib/openAIApi.js";
export default function ChatGroup() {

  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
  viewEl.innerHTML = `
    <h1>Chat grupal</h1>
      <div class="chat-group">
      <h2>Conversa con los cócteles</h2>
        <form id="chatForm">
            <input id="chatInput" placeholder="Escribe"></input>
              <br>
                <button type="submit">Enviar</button>
     
        </form>
       </div>
  `;
  const chatForm = viewEl.querySelector('#chatForm');
  const chatInput = viewEl.querySelector('#chatInput');

  // Añade un listener para el envío del formulario
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const userMessage = chatInput.value; // Captura el valor del input

    // Llama a la función communicateWithOpenAI con el mensaje del usuario
    communicateWithOpenAI([{ role: "user", content: userMessage }]);

    // Limpia el input después de enviar
    chatInput.value = '';
  });
  console.log(viewEl);
  return viewEl;
}