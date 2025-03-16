document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Image modal
    const images = document.querySelectorAll(".gallery img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.innerHTML = `<img src="${img.src}" class="modal-image"><span class="close">&times;</span>`;
            modal.style.display = "flex";

            document.querySelector(".close").addEventListener("click", () => {
                modal.style.display = "none";
            });
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.classList.add("dark-mode-btn");
    document.body.insertBefore(toggleButton, document.body.firstChild);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
