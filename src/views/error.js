export default function ErrorView() {
    const element = document.createElement('div');
    element.innerHTML = `
        <h1>Error 404</h1>
        <p>La página que estás buscando no se pudo encontrar.</p>
        <img src="https://raw.githubusercontent.com/HeyJezs/img-recetario-del-bartender/main/imagen%20de%20error%20recetario.jpeg" alt="Error 404">
    `;
    return element;
}