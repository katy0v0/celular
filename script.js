// Seleccionamos la imagen con clase "img1"
const logoImg = document.querySelector('.logo .img1');

// Función para verificar el tamaño de la pantalla y cambiar la imagen
function updateLogoImage() {
    if (window.innerWidth < 768) {
        logoImg.src = 'img celular.png'; // Imagen para dispositivos móviles
    } else {
        logoImg.src = 'img1.png'; // Imagen para pantallas grandes
    }
}

// Llamamos a la función al cargar la página
updateLogoImage();

// Escuchamos los cambios de tamaño de la ventana para actualizar la imagen
window.addEventListener('resize', updateLogoImage);
