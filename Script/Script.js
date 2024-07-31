<script>
document.addEventListener('DOMContentLoaded', function() {
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.addEventListener('click', function(event) {
        const userChoice = confirm("El archivo PDF se abrirá en una nueva pestaña. ¿Desea continuar?");
        if (!userChoice) {
            event.preventDefault();
        }
    });
});
</script>