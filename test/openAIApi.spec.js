import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

// Simula fetch para todas las pruebas
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(MOCK_RESPONSE)
  })
);

// Mocks de datos para la prueba
const MOCK_BEBIDA = { name: "Mojito" };
const MOCK_MESSAGES = [{ role: "user", content: "Hola" }];
const MOCK_RESPONSE = {
  choices: [
    { message: { content: "Soy el cóctel Mojito. ¿En qué puedo ayudarte?" } }
  ]
};

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Limpia todos los mocks antes de cada prueba
  });
  
  it('debería devolver la respuesta correcta del cóctel', async () => {
    const response = await communicateWithOpenAI(MOCK_MESSAGES, MOCK_BEBIDA);
    
    expect(response).toEqual("Soy el cóctel Mojito. ¿En qué puedo ayudarte?");
  });

  it('debería manejar errores de la API', async () => {
    // Cambiando el mock para simular un error en la respuesta de la API
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Error interno del servidor'
      })
    );

    const response = await communicateWithOpenAI(MOCK_MESSAGES, MOCK_BEBIDA);
    
    expect(response).toEqual('Hubo un error al obtener la respuesta. Inténtalo de nuevo más tarde.');
  });
});