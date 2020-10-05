function openModalWindow() {
    let modal = document.querySelector(".modal-window");
    modal.classList.add("modal-window__open");
}

function closeModalWindow() {
    let modal = document.querySelector(".modal-window");
    modal.classList.remove("modal-window__open");
}

function openText() {
    let text = document.querySelector(".show-all-text");
    let textBtn = document.querySelector(".show-all-link")
    text.classList.add("show-all-text__open");
    textBtn.classList.add("show-all-link__close")
}

function openSearch() {
    let search = document.querySelector(".header__search-block");
    search.classList.add("header__search-block__open");
}

function closeSearch() {
    let search = document.querySelector(".header__search-block");
    search.classList.remove("header__search-block__open");
}