window.addEventListener('load', () => {

    const shoeImage = document.querySelector('.shoe-img');
    const firstInfo = document.querySelector('.first-info');
    const secondInfo = document.querySelector('.second-info');
    const hamburger = document.querySelector('.hamburger');
    const mobNav = document.querySelector('.mobile-nav');
    let shoeWidth = shoeImage.offsetWidth;


    responsive();

    window.addEventListener('resize', responsive);

    window.addEventListener('scroll', () => {
        hamburger.classList.remove('is-active');
        mobNav.classList.remove('is-active');
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobNav.classList.toggle('is-active');
    });

    function responsive() {
        if (firstInfo.offsetWidth / 2 < shoeWidth) {
            shoeImage.classList.add("semi-fit");
            secondInfo.classList.add("semi-fit");
        } else {
            shoeImage.classList.remove("semi-fit");
            secondInfo.classList.remove("semi-fit");
        }

        if (window.offsetWidth < 1080) {
            shoeImage.classList.remove("semi-fit");
            secondInfo.classList.remove("semi-fit");
        }
    }




    let sliderImages = document.querySelectorAll(".slide"),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right"),
        current = 0;

    // Clear all images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
    }

    // Show previous
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = "block";
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        current++;
    }

    // Left arrow click
    arrowLeft.addEventListener("click", function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Right arrow click
    arrowRight.addEventListener("click", function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });

    startSlide();
});

