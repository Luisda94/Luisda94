<script>
document.addEventListener('DOMContentLoaded', function() {
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.addEventListener('click', function(event) {
        const userChoice = confirm("El archivo PDF se abrirá en una nueva pestaña. ¿Desea continuar?");
        if (!userChoice) {
            event.preventDefault();
        
document.addEventListener('DOMContentLoaded', function() {
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
</script>


</script>
