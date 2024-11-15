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

    // Cambiar el texto del botón según el tema activo
    if (body.classList.contains('dark-theme')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Oscuro';
    }
});
