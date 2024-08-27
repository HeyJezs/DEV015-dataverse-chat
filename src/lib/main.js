import dataset from '../data/dataset.js';
import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';

const container = document.querySelector('#root');
let datosFiltradosYOrdenados = [...dataset];

// Función para renderizar los datos filtrados y ordenados
const renderFilteredData = (filteredData) => {
  const ul = renderItems(filteredData);
  const existingUl = container.querySelector('ul');
  
  if (existingUl) {
    existingUl.replaceWith(ul); // Reemplaza solo el <ul>
  } else {
    container.appendChild(ul); // Añade el nuevo <ul> si no existe
  }

};

// Inicializar el renderizado de los datos
renderFilteredData(datosFiltradosYOrdenados);

// Función para aplicar el orden
const applySort = () => {
  const sortOrder = document.querySelector('[data-testid="select-sort"]').value;
  datosFiltradosYOrdenados = sortData(datosFiltradosYOrdenados, "name", sortOrder);
  renderFilteredData(datosFiltradosYOrdenados);
};

// Función para aplicar el filtro
const applyFilter = () => {
  const filterTime = document.querySelector('[data-testid="select-filter-time"]').value;
  const filterLicor = document.querySelector('[data-testid="select-filter-licor"]').value;
  const filterDificultad = document.querySelector('[data-testid="select-filter-dificultad"]').value;
  const filterSabor = document.querySelector('[data-testid="select-filter-sabor"]').value;

  // Empezamos con el dataset completo
  let filteredData = [...dataset];

  // Aplicar cada filtro si tiene un valor
  if (filterTime) {
    filteredData = filterData(filteredData, "tiempoDePreparacion", filterTime);
  }
  if (filterLicor) {
    filteredData = filterData(filteredData, "clasificacionLicor", filterLicor);
  }
  if (filterDificultad) {
    filteredData = filterData(filteredData, "dificultad", filterDificultad);
  }
  if (filterSabor) {
    filteredData = filterData(filteredData, "sabor", filterSabor);
  }

  datosFiltradosYOrdenados = filteredData;

  applySort(); // Reaplicar el orden después de filtrar
};

// Configurar selectores de orden y filtro
export const setupEventListeners = () => {
  const filtroTime = document.querySelector('[data-testid="select-filter-time"]');
  const filtroLicor = document.querySelector('[data-testid="select-filter-licor"]');
  const filtroDificultad = document.querySelector('[data-testid="select-filter-dificultad"]');
  const filtroSabor = document.querySelector('[data-testid="select-filter-sabor"]');
  const orden1 = document.querySelector('[data-testid="select-sort"]');
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const computeStatsButton = document.getElementById('computeStatsButton');
  const statsResult = document.getElementById('statsResult');

  if (!filtroTime || !filtroLicor || !filtroDificultad || !filtroSabor || !orden1 || !clearButton || !computeStatsButton || !statsResult) {
    console.warn('No todos los elementos del DOM están disponibles para configurar los event listeners.');
    return;
  }

  filtroTime.addEventListener('change', applyFilter);
  filtroLicor.addEventListener('change', applyFilter);
  filtroDificultad.addEventListener('change', applyFilter);
  filtroSabor.addEventListener('change', applyFilter);

  orden1.addEventListener('change', (e) => {
    e.preventDefault();
    applySort();
  });

  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    filtroTime.value = '';
    filtroLicor.value = '';
    filtroDificultad.value = '';
    filtroSabor.value = '';
    orden1.value = '';
    datosFiltradosYOrdenados = [...dataset];
    renderFilteredData(datosFiltradosYOrdenados);
  });

  computeStatsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const stats = computeStats(datosFiltradosYOrdenados);
    displayStats(stats);
  });

  function displayStats(stats) {
    statsResult.innerHTML = `
      <div class="stat-box result">Promedio de alcohol: ${stats.averageAlcoholContent}%</div>
      <div class="stat-box result">Promedio de calorías: ${stats.averageCalories}</div>
    `;
  }
};

// Llamar a la función para configurar los eventos
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});

export { renderFilteredData };