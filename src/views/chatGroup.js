export default function ChatGroup() {
  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
  viewEl.innerHTML = `
    <h1>Chat grupal</h1>
      <div class="chat-group">
      <h2>Conversa con los cócteles</h2>
        <form>
            <input placeholder="Escribe"></input>
              <br>
                <button type="submit">Enviar</button>
     
        </form>
       </div>
  `
  console.log(viewEl);
  return viewEl;
}