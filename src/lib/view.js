export const renderItems = (data) => {

  const ul = document.createElement('ul'); //creamos elemento ul
  ul.classList.add('flex-container'); //clase para flexbox
  
  const liarray = data.map(item => { // iteramos sobre cada elemento de la data
    const li = document.createElement('li'); //creamos un elemento li para cada item
    li.classList.add('card'); //clase para estilos de tarjetas
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'http://schema.org/Product'); //agregamos el itemtype
    li.setAttribute('itemprop', 'item');

    li.innerHTML= `<div class="card-container">
        <img src="${item.imageUrl}" alt="${item.name}" itemprop="image">
        <dl itemscope itemtype="http://schema.org/Product">
            <dt itemprop="name"></dt>
            <dd class="card-title">${item.name}</dd>
            <dt itemprop="shortDescription"></dt>
            <dd class="short-description">${item.shortDescription}</dd>
            <dt itemprop="alcoholContent">Contenido de Alcohol:</dt>
            <dd>${item.facts.alcoholContent}</dd>
            <dt itemprop="calorias">Calorías:</dt>
            <dd>${item.facts.calorias}</dd>
            <dt itemprop="tiempoDePreparacion">Tiempo de preparación:</dt>
            <dd>${item.facts.tiempoDePreparacion}</dd>
            <dt itemprop="clasificacionLicor">Clasificación de Licor:</dt>
            <dd>${item.facts.clasificacionLicor}</dd>
            <dt itemprop="dificultad">Dificultad:</dt>
            <dd>${item.facts.dificultad}</dd>
            <dt itemprop="sabor">Sabor:</dt>
            <dd>${item.facts.sabor}</dd>
        </dl>
        <button class="chat-button" onclick="location.href='/bebidas?id=${item.id}'">Chatear con esta bebida</button>
    </div>`;
    //console.log(li);
    return li
  })

  ul.append(...liarray)
  //console.log(ul);
  return ul;
};