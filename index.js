let p = 1;
window.onload = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

var nextPage = function () {
    var topPos = document.getElementsByClassName('container')[p].offsetTop;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
}

const next = () => {
    p++
    nextPage()
}
const before = () => {
    p--
    nextPage()
}