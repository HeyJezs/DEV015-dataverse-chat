import { getBebidaById } from '../src/data/dataset.js';

describe('getBebidaById', () => {
  const mockBebidas = [
    { id: 'mojitoRefrescante001', name: 'Mojito Refrescante' },
    { id: 'pinacoladaTropical002', name: 'Piña Colada Tropical' }
  ];

  beforeAll(() => {
    global.bebidas = [
      {
        id: "mojitoRefrescante001",
        name: "Mojito Refrescante",
        shortDescription: "Refrescante y delicioso, con un toque de menta y limón.",
        description: "Este Mojito Refrescante es una explosión de sabores que te transportará a una playa paradisíaca. Preparado con una combinación de ron blanco, limón, menta, azúcar y soda, es la bebida perfecta para refrescar tu día...",
        imageUrl: "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/mojitoRefrescante001.jpeg",
        facts: {
          alcoholContent: "7.5% ABV",
          calorias: "120",
          tiempoDePreparacion: "5 minutos",
          clasificacionLicor: "Ron",
          dificultad: "Fácil",
          sabor: "Cítrico"
        },
        extraInfo: "¡Sirve con mucho hielo y una ramita de menta fresca para darle un toque aún más especial!"
      },
      {
        id: "pinacoladaTropical002",
        name: "Piña Colada Tropical",
        shortDescription: "Dulce y cremoso, con el sabor tropical de la piña y el coco.",
        description: "La Piña Colada Tropical es el cóctel perfecto para sentirte en una isla paradisíaca con cada sorbo...",
        imageUrl: "https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/pinacoladaTropical002.jpeg",
        facts: {
          alcoholContent: "8% ABV",
          calorias: "180",
          tiempoDePreparacion: "10 minutos",
          clasificacionLicor: "Ron",
          dificultad: "Media",
          sabor: "Dulce"
        },
        extraInfo: "¡Decora con una rodaja de piña y un paraguas de cóctel para un toque aún más festivo!"
      }
      // Añade más objetos según sea necesario para las pruebas
    ];
  });

  it('debería devolver la bebida correcta cuando el id existe', () => {
    const bebida = getBebidaById('mojitoRefrescante001');
    expect(bebida.id).toBe(mockBebidas[0].id);
    expect(bebida.name).toBe(mockBebidas[0].name);

    const otraBebida = getBebidaById('pinacoladaTropical002');
    expect(otraBebida.id).toBe(mockBebidas[1].id);
    expect(otraBebida.name).toBe(mockBebidas[1].name);
  });

  it('debería devolver undefined cuando el id no existe', () => {
    const bebida = getBebidaById('idInexistente');
    expect(bebida).toBeUndefined();
  });
});