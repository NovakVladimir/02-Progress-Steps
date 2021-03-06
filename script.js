const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var sound = document.createElement('audio');
sound.src = './audio/1.mp3';
var sound_2 = document.createElement('audio');
sound_2.src = './audio/2.mp3'

let currentActive = 1;

next.addEventListener('click', ()=> {
    currentActive++;
    currentActive = currentActive > circles.length? circles.length : currentActive;
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    currentActive = currentActive < 1? 1: currentActive;
    update();
})

function update() {
    circles.forEach((circle,idx) => {
        idx < currentActive? circle.classList.add('active') : circle.classList.remove('active');
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + "%";
    currentActive === 1? prev.disabled = true : prev.disabled = false;
    currentActive === circles.length? next.disabled = true : next.disabled = false;
    currentActive % 2 === 0? sound.play() : sound_2.play();
}