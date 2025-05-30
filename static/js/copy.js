// Copy to clipboard

const copyText = document.getElementById("copyText");
const copyToast = new bootstrap.Toast(document.getElementById("copyToast"));

copyText.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyText.textContent);

    copyToast.show();

    setTimeout(() => {
      copyText.style.cursor = "pointer";
      copyText.innerHTML = "@mksmvnv";
    }, 1000);
  } catch (err) {
    console.error("Copy error:", err);
    copyToast._element.querySelector(".toast-body").innerHTML = `
      <i class="bi bi-x-circle-fill text-danger me-2"></i>
      Copy error!
    `;
    copyToast.show();
  }
});
