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

// Lógica del menú de hamburguesa
initHamburgerMenu();

function initHamburgerMenu() {
  const barsMenu = document.querySelector(".bars-menu");
  const line1_bars = document.querySelector(".line1-bars-menu");
  const line2_bars = document.querySelector(".line2-bars-menu");
  const line3_bars = document.querySelector(".line3-bars-menu");
  const container_menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");
  
  if (barsMenu) {
    barsMenu.addEventListener("click", function() {
      line1_bars.classList.toggle("activeline1-bars-menu");
      line2_bars.classList.toggle("activeline2-bars-menu");
      line3_bars.classList.toggle("activeline3-bars-menu");
      container_menu.classList.toggle("menu_active");
      overlay.classList.toggle("overlay_active");
    });
  }
}