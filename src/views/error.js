export default function ErrorView() {
  const element = document.createElement('div');
  element.classList.add('error-container');
  element.innerHTML = `
        <img src="https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/Error%20404.png" alt="Error 404">
    `;
  return element;
}