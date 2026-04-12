document.addEventListener('DOMContentLoaded', function() {

    // =========================
    // NAVBAR DINÁMICO SEGÚN TEMA
    // =========================
    const navbar = document.querySelector(".navbar");

    function actualizarNavbar() {
        if (document.body.classList.contains("dark-theme")) {
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
        } else {
            navbar.classList.remove("navbar-dark");
            navbar.classList.add("navbar-light");
        }
    }

    // =========================
    // TEMA INICIAL
    // =========================
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userSetTheme = localStorage.getItem('theme');

    if (!userSetTheme) {
        document.body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
    } else {
        document.body.classList.add(userSetTheme);
    }

    actualizarNavbar();

    // =========================
    // BOTÓN CAMBIO DE TEMA
    // =========================
    const themeBtn = document.getElementById('theme-toggle');

    // ── CAMBIO 12/04/2026 ──────────────────────────────────────────
    // El ícono del botón no se sincronizaba con el tema al cargar
    // la página. Si el usuario tenía guardado "light-theme" en
    // localStorage y recargaba, el botón mostraba la luna (dark)
    // en lugar del sol (light), porque el ícono nunca se inicializaba.
    // Solución: leer el tema actual al arrancar y setear el ícono.
    // ────────────────────────────────────────────────────────────────
    const iconoInicial = themeBtn.querySelector('i');
    if (iconoInicial) {
        iconoInicial.className = document.body.classList.contains('dark-theme')
            ? 'fas fa-sun'
            : 'fas fa-moon';
    }

    themeBtn.addEventListener('click', function() {
        const body = document.body;

        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        // Guardar preferencia
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', currentTheme);

        // Cambiar icono
        let icon = this.querySelector('i');
        if (!icon) {
            icon = document.createElement('i');
            this.textContent = '';
            this.appendChild(icon);
        }

        icon.className = body.classList.contains('dark-theme')
            ? 'fas fa-sun'
            : 'fas fa-moon';

        actualizarNavbar();
    });

    // =========================
    // DESCARGA PDF
    // =========================
    const downloadLink = document.getElementById('downloadLink');
    if (downloadLink) {
        downloadLink.addEventListener('click', function(event) {
            if (!confirm("El archivo PDF se abrirá en una nueva pestaña. ¿Desea continuar?")) {
                event.preventDefault();
            }
        });
    }

    // =========================
    // COLLAPSIBLES
    // =========================
    const collapsibles = document.querySelectorAll('.collapsible-button');
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });

});
