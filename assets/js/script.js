//COLOCANDO COR NO FUNDO DO BOTÃO DO SLIDE
let manualBtn = document.querySelectorAll('.manual-btn').forEach((e)=>{
    e.addEventListener('click', ()=>{
    // Remover a classe 'active' de todos os elementos com a mesma classe
        document.querySelectorAll('.manual-btn').forEach((ele)=>{
        ele.classList.remove('active');
        
        });
    // Adicionar a classe 'active' ao elemento clicado
        e.classList.add('active')
    })
     
})
//___________________________________________________________________________________________________

let count = 1;
let radio = document.querySelector('#radio1').checked = true;
let auto = document.querySelectorAll('.auto')
let auto1 = document.querySelector('.auto-btn1')
let auto2 = document.querySelector('.auto-btn2')
let auto3 = document.querySelector('.auto-btn3')
let tet = document.querySelectorAll('.manual-btn')




tet.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(tet){
             auto3.classList.remove('active')
             auto2.classList.remove('active')
             auto1.classList.remove('active')
             setInterval(function(){
                e.classList.remove('active')
             },3000)
        }
    })
})




function teste () {
    
    setTimeout(function(){
        if(count === 1){
        auto1.classList.add('active')
        auto3.classList.remove('active')
        console.log(count)
            
    }
    },3000)
    
    setInterval(function(){
        if(count === 2){
        auto1.classList.remove('active')
        auto2.classList.add('active')
        console.log(count)
    }
    },3000)
    setInterval(function(){
        if(count===3) {
        auto2.classList.remove('active')
        auto3.classList.add('active')
         console.log(count)
    }
    },3000)
}


setInterval(function() {
   
    teste()
    nextImage()
}, 3000)


function nextImage() {

    count++;
    if(count > 3) {
        
        count =1;
        
    }
    let v = document.querySelector('#radio'+count).checked = true;

}

