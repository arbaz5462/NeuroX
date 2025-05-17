document.addEventListener("DOMContentLoaded", () => {
  const openModal = document.getElementById("open-login-modal");
  const closeModal = document.getElementById("close-login-modal");
  const modal = document.getElementById("loginModal");

  if (openModal && closeModal && modal) {
    openModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }
});
