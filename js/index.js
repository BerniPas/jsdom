// Crear el contenedor principal de la barra de navegación
const navBar = document.createElement('nav');
navBar.style.display = 'flex';
navBar.style.justifyContent = 'space-around';
navBar.style.padding = '10px';
navBar.style.backgroundColor = '#f4f4f4';
navBar.style.borderBottom = '2px solid #ddd';

// Crear y agregar los enlaces manualmente
const homeLink = document.createElement('a');
homeLink.href = './home.html';
homeLink.textContent = 'Home';
homeLink.style.textDecoration = 'none';
homeLink.style.color = '#333';
homeLink.style.fontWeight = 'bold';
navBar.appendChild(homeLink);

const sucursalesLink = document.createElement('a');
sucursalesLink.href = './pages/sucursales.html';
sucursalesLink.textContent = 'Sucursales';
sucursalesLink.style.textDecoration = 'none';
sucursalesLink.style.color = '#333';
sucursalesLink.style.fontWeight = 'bold';
navBar.appendChild(sucursalesLink);

const nosotrosLink = document.createElement('a');
nosotrosLink.href = './pages/formulario.html';
nosotrosLink.textContent = 'Formulario';
nosotrosLink.style.textDecoration = 'none';
nosotrosLink.style.color = '#333';
nosotrosLink.style.fontWeight = 'bold';
navBar.appendChild(nosotrosLink);

const formularioLink = document.createElement('a');
formularioLink.href = './pages/productos.html';
formularioLink.textContent = 'Productos';
formularioLink.style.textDecoration = 'none';
formularioLink.style.color = '#333';
formularioLink.style.fontWeight = 'bold';
navBar.appendChild(formularioLink);

// Agregar la barra de navegación al cuerpo del documento
document.body.prepend(navBar);

// Crear el contenedor principal del main
const main = document.createElement('main');
main.style.padding = '20px';
main.style.backgroundColor = '#f9f9f9';

// Crear el título de "Productos"
const title = document.createElement('h2');
title.textContent = 'Productos';
title.style.textAlign = 'center';
title.style.marginBottom = '20px';
main.appendChild(title);

// Crear un contenedor para las imágenes de productos
const productsContainer = document.createElement('div');
productsContainer.style.display = 'grid';
productsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
productsContainer.style.gap = '20px';

// Agregar 6 imágenes de ejemplo
for (let i = 1; i <= 6; i++) {
    const imagen = document.createElement('img');
    imagen.src = `https://picsum.photos/200/300?random=${i}`; // Enlace de imagen de ejemplo
    imagen.alt = `Producto ${i}`;
    imagen.style.width = '80%';
    imagen.style.border = '1px solid #ccc';
    imagen.style.borderRadius = '8px';
    imagen.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    productsContainer.appendChild(imagen);
}

// Agregar el contenedor de productos al main
main.appendChild(productsContainer);

// Agregar el main al cuerpo del documento
document.body.appendChild(main);

// Crear el contenedor principal del footer
const footer = document.createElement('footer');
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.textAlign = 'center';
footer.style.padding = '10px 0';
footer.style.marginTop = '20px';

// Agregar texto al footer
const footerText = document.createElement('p');
footerText.textContent = '© 2025 Mi Página. Todos los derechos reservados.';
footerText.style.margin = '0';
footerText.style.fontSize = '14px';
footer.appendChild(footerText);

// Agregar el footer al cuerpo del documento
document.body.appendChild(footer);

// Crear un elemento <style> para el reseteo de CSS
const style = document.createElement('style');
style.textContent = `
    /* Reseteo básico de CSS */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f4f4f4;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

// Agregar el estilo al documento (dentro del <head>)
document.head.appendChild(style);

// Crear un elemento <link> para el CDN de Bootstrap
const bootstrapLink = document.createElement('link');
bootstrapLink.rel = 'stylesheet';
bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
bootstrapLink.integrity = 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktgY1TyvKzFpCqf1qzCR7htpLitlcm596YbQ7BiNU';
bootstrapLink.crossOrigin = 'anonymous';

// Agregar el enlace al <head> del documento
document.head.appendChild(bootstrapLink);


