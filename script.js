document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup_add-post");
    const popupCloseBtn = document.querySelector(".popup-btn-close");
    const addPostBtn = document.querySelector(".btn_add-post");
    const popupBtnPostar = document.querySelector(".popup-btn-postar")
    const body = document.body;

    function openPopup() {
        popup.classList.add("show");
        body.classList.add("popup-active");
    }

    function closePopup() {
        popup.classList.remove("show");
        body.classList.remove("popup-active");
    }

    addPostBtn.addEventListener("click", openPopup);
    popupCloseBtn.addEventListener("click", closePopup);
    popupBtnPostar.addEventListener("click", closePopup);
    
    document.addEventListener("click", function (event) {
        if (popup.classList.contains("show") && !popup.contains(event.target) && !addPostBtn.contains(event.target)) {
            closePopup();
        }
    });
});
