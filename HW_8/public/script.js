window.addEventListener("load", () => {

    const menu = document.querySelector(".side_menu");
    const ham = document.querySelector(".ham");
    const close = document.querySelector(".close");
    const headerShade = document.querySelector(".header_shade");

    ham.addEventListener("click", toggleMenu);
    close.addEventListener("click", closeMenu);

    function toggleMenu() {
        if (menu.classList.contains("show_side_menu")) {
            menu.classList.remove("show_side_menu");
            ham.classList.remove("rotate_ham");
            headerShade.style.opacity = "0";
            headerShade.style.visibility = "hidden";
        } else {
            menu.classList.add("show_side_menu");
            ham.classList.add("rotate_ham");
            headerShade.style.opacity = "1";
            headerShade.style.visibility = "visible";
        }
    };

    function closeMenu() {
        headerShade.style.opacity = "0";
        headerShade.style.visibility = "hidden";
        menu.classList.remove("show_side_menu");
        ham.classList.remove("rotate_ham");
    };

    let menuLinks = document.querySelectorAll(".menuLink");

    menuLinks.forEach(
        function (menuLink) {
            menuLink.addEventListener("click", closeMenu);
        }
    );

});

