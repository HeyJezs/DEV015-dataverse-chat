export default function ApiKeyAdmin() {
  // Crear el contenedor principal para la vista
  const viewEl = document.createElement('div');

  // Crear el formulario y sus elementos
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const submitButton = document.createElement('button');

  // Configurar los elementos del formulario
  label.textContent = 'Ingrese su API KEY:';
  label.setAttribute('for', 'apiKeyInput');

  input.type = 'text';
  input.id = 'apiKeyInput';
  input.name = 'apiKey';
  input.placeholder = 'API KEY...';

  submitButton.type = 'submit';
  submitButton.textContent = 'Guardar';

  // Añadir elementos al formulario
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submitButton);

  // Añadir el formulario al contenedor principal
  viewEl.appendChild(form);

  // Manejar el envío del formulario
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const apiKey = input.value.trim();
    if (apiKey) {
      localStorage.setItem('apiKey', apiKey);
      alert('API KEY guardada correctamente');
    } else {
      alert('Por favor, ingrese una API KEY válida');
    }
  });

  // Devolver el contenedor principal
  return viewEl;
}