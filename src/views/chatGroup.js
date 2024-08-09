export default function ChatGroup() {
    const viewEl = document.createElement('div');
    //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
    viewEl.innerHTML = `
      <h1>DataVerase</h1>
      ...
    `
    console.log(viewEl);
    return viewEl;
  }