const disabledMenu = document.querySelector("#nav-mobile-on");
const includedMenu = document.querySelector("#nav-mobile-off");

const menu = document.querySelector("#menu-mobile");
const ellipse1 = document.querySelector(".ellipse-mobile");
const ellipse2 = document.querySelector(".ellipse-mobile").nextElementSibling;
const header = document.querySelector("#header-text-mobile");
const navOff = document.querySelector("#nav-mobile-off");

const container = document.querySelector(".container-mobile");
const arrContainers = [
    container.childNodes[1],
    container.nextElementSibling.childNodes[1],
    container.nextElementSibling.nextElementSibling.childNodes[1],
    container.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[1]
];

disabledMenu.onclick = function() {
    menu.style.display = "flex";
    ellipse1.style.display = "flex";
    ellipse2.style.display = "flex";
    header.style.display = "flex";
    navOff.style.display = "flex";
    document.body.style.overflowY = "hidden";
}
includedMenu.onclick = function() {
    menu.style.display = "none";
    ellipse1.style.display = "none";
    ellipse2.style.display = "none";
    header.style.display = "none";
    navOff.style.display = "none";
    document.body.style.overflowY = "visible";
}

function useNavigation() {
    for (const elem of arrContainers) {
        elem.onclick = function() {
            menu.style.display = "none";
            ellipse1.style.display = "none";
            ellipse2.style.display = "none";
            header.style.display = "none";
            navOff.style.display = "none";
            document.body.style.overflowY = "visible";
        }
    }
}

useNavigation();
