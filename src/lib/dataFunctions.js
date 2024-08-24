// Función para FILTRAR
export const filterData = (data, filterBy, value) => {
  console.log(`Filtrando por: ${filterBy} con valor: ${value}`);
  if (!value) return data;

  const lowerValue = value.toLowerCase();

  const filteredData = data.filter(item => {
    const facts = item.facts;
    switch (filterBy) {
      case 'clasificacionLicor':
        return facts.clasificacionLicor.toLowerCase() === lowerValue;
      case 'dificultad':
        return facts.dificultad.toLowerCase() === lowerValue;
      case 'sabor':
        return facts.sabor.toLowerCase() === lowerValue;
      case 'tiempoDePreparacion':
        return facts.tiempoDePreparacion.toLowerCase() === lowerValue;
      default:
        return false;
    }
  });

  console.log('Datos filtrados:', filteredData);
  return filteredData;
};

// Función para ORDENAR
export const sortData = (data, sortBy, sortOrder) => {
  console.log(`Ordenando por: ${sortBy}, Orden: ${sortOrder}`);
  if (!sortBy || !sortOrder) return data;

  const sortedData = [...data]; // Hacer una copia de los datos
  sortedData.sort((a, b) => {
      let valueA, valueB;

      if (sortBy === 'name') {
          valueA = a[sortBy].toLowerCase();
          valueB = b[sortBy].toLowerCase();
      } else {
          valueA = a.facts[sortBy].toLowerCase();
          valueB = b.facts[sortBy].toLowerCase();
      }

      if (sortOrder === 'asc') {
          return valueA > valueB ? 1 : -1;
      } else if (sortOrder === 'desc') {
          return valueA < valueB ? 1 : -1;
      }
      return 0;
  });

  console.log('Datos ordenados:', sortedData);
  return sortedData;
};

//Función para ESTADISTICAS
export const computeStats = (data) => {
  const initialStats = {
    totalAlcoholContent: 0,
    totalCalorias: 0,
    count: data.length,
  };

  const stats = data.reduce((acc, recipe) => {
    const alcoholContent = parseFloat(recipe.facts.alcoholContent);
    const calorias = parseInt(recipe.facts.calorias);

    acc.totalAlcoholContent += isNaN(alcoholContent) ? 0 : alcoholContent;
    acc.totalCalorias += isNaN(calorias) ? 0 : calorias;
    
    return acc;
  }, initialStats);

  return {
    averageAlcoholContent: (stats.totalAlcoholContent / stats.count).toFixed(2),
    averageCalories: (stats.totalCalorias / stats.count).toFixed(2),
  };
};