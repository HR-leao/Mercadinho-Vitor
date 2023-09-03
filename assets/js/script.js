let radios = document.querySelectorAll('.radios').forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(e.checked) {
            mudaCor(e)
        }
    })
})


function mudaCor(p){
    document.querySelectorAll('.manual-btn').forEach((e) =>{
        console.log(e.target)
    })
}   

mudaCor()