import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  beforeEach(() => {
    // Limpiar el localStorage antes de cada test
    localStorage.clear();
  });

  it('debería devolver el valor de la API Key', () => {
    // Establecer un valor en el localStorage
    const mockApiKey = '12345-abcde';
    localStorage.setItem('apiKey', mockApiKey);
    
    // Comprobar que getApiKey devuelve el valor correcto
    expect(getApiKey()).toBe(mockApiKey);
  });

  it('debería devolver null si no hay API Key almacenada', () => {
    // Comprobar que getApiKey devuelve null cuando no hay API Key en localStorage
    expect(getApiKey()).toBeNull();
  });
});

describe('setApiKey', () => {

  beforeEach(() => {
    // Limpiar el localStorage antes de cada test
    localStorage.clear();
  });

  it('debería establecer correctamente la API Key', () => {
    const mockApiKey = '12345-abcde';

    // Usar setApiKey para almacenar la clave
    setApiKey(mockApiKey);

    // Comprobar que la API Key se ha guardado correctamente en localStorage
    expect(localStorage.getItem('apiKey')).toBe(mockApiKey);
  });
});