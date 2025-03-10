document.addEventListener("DOMContentLoaded", function () {
    // Example: Smooth scrolling for internal anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Additional interactive features can be added here (e.g., dark mode toggles, animated loaders, etc.)
  });
  