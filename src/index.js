import { setRootEl, setRoutes, onURLChange } from './router.js';
import Home from './views/home.js';
import ChatGroup from './views/chatGroup.js';
import ErrorView from './views/error.js';
import ApiKeyAdmin from './views/apiKeyAdmin.js';
import BebidasView from './views/bebidas.js';

// Establecer el elemento raíz
setRootEl(document.getElementById('root'));

// Definir las rutas y sus vistas correspondientes
setRoutes({
    '/': Home,
    '/chatgroup': ChatGroup,
    '/error': ErrorView,
    '/apikeyadmin': ApiKeyAdmin,
    '/bebidas': BebidasView
});

// Manejar la navegación mediante clics en los enlaces
document.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        window.history.pushState(null, '', e.target.href);
        onURLChange();
    }
});

// Manejar el cambio de URL al retroceder o avanzar en el historial
window.addEventListener('popstate', onURLChange);

// Cargar la vista correcta al inicio
onURLChange();

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/