document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const navLinks = document.querySelectorAll(".neo-nav a");

    // Toggle button click
    toggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.contains("active");
        isOpen ? closeSidebar() : openSidebar();
    });

    // Overlay click closes sidebar
    overlay.addEventListener("click", closeSidebar);

    // Close sidebar when clicking a menu link
    navLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Close sidebar on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });

    function openSidebar() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
});

//zoom in and out of product images
function openImage(img) {
    const modalImg = document.getElementById("modalImage");
    modalImg.src = img.src;
}

document.addEventListener("DOMContentLoaded", function () {

    const modalImage = document.getElementById("modalImage");
    const images = document.querySelectorAll(".zoom-img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.src;
        });
    });

});
