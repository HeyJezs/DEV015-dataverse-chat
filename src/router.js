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
// Renderiza la vista basada en la URL actual
export function renderView(path) {
    const view = routes[path] || routes['/error'];
    rootElement.innerHTML = '';
    rootElement.appendChild(view());
}
// Maneja el cambio de URL
export function onURLChange() {
    renderView(window.location.pathname);
}