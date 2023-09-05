//COLOCANDO COR NO FUNDO DO BOTÃO DO SLIDE
document.querySelectorAll('.manual-btn').forEach((e)=>{
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
document.querySelector('#radio1').checked = true;

setInterval(function() {
    nextImage()
}, 3000)


function nextImage() {
    count++;
    if(count > 3) {
        count =1;
    }

    let v = document.querySelector('#radio'+count).checked = true;
    
}