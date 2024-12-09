// Utility function to load an external HTML file into a container
function loadTemplate(containerId, templateFile) {
    const container = document.getElementById(containerId);

    fetch(templateFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${templateFile}`);
            }
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading ${templateFile}:`, error);
        });
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    loadTemplate("head-container", "head.html");
    loadTemplate("header-container", "header.html");
    loadTemplate("footer-container", "footer.html");
});
