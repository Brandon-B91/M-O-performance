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

const x = document.querySelector('#close');
x.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.style.display = 'none';
});

const open = document.querySelector('#open');
open.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.style.display = 'block';
});