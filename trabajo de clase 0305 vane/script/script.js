let increment = 0;

let show = document.querySelector('.show');

let cuerpo = document.querySelector('.container');

document.addEventListener('click',(e)=>{
    console.log(e)

    if(e.target.matches('#decrease')){
    increment--
    show.innerHTML = increment
   cuerpo.style.backgroungColor = 'rgb(171, 123, 233 )';
   document.getElementById()
    }
    if(e.target.matches('#increase')){
        increment ++
        show.innerHTML = increment
        cuerpo.style.backgroungColor = 'rgb ( 234, 118, 188 )';
        document.getElementById()
    }
    if(e.target.matches('#reset')){
        increment =  0
        show.innerHTML = increment
        cuerpo.style.backgroungColor = 'rgb (236, 149, 202 )';
        document.getElementById()
    }
})


