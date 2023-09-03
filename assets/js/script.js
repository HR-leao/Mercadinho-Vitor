
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
