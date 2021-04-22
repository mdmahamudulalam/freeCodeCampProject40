
let count = 0;
let steps = 0;

let btns = document.querySelectorAll('.btn')
let value = document.querySelector('#number');
let set = document.querySelector('.step');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const style = e.currentTarget.classList;

        if(style.contains('decButton')){

            count -=steps;
        }
        if(style.contains('incButton')){

            count += steps;
        }
        if(style.contains('resButton')){

            count= 0;
        }
        if(style.contains('stepButton')){
           steps++; 
        }
        if (count <0){
            value.style.color = 'red';
        }
        if (count >0){
            value.style.color = 'green';
        }
        if (count == 0){
            value.style.color = 'black';
        }
        set.textContent = steps;

        value.textContent = count;

    }
    )
})



