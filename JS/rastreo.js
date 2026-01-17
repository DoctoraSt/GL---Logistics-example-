// Obtener todos los enlaces de las pestañas
const tabLinks = document.querySelectorAll('.card-header .nav-link');
const tabContents = document.querySelectorAll('.tab-content-item');

// Agregar evento click a cada pestaña
tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover clase active de todos los enlaces
        tabLinks.forEach(l => l.classList.remove('active'));
        
        // Agregar clase active al enlace clickeado
        this.classList.add('active');
        
        // Ocultar todo el contenido
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Mostrar el contenido correspondiente
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});