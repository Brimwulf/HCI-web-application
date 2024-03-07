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