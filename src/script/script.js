document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup_add-post");
    const popupCloseBtn = document.querySelector(".popup-btn-close");
    const addPostBtn = document.querySelector(".btn_add-post");
    const popupBtnPostar = document.querySelector(".popup-btn-postar");
    const feedTextArea = document.querySelector(".feed-add-post .popup-text-post"); 
    const feedButton = document.querySelector(".feed-add-post .popup-btn-postar"); 
    const popupTextArea = document.querySelector(".popup-text-post");
    const countSpan = document.querySelector(".count"); 
    const maxChars = 399;
    const body = document.body;

    function openPopup() {
        popup.classList.add("show");
        body.classList.add("popup-active");
    }

    function closePopup() {
        popup.classList.remove("show");
        body.classList.remove("popup-active");
    }

    function updateCharCount() {
        const charCount = popupTextArea.value.length;
        countSpan.textContent = charCount;

        if (charCount >= maxChars) {
            popupTextArea.value = popupTextArea.value.substring(0, maxChars);
        }
    }

    if (popupTextArea) {
        popupTextArea.addEventListener("input", updateCharCount);
    }

    if (feedTextArea) {
        feedTextArea.addEventListener("focus", openPopup);
    }

    if (feedButton) {
        feedButton.addEventListener("click", openPopup);
    }

    addPostBtn.addEventListener("click", openPopup);
    popupCloseBtn.addEventListener("click", closePopup);
    popupBtnPostar.addEventListener("click", closePopup);
    
    document.addEventListener("click", function (event) {
        if (popup.classList.contains("show") && !popup.contains(event.target) && !addPostBtn.contains(event.target)) {
            closePopup();
        }
    });

    // Inicializa o contador ao carregar a página
    updateCharCount();
});


