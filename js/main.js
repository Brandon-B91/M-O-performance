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
        setTimeout(() => {
            open.classList.add('rotate')
            x.style.display = 'none';
        }, 200)
        let open = document.querySelector('#open');
        open.style.display = 'block';
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