document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
});

function page3Animation() {
    var elemC = document.querySelector('#elem-container');
    var fixed = document.querySelector("#fixed-image");

    if (!elemC || !fixed) return; // Safety check if elements don't exist

    elemC.addEventListener('mouseenter', function () {
        fixed.style.display = 'block';
    });

    elemC.addEventListener('mouseleave', function () {
        fixed.style.display = 'none';
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}
page3Animation()