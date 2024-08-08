import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';
export function Home(props) {
  const viewEl = document.createElement('div');
  //Modificariamos el contenido del nuevo elemento con lo realizado en Dataverse
  viewEl.innerHTML = `
    <h1>DataVerse</h1>
    ...
  `;
  return viewEl;
}
