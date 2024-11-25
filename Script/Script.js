document.addEventListener('DOMContentLoaded', function() {
    // Manejo del enlace de descarga
    const downloadLink = document.getElementById('downloadLink');
    if (downloadLink) {
        downloadLink.addEventListener('click', function(event) {
            const userChoice = confirm("El archivo PDF se abrirá en una nueva pestaña. ¿Desea continuar?");
            if (!userChoice) {
                event.preventDefault();
            }
        });
        function confirmAction() {
            return confirm("El archivo PDF se abrirá en una nueva pestaña. ¿Desea continuar?");
        }
        
    }

    // Manejo de botones colapsables
    const collapsibles = document.querySelectorAll('.collapsible-button');
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Seleccionar el elemento <i> dentro del botón
    let icon = this.querySelector('i');

    // Si no existe, crearlo
    if (!icon) {
        icon = document.createElement('i');
        this.textContent = ''; // Limpiar cualquier texto
        this.appendChild(icon);
    }

    // Cambiar el ícono según el tema activo
    if (body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun'; // Cambiar a icono de sol
    } else {
        icon.className = 'fas fa-moon'; // Cambiar a icono de luna
    }
});
