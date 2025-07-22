document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
});

var elemC = document.querySelector('#elem-container')
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener('mouseenter', function() {
    fixed.style.display = 'block';
});
elemC.addEventListener('mouseleave', function() {
    fixed.style.display = 'none';
});