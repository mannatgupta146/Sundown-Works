document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    page3Animation(); // Use only once
    menuAnimation();
    loaderAnimation();
});

function page3Animation() {
    const elemC = document.querySelector('#elem-container');
    const fixed = document.querySelector('#fixed-image');

    if (!elemC || !fixed) return;

    const showFixed = () => { fixed.style.display = 'block'; };
    const hideFixed = () => { fixed.style.display = 'none'; };

    // Desktop + Mobile events
    elemC.addEventListener('mouseenter', showFixed);
    elemC.addEventListener('mouseleave', hideFixed);
    elemC.addEventListener('touchstart', showFixed);
    elemC.addEventListener('touchend', hideFixed);

    const elems = document.querySelectorAll('.elem');
    elems.forEach(function (e) {
        const setImage = () => {
            const image = e.getAttribute('data-image');
            fixed.style.backgroundImage = `url(${image})`;
        };
        e.addEventListener('mouseenter', setImage);
        e.addEventListener('touchstart', setImage);
    });
}

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    freeMode: true,
    grabCursor: true,
    watchOverflow: true,
});

function menuAnimation() {
    const menu = document.querySelector('nav h3');
    const full = document.querySelector('#full-scr');
    const navimg = document.querySelector('nav img');
    let flag = 0;

    const toggleMenu = () => {
        if (flag === 0) {
            full.style.top = '0';
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = '-100%';
            navimg.style.opacity = 1;
            flag = 0;
        }
    };

    menu.addEventListener('click', toggleMenu);
    menu.addEventListener('touchstart', toggleMenu);
}

function loaderAnimation() {
    const loader = document.querySelector('#loader');
    setTimeout(() => {
        loader.style.top = '-100%';
    }, 4200);
}
