// Dark mode

const htmlElement = document.getElementById("html-theme");
const themeIcon = document.getElementById("theme-icon");
const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(themeName) {
  // Temporarily disable transitions during theme switch to prevent flickering
  const socialIcons = document.querySelectorAll('.nav.justify-content-center .nav-link i');
  const themeToggleIcon = document.getElementById('theme-icon');
  
  // Disable transitions
  socialIcons.forEach(icon => {
    icon.style.transition = 'none';
  });
  if (themeToggleIcon) {
    themeToggleIcon.style.transition = 'none';
  }
  
  // Use requestAnimationFrame for smoother theme transitions
  requestAnimationFrame(() => {
    htmlElement.setAttribute("data-bs-theme", themeName);
    document.body.className = themeName === "dark" ? "bg-dark text-white" : "bg-light text-dark";
    localStorage.setItem("theme", themeName);

    if (themeName === "dark") {
      themeIcon.classList.replace("bi-brightness-high", "bi-moon");
    } else {
      themeIcon.classList.replace("bi-moon", "bi-brightness-high");
    }
    
    // Re-enable transitions after a short delay
    setTimeout(() => {
      socialIcons.forEach(icon => {
        icon.style.transition = '';
      });
      if (themeToggleIcon) {
        themeToggleIcon.style.transition = '';
      }
    }, 50);
  });
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});
