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



/*VARIÁVEL CRIADA PARA IR MUDANDO O VALOR DO MEU ID E AUTOMÁTICAMENTE VAI TROCANDO */
let count = 1;

/*SELEÇÃO DO  INPUT RADIOS  PARA USAR EM CONJUNTO COM A VARIÁVEL COUNT E IR TROCANDO PARA #raio1, #radio2 #radio3*/
let radio = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')



/*SELEÇÃO DOS BOTÕES AUTOMÁTICOS DO SLIDE */
let auto1 = document.querySelector('.auto-btn1')
let auto2 = document.querySelector('.auto-btn2')
let auto3 = document.querySelector('.auto-btn3')


/*VARIÁVEL tet ESTÁ SERVINDO PARA CRIAR UMA FUNÇÃO DE CLICK QUE IRA REMOVER A CLASS ACTIVE DE TODOS OS BOTÕES DO SLIDE */
let mnBotao = document.querySelectorAll('.manual-btn')


let radios = document.getElementsByClassName('.radios')




mnBotao.forEach((e)=>{
    e.addEventListener('click', ()=>{

        let t = e.getAttribute('data-valor')
        if(e){
             auto3.classList.remove('active')
             auto2.classList.remove('active')
             auto1.classList.remove('active')
             setTimeout(function(){
                e.classList.remove('active')
             },1000)
        }
        if(t === '1') {
            count = 1;
        }
        if(t === '2'){
            count = 2;
        }
        if(t === '3'){
            count = 3;
        }
    })

})






function teste () {
    
    
        setInterval(function(){
        if(count === 1){
        auto1.classList.add('active')
        auto3.classList.remove('active')
        console.log(count)
    }
        },2000)
    
    setInterval(function(){
        if(count === 2){
        auto1.classList.remove('active')
        auto2.classList.add('active')
        console.log(count)
        
    }
    },2000)
    setInterval(function(){
        if(count=== 3) {
        auto2.classList.remove('active')
        auto3.classList.add('active')
       console.log(count)
    }
    },2000)
}

teste()
setInterval(function(){
    teste()
},1000)

setInterval(function() {
    nextImage()
    
}, 3000)


function nextImage() {
    console.log('Entrou no FOR'+count)
    count++;
    if(count > 3) {
        count =1;
        
    }
    document.querySelector('#radio'+count).checked = true;

}

