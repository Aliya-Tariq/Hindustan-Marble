
// Parallax scrolling effect
window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    const scrollValue = window.scrollY;

    parallax.style.backgroundPositionY = -scrollValue * 0.5 + 'px';
});