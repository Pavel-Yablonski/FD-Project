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
    search.classList.toggle("header__search-block__open");
}

function closeSearch() {
    let search = document.querySelector(".header__search-block");
    search.classList.remove("header__search-block__open");
}
function burgerMenu() {
    document.querySelector(".header__menu-burger").classList.toggle("header__menu-burger-active");
    document.querySelector(".header__menu-list").classList.toggle("header__menu-list_show");
    document.querySelector(".main").classList.toggle("main__show");
    document.querySelector(".footer").classList.toggle("footer__show");
}

function adaptiveFilter() {
    document.querySelector(".catalog-sales").classList.add("catalog-sales__show");
    document.querySelector(".header").classList.add("header__show");
    document.querySelector(".footer").classList.add("footer__show");
    document.querySelector(".breadcrumbs-block").classList.add("breadcrumbs-block__show");
    document.querySelector(".h1").classList.add("h1__show");
    document.querySelector(".main").classList.add("main__padding");
    document.querySelector(".catalog-content").classList.add("catalog-content__show");
    document.querySelector(".catalog-content").classList.add("aside-padding__hide");
}

function submitCloseAdaptive() {
    document.querySelector(".catalog-sales").classList.remove("catalog-sales__show");
    document.querySelector(".header").classList.remove("header__show");
    document.querySelector(".footer").classList.remove("footer__show");
    document.querySelector(".breadcrumbs-block").classList.remove("breadcrumbs-block__show");
    document.querySelector(".h1").classList.remove("h1__show");
    document.querySelector(".main").classList.remove("main__padding");
    document.querySelector(".catalog-content").classList.remove("catalog-content__show");
    document.querySelector(".catalog-content").classList.remove("aside-padding__hide");
}