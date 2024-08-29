import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';
import bebidas from '../src/data/dataset.js';

//FILTRO
describe('filterData', () => {
  it('debe retornar 9 cuando aplicamos filtro de tiempo de preparación de 5 minutos', () => {
    const filteredData = filterData(bebidas, "tiempoDePreparacion", "5 minutos");
    expect(filteredData.length).toBe(9);
  });

  it('debe retornar 15 cuando aplicamos filtro de tiempo de preparación de 10 minutos', () => {
    const filteredData = filterData(bebidas, "tiempoDePreparacion", "10 minutos");
    expect(filteredData.length).toBe(15);
  });

  it('debe retornar los elementos correctos al filtrar por clasificación de licor', () => {
    const filteredData = filterData(bebidas, "clasificacionLicor", "whisky");
    expect(filteredData.every(item => item.facts.clasificacionLicor.toLowerCase() === "whisky")).toBe(true);
  });

  it('debe manejar filtros vacíos correctamente', () => {
    const filteredData = filterData(bebidas, "", "");
    expect(filteredData.length).toBe(bebidas.length);
  });
});

//ORDEN
describe('sortData', () => {
  it('debe ordenar por nombre en orden ascendente', () => {
    const sortedData = sortData(bebidas, "name", "asc");
    expect(sortedData[0].name).toBe("Bloody Mary Picante");
    expect(sortedData[1].name).toBe("Blue Lagoon Refrescante");
    expect(sortedData[2].name).toBe("Caipirinha Brasileña");
  });
  it('debe ordenar por nombre en orden descendente', () => {
    const sortedData = sortData(bebidas, "name", "desc");
    expect(sortedData[0].name).toBe("Whiskey Sour Clásico");
    expect(sortedData[1].name).toBe("Tequila Sunrise Tropical");
    expect(sortedData[2].name).toBe("Sangría Española");
  });
  it('debe ordenar por dificultad en orden ascendente', () => {
    const sortedData = sortData(bebidas, "dificultad", "asc");
    expect(sortedData[0].facts.dificultad).toBe("Fácil");
    expect(sortedData[sortedData.length - 1].facts.dificultad).toBe("Media");
  });
});

//ESTADISTICAS
describe('computeStats', () => {
  it('debe calcular correctamente el promedio de contenido de alcohol y calorías', () => {
    const stats = computeStats(bebidas);
    expect(stats.averageAlcoholContent).toBe("8.88");
    expect(stats.averageCalories).toBe("152.50");
  });
});