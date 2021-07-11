const icons = document.querySelectorAll(".section1Icons i");
const menu = document.querySelector(".menu");
let counter = 1;
setInterval(() => {
    counter++;
    const icon = document.querySelector(".section1Icons .change");
    icon.classList.remove("change")
    if (counter > icons.length) {
        icons[0].classList.add("change")
        counter = 1
    }
    else
        icon.nextElementSibling.classList.add("change")
}, 4000);

menu.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
        item.classList.toggle("change")
    })
})