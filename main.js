let btn = document.querySelector('.clickBtn');
let col = document.querySelector('.color');

colors = ['red', 'green', 'blue', 'pink'];

btn.addEventListener('click', function(){
    const randomNum = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNum];
    col.textContent = colors[randomNum];

});

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length);
}