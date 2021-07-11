let p = 1;
const width = window.innerWidth;
const height = window.innerHeight;
const container = document.querySelector('section');
const html = document.querySelector('html');
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