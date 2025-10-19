
  // Abre e fecha o modal de privacidade
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("privacyModal");
    const closeModal = document.getElementById("closeModal");
    const privacyLink = document.querySelector("#privacyLink"); // o link do rodapé

    // Abre o modal
    privacyLink.addEventListener("click", (e) => {
      e.preventDefault(); // evita mudança de URL
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.classList.add("overflow-hidden"); // bloqueia rolagem da página
    });

    // Fecha o modal
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    });

    // Fecha ao clicar fora da área branca
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
      }
    });
  });

