import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';
import { data as fakeData } from '../src/data/dataset.js';

//FILTRO
describe('filterData', () => {
  it('debe retornar 1 cuando aplicamos filtro de tiempo de preparación de 7 minutos', () => {
    const filteredData = filterData(fakeData, "tiempoDePreparacion", "7 minutos");
    expect(filteredData.length).toBe(1);
  });
  it('debe retornar 0 cuando aplicamos filtro de tiempo de preparación de 10 minutos', () => {
    const filteredData = filterData(fakeData, "tiempoDePreparacion", "10 minutos");
    expect(filteredData.length).toBe(0);
  });
});

//ORDEN
describe('sortData', () => {
  it('debe ordenar por nombre en orden ascendente', () => {
    const sortedData = sortData(fakeData, "name", "asc");
    expect(sortedData[0].name).toBe("Margarita Clásica");
    expect(sortedData[1].name).toBe("Mojito Refrescante");
    expect(sortedData[2].name).toBe("Piña Colada Tropical");
  });
  it('debe ordenar por nombre en orden descendente', () => {
    const sortedData = sortData(fakeData, "name", "desc");
    expect(sortedData[0].name).toBe("Piña Colada Tropical");
    expect(sortedData[1].name).toBe("Mojito Refrescante");
    expect(sortedData[2].name).toBe("Margarita Clásica");
  });
});

//ESTADISTICAS
describe('computeStats', () => {
  it('debe calcular correctamente el promedio de contenido de alcohol y calorías', () => {
    const stats = computeStats(fakeData);
    expect(stats.averageAlcoholContent).toBe("8.50");
    expect(stats.averageCalories).toBe("150.00");
  });
});