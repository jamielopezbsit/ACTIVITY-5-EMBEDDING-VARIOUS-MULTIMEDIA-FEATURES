let slide = document.querySelectorAll('.home .container .slide');
let index = 0;

function next(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}

function prev(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}

var mysong = new Audio();
mysong.src = 'img/crazyinlove.mp3';

const playsong = () =>{
    mysong.play();
}

const pausesong = () =>{
    mysong.pause();
}

var mysongtwo = new Audio();
mysongtwo.src = 'img/headoverheels.mp3';

const playsongtwo = () =>{
    mysongtwo.play();
}

const pausesongtwo = () =>{
    mysongtwo.pause();
}

var mysongthree = new Audio();
mysongthree.src = 'img/pinkwhite.mp3';

const playsongthree = () =>{
    mysongthree.play();
}

const pausesongthree = () =>{
    mysongthree.pause();
}

var mysongfour = new Audio();
mysongfour.src = 'img/anywherebuthome.mp3';

const playsongfour = () =>{
    mysongfour.play();
}

const pausesongfour = () =>{
    mysongfour.pause();
}

var mysongfive = new Audio();
mysongfive.src = 'img/child.mp3';

const playsongfive = () =>{
    mysongfive.play();
}

const pausesongfive = () =>{
    mysongfive.pause();
}

