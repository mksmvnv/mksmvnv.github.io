// Performance optimizations for animations

document.addEventListener('DOMContentLoaded', function() {
  // Preload critical resources
  const preloadLinks = [
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'
  ];
  
  preloadLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });

  // Optimize hover events for better performance
  const socialIcons = document.querySelectorAll('.nav.justify-content-center .nav-link i');
  
  socialIcons.forEach(icon => {
    // Add passive event listeners for better performance
    icon.addEventListener('mouseenter', function() {
      this.style.willChange = 'transform';
    }, { passive: true });
    
    icon.addEventListener('mouseleave', function() {
      // Reset will-change after animation to free up GPU memory
      setTimeout(() => {
        this.style.willChange = 'auto';
      }, 200);
    }, { passive: true });
  });

  // Optimize theme toggle performance
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Add a small delay to prevent rapid clicking issues
      this.style.pointerEvents = 'none';
      setTimeout(() => {
        this.style.pointerEvents = 'auto';
      }, 300);
    });
  }

  // Optimize tech stack tiles
  const techTiles = document.querySelectorAll('.tech-tile');
  techTiles.forEach(tile => {
    tile.addEventListener('mouseenter', function() {
      this.style.willChange = 'transform, border-color';
    }, { passive: true });
    
    tile.addEventListener('mouseleave', function() {
      setTimeout(() => {
        this.style.willChange = 'auto';
      }, 300);
    }, { passive: true });
  });
});

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize window resize events
window.addEventListener('resize', debounce(function() {
  // Force reflow for better animation performance after resize
  document.body.offsetHeight;
}, 250)); 