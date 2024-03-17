function hamburgFunc(){
    var x = document.getElementById
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const fadeInSectionElement = document.getElementById("fade-in");

    function isElementInViewport(el) {
        const rect=el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function applyFadeIn() {
        if (isElementInViewport(fadeInSectionElement)) {
            fadeInSectionElement.style.opacity = 1;
            fadeInSectionElement.style.transform = "translateY(0)";
        }
        else {
            // for when the element is no longer on screen
            fadeInSectionElement.style.opacity = 0;
            fadeInSectionElement.style.transform = "translateY(20px)";
        }
    }

    applyFadeIn();

    window.addEventListener("scroll", applyFadeIn);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click",function() {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });
});

/*This section of code was adapted by me from code created by Fajar Nur Wahid
Date accessed on: 16th March 2024
Available at: https://codepen.io/fajarnurwahid/pen/VwyjLRz */

document.addEventListener('DOMContentLoaded', function() {
    const imageWrapper = document.querySelector('.image-banner')
    const imageItems = document.querySelectorAll('.image-banner > *')
    const imageLength = imageItems.length;
    let totalScroll = 0
    const delay = 2000;

    for(let i = 0; i < imageLength; i++) {
        imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
    }

    let autoScroll = setInterval(scroll, delay)
    function scroll() {
        if(totalScroll >= 2 * imageLength){
            console.log(imageLength)
            totalScroll = 0;
            clearInterval(autoScroll)
            setTimeout(() => {
                imageWrapper.style.transition = 'none';
                imageWrapper.style.left = '0s';
                setTimeout(() => {
                    imageWrapper.style.transition = '.3s';
                });
            });
            autoScroll = setInterval(scroll, delay)
        }
        const widthEl = document.querySelector('.image-banner > :first-child').offsetWidth + 24
        imageWrapper.style.left = `-${totalScroll * widthEl}px`
        imageWrapper.style.transition = '.3s'
        totalScroll++
    }

});