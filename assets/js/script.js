
//CONFIGURAÇÃO DO SLIDE VIA BIBLIOTECA JQUERY USANDO O SLICK




/* 
LINKS  DEPENDÊNCIAS PARA O FUNCIONAMENTO DO SLICK

    
	LINK CSS PARA USAR O slick
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
	
	
	LINK SCRIPT PARA IMPORTAR BIBLIOTECA JQUERY	
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	
	
	
	
	JAVASCRIPT, A CONFIGURAÇÃO NECESSÁRIA PARA O SLICK FUNCIONAR
	$(document).ready(function () {
    $('.slides').slick({
        autoplay: true,  // Ativar a reprodução automática
        autoplaySpeed: 3000,  // Intervalo de tempo entre os slides (em milissegundos)
        dots: true,  // Mostrar indicadores de pontos
        infinite: true,  // Repetir o carrossel indefinidamente
        speed: 500,  // Velocidade de transição (em milissegundos)
        fade: false,  // Ativar transições de fade
        cssEase: 'linear'  // Tipo de transição
    });
});


*/


$(document).ready(function () {
    $('.slides').slick({

        vertical:true,
        autoplay: true,  // Ativar a reprodução automática
        autoplaySpeed: 4000,  // Intervalo de tempo entre os slides (em milissegundos)
        dots: false,  // Mostrar indicadores de pontos
        infinite: true,  // Repetir o carrossel indefinidamente
        speed: 1000,  // Velocidade de transição (em milissegundos)
        fade: false,  // Ativar transições de fade
        cssEase: 'ease-in-out'  // Tipo de transição
    });

});

/*FIM DO SLIDE */



/*CONFIGURAÇÃO MENU-SANDUICHI APARECER DESAPARECER */

let mnSanduIch = document.querySelector('.div--menu')
let bLateral = document.querySelector('.nav-sidebar-left') 

mnSanduIch.addEventListener('click', ()=>{
    if(bLateral.classList.contains('open')){
        bLateral.classList.remove('open')
        console.log('CONTEM')
    }else {
        bLateral.classList.add('open')
    }
})

/*FIM CONFIGURAÇÃO MENU-SANDUICHI APARECER DESAPARECER */
/*
pizzaItem.setAttribute('data-key', index);
pizzaItem.querySelector('.pizza-item--img img').src = item.img
pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
pizzaItem.querySelector('.pizza-item--price').innerHTML = `RS ${item.price.toFixed(2)}`
pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
*/






const c = (el) => document.querySelector(el); //FUNÇÃO PRA ABREVIAR O QUERYSELECTOR

const all = (el) => document.querySelectorAll(el)
/*CLONANDO PRODUTOS */

produtosJson.map((item, index)=>{
    let proDuto = c('.produto').cloneNode(true)//CLONANDO O PRODUTO

    proDuto.setAttribute('data-key',index);//ADICIONANDO O ATRIBUTE DATAKEI COM O VALOR DO INDEX
    proDuto.querySelector('.imgProd').src = item.img;
    proDuto.querySelector('.titulo').innerHTML = `${item.name}`; //PEGANDO O NOME NO JSON E JOGANDO NO PRODUTO
    proDuto.querySelector('.descricao').innerHTML = item.description//PEGANDO A DESCRIÇÃO NO JSON E JOGANDO NO PRODUTO
    proDuto.querySelector('.valor').innerHTML = `R$ ${item.price.toFixed(2) }`//PEGANDO O VALOR DO PRODUTO NO JSON E JOGANDO NO PRODUTO
    proDuto.querySelector('.tamanho').innerHTML = item.size//PEGANDO O TAMANHO DO PRODUTO NO JSON E JOGANDO NO PRODUTO
    
    //AQUI ESTÁ SENDO INTERROMPIDO O COMPORTAMENTO PADRÃO DO DETERMINADO ELEMENTO.
    proDuto.querySelector('.link-produto').addEventListener('click', (e)=>{
        e.preventDefault();

        //.clossest() PROCURA O ELEMENTO MAIS PRÓXIMO QUE TENHA .produto NESSE CASO O .produto ESTÁ ENVOLVIDO PELA TAG a 
        let key = e.target.closest('.produto').getAttribute('data-key')
        c('.img-modal img').src=item.img;
        c('.titulo-desc-mod').innerHTML = item.name;
        c('.cifrao').innerHTML = `R$ ${item.price.toFixed(2)}`
        c('.desc-mod').innerHTML= item.description;
        //FAZ COM QUE O MODAL CRIE UM EFEITO DE ANIMAÇÃO PARA QUE ELE ABRA MAIS MALEÁVEL EM VEZ DE ABRIR DE UMA VEZ
        c('.window-area-produtos').style.opacity = 0;
        c('.window-area-produtos').style.display = 'flex'
        setTimeout(()=>{ //PARA QUE ELE DE O EFEITO DESEJADO PRECISA ESPERAR UM POQUINHO PO ISSO USMOS setTIMEOUT
            c('.window-area-produtos').style.opacity = 1;//O EFEITO OPACITY DO 0 ATÉ 1 DE FORMA PAUSADA CRIA ESSSA ANIMALÇÃO
        },100)

        c('.cancela-modal').addEventListener('click', () => {//FECHA O MODAL AO CLICAR NO BOTÃO CANCELA
            setTimeout(()=>{
                c('.window-area-produtos').style.opacity = 0; // ATRIBUINDO O VALOR 0 PARA OPACITE PARA FICAR INVISÍVEL
                
            },200)//ESPERA 200 MILISEGUNDOS PARA RETORNAR O CÓDIGO
            setTimeout(()=>{
                c('.window-area-produtos').style.display = 'none'//RETIRANDO O MODAL POIS SE DEIXAR SOMENTE O OPACIT ELE VAI CONTINUAR NO LOCAL E NÃO VAI DAR PRA CLICAR EM OUTRO ITEM.
            },500)//ESPERANDO 500 MILISEGUNDOS PARA RETORNAR O CÓDIGO
            
        })


    })



    c('.produto-area').append(proDuto)//ADICIONANDO O PRODUTO CLONADO NA DIV QUE COLOQUEI ESPECIALMENTE PRA ELES


    let ref = document.querySelectorAll('.link')
    ref.forEach((el) => {
        el.addEventListener('click', () => {
            let guardaDatKey = null;
            guardaDatKey = el.getAttribute('data-key')
            if (guardaDatKey === 'refri') {
                proDuto.style.display = 'none'
              

            }

        })

    }) 

    //VERIFICAÇÃO DE INPUT E PESQUISA DE PRODUTOS
    let input = c('#input-menu');
    input.addEventListener('keyup', (e) => {
        let value = input.value.trim().toUpperCase(); // Converter o valor do input para maiúsculas e remover espaços em branco
        

            let produtoCorrespondente = null; // Variável para armazenar o elemento correspondente

            produtosJson.forEach((item, index) => {
                let nome = item.name.toUpperCase();

                if (value === nome) {
                    produtoCorrespondente = c(`.produto[data-key="${index}"]`);
                    
                    
                }
            });
            
            if (produtoCorrespondente) {
                produtoCorrespondente.style.marginRight='130px'
                const todosprod =all('.produto');
                todosprod.forEach((produto)=>{
                    if(produto!== produtoCorrespondente) {
                        produto.style.display='none'
                    }
                    

                })
                
            }
            
            t = c('#input-menu').value
            if (t === '') {
                
                const volta  = all('.produto');
                volta.forEach((e)=>{
                    e.style.display='flex'
                    e.style.marginRight=""
                })
                
            } 
        

        
    });


});





//CONFIGURALÇÃO DO MENU






function tt() {
    RefriJson.map((item) => {
        let clonesRefri = c('.produto').cloneNode(true)
        clonesRefri.setAttribute('data-key', item.name)
        clonesRefri.querySelector('.imgProd').src = item.img
        clonesRefri.querySelector('.titulo').innerHTML = item.name
        clonesRefri.querySelector('.tamanho').innerHTML = item.size
        clonesRefri.querySelector('.descricao').innerHTML = item.description;

        clonesRefri.querySelector('.link-produto').addEventListener('click', (e) => {
            e.preventDefault();

            //.clossest() PROCURA O ELEMENTO MAIS PRÓXIMO QUE TENHA .produto NESSE CASO O .produto ESTÁ ENVOLVIDO PELA TAG a 
            let key = e.target.closest('.produto').getAttribute('data-key')
            c('.img-modal img').src = item.img;
            c('.titulo-desc-mod').innerHTML = item.name;
            c('.cifrao').innerHTML = `R$ ${item.price.toFixed(2)}`
            c('.desc-mod').innerHTML = item.description;
            //FAZ COM QUE O MODAL CRIE UM EFEITO DE ANIMAÇÃO PARA QUE ELE ABRA MAIS MALEÁVEL EM VEZ DE ABRIR DE UMA VEZ
            c('.window-area-produtos').style.opacity = 0;
            c('.window-area-produtos').style.display = 'flex'
            setTimeout(() => { //PARA QUE ELE DE O EFEITO DESEJADO PRECISA ESPERAR UM POQUINHO PO ISSO USMOS setTIMEOUT
                c('.window-area-produtos').style.opacity = 1;//O EFEITO OPACITY DO 0 ATÉ 1 DE FORMA PAUSADA CRIA ESSSA ANIMALÇÃO
            }, 100)

            c('.cancela-modal').addEventListener('click', () => {//FECHA O MODAL AO CLICAR NO BOTÃO CANCELA
                setTimeout(() => {
                    c('.window-area-produtos').style.opacity = 0; // ATRIBUINDO O VALOR 0 PARA OPACITE PARA FICAR INVISÍVEL

                }, 200)//ESPERA 200 MILISEGUNDOS PARA RETORNAR O CÓDIGO
                setTimeout(() => {
                    c('.window-area-produtos').style.display = 'none'//RETIRANDO O MODAL POIS SE DEIXAR SOMENTE O OPACIT ELE VAI CONTINUAR NO LOCAL E NÃO VAI DAR PRA CLICAR EM OUTRO ITEM.
                }, 500)//ESPERANDO 500 MILISEGUNDOS PARA RETORNAR O CÓDIGO

            })


        })

        c('.produto-area').append(clonesRefri)
    })
    

}
tt()