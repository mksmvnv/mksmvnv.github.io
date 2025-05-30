// Load tech stack

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".tech-stack-grid");
  const loader = container.querySelector(".tech-stack-loader");

  fetch("static/json/techstack.json")
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then((techItems) => {
      loader.remove();

      techItems.forEach((item) => {
        const tile = document.createElement("div");
        tile.className = "tech-tile";
        tile.innerHTML = `
          <img src="${item.img}" alt="${item.alt}" loading="lazy" />
          <span>${item.name}</span>
        `;
        container.appendChild(tile);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      loader.textContent = "Failed to load";
      loader.style.color = "#ff6b6b";
    });
});
