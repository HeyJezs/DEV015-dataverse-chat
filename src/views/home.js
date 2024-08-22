import  dataset from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

export default function Home (){
  const tit = document.createElement('h1');
  tit.innerHTML = `¿Qué buscas hoy?`;
  tit.classList.add('subtitulo')
  const bot = document.createElement('form')
  bot.innerHTML = `
        <label for="filter"></label>
        <select data-testid="select-filter" id="filter" name="propiedades">
          <option value="">Filtrar por tiempo:</option>
          <option value="5 minutos">5 minutos</option>
          <option value="7 minutos">7 minutos</option>
          <option value="10 minutos">10 minutos</option>
        </select>
        
        <label for="sort"></label>
        <select data-testid="select-sort" id="sort" name="alf">
          <option value="">Ordenar por:</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>


        <button data-testid="button-clear">Limpiar</button>

`
  const img = document.createElement('div')
  img.innerHTML= `<img class="principal" src="./imagen/coctel.jpg" alt="Descripción de la imagen">`

  const ul = document.createElement('ul'); //creamos elemento ul
  ul.classList.add('flex-container'); //clase para flexbox
  const liarray = dataset.map(item => { // iteramos sobre cada elemento de la data
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
        </dl>
    </div>`;
    //console.log(li);
    return li
  })
  ul.append(...liarray)
  //console.log(ul);

  const esthom = document.createElement('div');
  esthom.appendChild(tit);
  esthom.appendChild(bot);
  esthom.appendChild(img);
  esthom.appendChild(ul);

  return esthom;
};

