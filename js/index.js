document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#menu .navbar-nav .nav-link');

    // Función para establecer el enlace activo según la URL actual
    function setActiveLink() {
        var path = window.location.href;
        console.log('Current path:', path); // Depuración: Muestra la URL actual
        navLinks.forEach(function(link) {
            if (link.href === path) {
                console.log('Adding active class to:', link.href); // Depuración: Enlace que se activa
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Establece el enlace activo al cargar la página
    setActiveLink();

    // Agrega evento de clic para actualizar el enlace activo
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Clicked link:', link.href); // Depuración: Enlace clicado
            navLinks.forEach(function(otherLink) {
                otherLink.classList.remove('active');
            });
            link.classList.add('active');
            console.log('Active class added to:', link.href); // Depuración: Enlace que se activa tras el clic
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#menu .navbar-nav .nav-link');

    // Función para cambiar el color del texto del menú activo
    function setActiveLink() {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Remover la clase 'active' de todos los enlaces
                navLinks.forEach(function(otherLink) {
                    otherLink.classList.remove('active');
                });
                // Agregar la clase 'active' al enlace clicado
                link.classList.add('active');
            });
        });
    }

    // Llamar a la función para establecer el enlace activo
    setActiveLink();
});


 // FOOTER

 document.addEventListener('DOMContentLoaded', function() {
    var iconLinks = document.querySelectorAll('.info-section .icon-link');

    // Agregar evento de clic para cambiar el ícono activo
    iconLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remover la clase 'active' de todos los enlaces
            iconLinks.forEach(function(otherLink) {
                otherLink.classList.remove('active');
            });
            // Agregar la clase 'active' al enlace clicado
            link.classList.add('active');

            // Cambiar el fondo del enlace activo al hacer clic
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';

            // Cambiar el ícono al enlace activo
            var backgroundUrl = link.style.backgroundImage;
            document.getElementById('icon-container').style.backgroundImage = backgroundUrl;
        });
    });
});
