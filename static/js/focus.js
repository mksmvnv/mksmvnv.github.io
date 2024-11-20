// Focus on click

document.addEventListener("click", function (event) {
  if (!event.target.closest(".tech-tile")) {
    document.activeElement.blur();
  }
});
