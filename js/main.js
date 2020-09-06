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


modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
});

function openModal() {

    let open = document.querySelector('#open');
    open.addEventListener('click', () => {
        let navMdl = document.querySelector('nav');
        navMdl.classList.add('move');
        open.style.display = "none";


    });

    let x = document.querySelector('#close');
    x.addEventListener('click', () => {
        let navMdl = document.querySelector('nav');
        navMdl.classList.remove('move');
        setTimeout(() => {
            open.style.display = 'block';
        }, 600);
        clearInterval();
    });
};
openModal();

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
        }, 15000);
    })
}
screenWidth();