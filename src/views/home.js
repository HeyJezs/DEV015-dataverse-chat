import  dataset from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

export default function Home (){
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
    console.log(li);
    return li
  })
  ul.append(...liarray)
  console.log(ul);
  return ul;
};

