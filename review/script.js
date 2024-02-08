const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const testimonialsSection = document.querySelector('.testimonials');

allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0;
        ratingValue.value = idx + 1;
        console.log(ratingValue.value);

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });

        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star');
                allStar[i].classList.add('active');
            } else {
                allStar[i].style.setProperty('--i', click);
                click++;
            }
        }
    });
});

// Add an event listener to the navigation bar checkbox
// Add an event listener to the navigation bar checkbox
const navCheckbox = document.getElementById('check');
navCheckbox.addEventListener('change', function () {
    const allStar = document.querySelectorAll('.rating .star');
    const ratingValue = document.querySelector('.rating input');

    if (this.checked) {
        // Uncheck the stars
        ratingValue.value = 0;

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });
    }
});
