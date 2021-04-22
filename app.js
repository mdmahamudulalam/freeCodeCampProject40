const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.querySelector('.btn');
const col = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = "#";
    /*for (let i = 0; i <6; i++ ){
        hexColor += hex[clickHandler()];
    }*/
    
    hex.forEach(element => {
        if(element < 6){
            hexColor += hex[clickHandler()];
        }
        
    });
    document.body.style.backgroundColor = hexColor;
    col.innerHTML = hexColor;
})

const clickHandler = ()=>{

return Math.floor(Math.random()*hex.length);

}