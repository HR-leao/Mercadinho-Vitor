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
let radios = document.querySelectorAll('.slides .radios')
let teste = document.querySelector('.slide.first')
let valor = 0;



function testeq () {
    if(valor === 0){
        setTimeout(function(){
            teste.style.marginLeft="-25%";
            valor++;
            console.log(valor);
            testeq();
        },3000)
    }if(valor===1){
        setTimeout(function(){
            teste.style.marginLeft="-50%";
            valor++
            console.log(valor);
            testeq();
        },3000)
    }
}

testeq()
setInterval(testeq,4000)