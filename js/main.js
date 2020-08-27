const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const imgs = document.querySelectorAll('.img');


imgs.forEach((img) => {
    img.addEventListener('click', function mdl() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        // altTxt.textContent = this.alt;
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
        setInterval(() => {
            open.style.display = 'block';
        }, 600);
    });
};
openModal();

function mapApp() {
    let maps = document.querySelector('.maps');
    maps.addEventListener('click', () => {
        if /* if we're on iOS, open in Apple Maps */ ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("https://maps.apple.com/maps/place/dir/206+Wyoming+Blvd+NE,+Albuquerque,+NM+87123/@35.0766925,-106.5522404,17z/data=!4m5!3m4!1s0x87220a892e96d6b9:0x35fd66f0b7f725f6!8m2!3d35.0766925!4d-106.5500517");
        else /* else use Google */
            window.open("https://maps.google.com/maps/place/dir/206+Wyoming+Blvd+NE,+Albuquerque,+NM+87123/@35.0766925,-106.5522404,17z/data=!4m5!3m4!1s0x87220a892e96d6b9:0x35fd66f0b7f725f6!8m2!3d35.0766925!4d-106.5500517");
    })

};
mapApp();