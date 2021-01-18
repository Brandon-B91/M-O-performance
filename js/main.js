const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const imgs = document.querySelectorAll('.img');
let altTxt = document.querySelector('.altTxt');


imgs.forEach((img) => {
    img.addEventListener('click', function mdl() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        altTxt.textContent = this.alt;
    })
})

function closeMdl() {
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    })
};
closeMdl();

function openModal() {
    let open = document.querySelector('#open');
    open.addEventListener('click', () => {
        let navMdl = document.querySelector('nav');
        let x = document.querySelector('#close');
        navMdl.classList.add('move');
        open.classList.remove('rotate')
        setTimeout(() => {
            open.style.display = 'none';
            x.classList.add('rotate')
        }, 100)
        x.style.display = 'block';
    });
};
openModal();

function closeModal() {
    let x = document.querySelector('#close');
    x.addEventListener('click', () => {
        let navMdl = document.querySelector('nav');
        navMdl.classList.remove('move');
        let open = document.querySelector('#open');
        open.style.display = 'block';
        setTimeout(() => {
            open.classList.add('rotate')
            x.style.display = 'none';
        }, 200)
        x.classList.remove('rotate');
    });
}
closeModal();

function mapApp() {
    let maps = document.querySelector('.maps');
    maps.addEventListener('click', () => {
        /* if we're on iOS, open in Apple Maps */
        if ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open('maps://maps.google.com/maps/dir/?daddr=206 + Wyoming + Blvd + NE, +Albuquerque, +NM + 87123');
        else /* else use Google */
            window.open('https://maps.google.com/maps/dir/?daddr=206 + Wyoming + Blvd + NE, +Albuquerque, +NM + 87123');
    });

};
mapApp();

function openFB() {
    let openFb = document.querySelector('.fb');
    openFb.addEventListener('click', () => {
        setTimeout(function() { window.location = 'https://www.facebook.com/MOs-Garage-and-Performance-101197434996259/'; }, 25);
        window.location = 'fb://profile/101197434996259';
    })
}
openFB();

function screenWidth() {
    let callUs = document.querySelector('label');
    let width = window.screen.width;
    callUs.addEventListener('click', () => {
        let contact = document.querySelector('.numbers');
        if (width > 600) {
            contact.classList.add('show-numbers');
        }
        setInterval(function() {
            contact.classList.remove('show-numbers')
        }, 10000);
    })
}
screenWidth();

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};


// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

function moveSlide() {
    var min_horizontal_move = 30;
    var max_vertical_move = 30;
    var within_ms = 1000;

    var start_xPos;
    var start_yPos;
    var start_time;

    function touch_start(event) {
        start_xPos = event.touches[0].pageX;
        start_yPos = event.touches[0].pageY;
        start_time = new Date();
    }


    function touch_end(event) {
        var end_xPos = event.changedTouches[0].pageX;
        var end_yPos = event.changedTouches[0].pageY;
        var end_time = new Date();
        let move_x = end_xPos - start_xPos;
        let move_y = end_yPos - start_yPos;
        let elapsed_time = end_time - start_time;
        if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
            if (move_x < 0) {
                nextSlide(slides + 1)
                clearInterval(slideInterval)
                slideInterval = setInterval(nextSlide, intervalTime);
            } else {
                prevSlide(slides - 1)
                clearInterval(slideInterval)
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        }
    }

    var content = document.querySelector('.slides');
    content.addEventListener('touchstart', touch_start);
    content.addEventListener('touchend', touch_end);

};

moveSlide();

