const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

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
}