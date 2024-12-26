document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".mobile-menu__close");
    const overlay = document.querySelector(".overlay");

    // Функция для открытия меню
    const openMenu = () => {
        mobileMenu.classList.add("open");
        overlay.classList.add("active");
    };

    // Функция для закрытия меню
    const closeMobileMenu = () => {
        mobileMenu.classList.remove("open");
        overlay.classList.remove("active");
    };

    // Открываем меню при клике на бургер
    burger.addEventListener("click", openMenu);

    // Закрываем меню при клике на крестик или оверлей
    closeMenu.addEventListener("click", closeMobileMenu);
    overlay.addEventListener("click", closeMobileMenu);
});