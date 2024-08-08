export default function ErrorView() {
    const element = document.createElement('div');
    element.innerHTML = `
        <h1>Error 404</h1>
        <p>La página que estás buscando no se pudo encontrar.</p>
    `;
    return element;
}