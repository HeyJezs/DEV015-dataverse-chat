import  dataset from '../data/dataset.js';
import { setupEventListeners } from '../lib/main.js';
import { renderItems } from '../lib/view.js';

const createTitle = () => {
  const tit = document.createElement('h1');
  tit.innerHTML = `¿Qué buscas hoy?`;
  tit.classList.add('subtitulo');
  return tit;
};

const createForm = () => {
  const bot = document.createElement('form');
  bot.innerHTML = `
        <label for="filter-time"></label>
        <select data-testid="select-filter-time" id="filter-time" name="filterTime">
          <option value="">Filtrar por tiempo:</option>
          <option value="5 minutos">5 minutos</option>
          <option value="10 minutos">10 minutos</option>
        </select>

        <label for="filter-licor"></label>
        <select data-testid="select-filter-licor" id="filter-licor" name="filterLicor">
          <option value="">Filtrar por licor:</option>
          <option value="whisky">Whisky</option>
          <option value="ron">Ron</option>
          <option value="pisco">Pisco</option>
          <option value="ginebra">Ginebra</option>
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="vino">Vino</option>
          <option value="aguardiente">Aguardiente</option>
        </select>

        <label for="filter-dificultad"></label>
        <select data-testid="select-filter-dificultad" id="filter-dificultad" name="filterDificultad">
          <option value="">Filtrar por dificultad:</option>
          <option value="fácil">Fácil</option>
          <option value="media">Media</option>
        </select>

        <label for="filter-sabor"></label>
        <select data-testid="select-filter-sabor" id="filter-sabor" name="filterSabor">
          <option value="">Filtrar por sabor:</option>
          <option value="dulce">Dulce</option>
          <option value="cítrico">Cítrico</option>
          <option value="amargo">Amargo</option>
          <option value="herbal">Herbal</option>
          <option value="picante">Picante</option>
        </select>
        
        <label for="sort"></label>
        <select data-testid="select-sort" id="sort" name="alf">
          <option value="">Ordenar por:</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <button data-testid="button-clear" type="button">Limpiar</button>
        <button id="computeStatsButton" type="button">Calcular Estadísticas</button>
  `;
  
  return bot;
};

const createImage = () => {
  const img = document.createElement('div');
  img.innerHTML = `<img class="principal" src="./imagen/coctel.jpg" alt="Explosión de coctel">`;
  return img;
};

const createStatsResult = () => {
  const statsResult = document.createElement('div');
  statsResult.id = 'statsResult';
  return statsResult;
};

const renderContent = () => {
  const ul = renderItems(dataset);
  return ul; // Devuelve la lista para que sea agregada después
};

export default function Home() {
  const container = document.createElement('div'); // Crear un nuevo contenedor
  container.id = 'home-container';

  // Crear un contenedor para los elementos estáticos
  const staticContainer = document.createElement('div');
  staticContainer.appendChild(createTitle());
  staticContainer.appendChild(createForm());
  staticContainer.appendChild(createImage());
  staticContainer.appendChild(createStatsResult());

  // Añadir el contenedor estático al root
  container.appendChild(staticContainer);

  // Renderizar el contenido dinámico (ul) al final
  container.appendChild(renderContent());

  // Configura los eventos
  setupEventListeners();

  return container;
}