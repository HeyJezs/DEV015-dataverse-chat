let rootElement = null;
const routes = {};

// Establece el elemento raíz donde se renderizan las vistas
export function setRootEl(element) {
    rootElement = element;
}

// Define las rutas y sus vistas correspondientes
export function setRoutes(newRoutes) {
    Object.assign(routes, newRoutes);
}

// Cambia la URL y actualiza la vista sin recargar la página
export function navigateTo(path) {
    history.pushState(null, '', path);
    onURLChange(); // Actualiza la vista basada en la nueva URL
}

// Convierte una cadena de consulta en un objeto
export function queryStringToObject(queryString) {
    const params = new URLSearchParams(queryString);
    const result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }
    return result;
}

// Renderiza la vista basada en la URL actual
export function renderView(path) {
    const view = routes[path] || routes['/error'];
    rootElement.innerHTML = '';
    rootElement.appendChild(view());
}

// Maneja el cambio de URL
export function onURLChange() {
    const path = window.location.pathname;
    const queryString = window.location.search; // Obtiene la cadena de consulta (ej. ?id=123)
    const params = queryStringToObject(queryString); // Convierte la cadena de consulta en un objeto
    
    // Asume que cada ruta puede ser una función que acepta parámetros
    const view = routes[path] || routes['/error'];
    rootElement.innerHTML = '';
    rootElement.appendChild(view(params)); // Pasa los parámetros a la vista
}