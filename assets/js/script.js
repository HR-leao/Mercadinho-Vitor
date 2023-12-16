

//SLIDE
$(document).ready(function () {
    $('.slides').slick({

        vertical: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 2000,
        fade: false,
        cssEase: 'ease-out'
    });

});




//ABRIR E FECHAR MENU LATERAL ESQUERDO
let mnSanduIch = document.querySelector('.div--menu')
let bLateral = document.querySelector('.nav-sidebar-left')
mnSanduIch.addEventListener('click', () => {
    if (bLateral.classList.contains('open')) {
        bLateral.classList.remove('open')
        mnSanduIch.style.position = ''
        mnSanduIch.style.right = '';
        mnSanduIch.style.top = '';
        mnSanduIch.innerHTML = '<div class="b--menu"></div> <div class="b--menu"></div> <div class="b--menu"></div>';
        
        
    } else {
        bLateral.classList.add('open')
        mnSanduIch.style.position='absolute'
        mnSanduIch.style.right='0';
        mnSanduIch.style.top='-20px'
        mnSanduIch.innerHTML='';
        const img =document.createElement('img');
        img.src ='assets/images-Site/x.png'
        img.style.width='20px';
        img.style.height='20px';
        mnSanduIch.appendChild(img)
    }
})

const Vtela = window.addEventListener('resize', VerificaTela)

//FUNÇÃO PARA ESCONDER MENU LATERAL ALTOMÁTICO
function VerificaTela() {
    var larguraTela = window.innerWidth;
    if (larguraTela > 720) {
        bLateral.classList.remove('open')
        mnSanduIch.style.position = ''
        mnSanduIch.style.right = '';
        mnSanduIch.style.top = '';
       mnSanduIch.style.display='block';
    }
};


//FUNÇÃO PARA ABRIR E FECHAR CARRINHO.
const abrir = document.querySelector('#itens--carrinho #abrecart');
const closeCart = document.querySelector('.closeCart');
const modalCart = document.querySelector('.carrinhoMod');
OpenCloseCart(abrir, closeCart, modalCart);

function OpenCloseCart(a, b, c) {
    a.addEventListener('click', () => {
       a && b.classList.contains('open') ? c.classList.remove('open') : c.classList.add('open');

    })

    b.addEventListener('click',()=>{
        b && c.classList.contains('open') ? c.classList.remove('open') : '';
    })
};





//MERCADORIAS.JSON

const Mercadorias = [
    { id: 1, name: 'Grapete', img: 'assets/images-Produtos/grapete-2l.png', price: 10, size: ['2L'], description: 'Refrigerante' },
    { id: 2, name: 'Cliper cola', img: 'assets/images-Produtos/cliper-cola-2l.png', price: 10, size: ['2L'], description: 'Refrigerante Cola' },
    { id: 3, name: 'Coca cola', img: 'assets/images-Produtos/coca-cola-2l.png', price: 10, size: ['2L'], description: 'Refrigerante' },
    { id: 4, name: 'Mineirinho', img: 'assets/images-Produtos/mineirinho2l.png', price: 10, size: ['2L'], description: 'Refrigerante' },
    { id: 5, name: 'Kuat', img: 'assets/images-Produtos/kuat-2l.png', price: 10, size: ['2L'], description: 'Refrigerante Guaraná' },
    { id: 6, name: 'Império', img: 'assets/images-Produtos/imperio.png', price: 10, size: ['2L'], description: 'Cerveja' },
    { id: 7, name: 'Antártica', img: 'assets/images-Produtos/antartica.png', price: 10, size: ['2L'], description: 'Cerveja' },
    { id: 8, name: 'Brama', img: 'assets/images-Produtos/brama.png', price: 10, size: ['2L'], description: 'Cerveja' },
    { id: 9, name: 'Heineken', img: 'assets/images-Produtos/heineken.png', price: 10, size: ['2L'], description: 'Cerveja' },
    { id: 10, name: 'Itaipava', img: 'assets/images-Produtos/itaipava.png', price: 10, size: ['2L'], description: 'Cerveja' },
    { id: 11, name: 'Cliper limão', img: 'assets/images-Produtos/cliper-limao2l.png', price: 10, size: ['2L'], description: 'Refrigerante Limo' },
    { id: 12, name: 'Cliper guaraná', img: 'assets/images-Produtos/cliper-guarana-2l.png', price: 10, size: ['2L'], description: 'Refrigerante Guaraná' }
];

/*NESTA ÁREA EU ESTOU USANDO O FILTER PARA CRIAR UM NOVO ARRAY O FILTER TAMBÉM PRECISA DA CALBACK NESSE CASO É A FUNÇÃO QUE ESTÁ VERIFICANDO SE EM
Mercadorias EXITE UM DETERMINADO NOME.
O RETURN ESTÁ SENDO USADO PARA RETORNAR OS VALORES DA VARIÁVEL MERCADORIAS QUE NESSE CASO TEM VÁRIOS OBJETOS (VAI RETORNAR TODOS) PARA

*/
let FilterProdutos = [];
const input = document.querySelector('.div-input-menu input');
const produto = document.querySelector('.produto');
const areaProduto = document.querySelector('.produto-area');
const modal = document.querySelector('.window-area-produtos ');
const fechar = document.querySelector('.cancela-modal');

function MostraProdutos() {
    const valorInput = input.value.toLowerCase();

    FilterProdutos = Mercadorias.filter(item => item.name.toLowerCase().includes(valorInput));

    LimpaTela();

    FilterProdutos.forEach((item, i) => {

        const clone = produto.cloneNode(true);
        clone.querySelector('.titulo').innerHTML = item.name;
        clone.setAttribute('data-key', i)
        clone.querySelector('.descricao').innerHTML = item.description;
        clone.querySelector('.imgProd').src = item.img;
        clone.querySelector('.tamanho').innerHTML = item.size
        clone.querySelector('.valor').innerHTML = item.price.toFixed(2);
        areaProduto.appendChild(clone)

        clone.addEventListener('click', (e) => {
            fechar.addEventListener('click', () => {
                modal.classList.remove('open')

            });
            if (modal) {
                modal.classList.add('open')

            };
            //JOGANDO INFORMAÇÕES NO MODAL
            document.querySelector('.titulo-modal').innerHTML = item.name;
            document.querySelector('.desc-mod').innerHTML = item.description;
            document.querySelector('.cifrao').innerHTML = ` R$ ${item.price.toFixed(2)}`;
            document.querySelector('.img-modal img').src = item.img



            //ALTENRANDO QUANTIDADE DE ITENS MODAL
            let contador = 1;
            const qtProdutoSlide = document.getElementById('qtProduto')
            qtProdutoSlide.innerHTML=contador;
            
            const btMenosModal = document.querySelector('.button-modal-mn')
            const btMaisModal = document.querySelector('.button-modal-ms') 
            
            btMenosModal.addEventListener('click', (e) => {
                
                if(btMenosModal && contador >1) {
                    qtProdutoSlide.innerHTML=contador-=1
                    console.log(qtProdutoSlide)
                }
                

            })
           btMaisModal.addEventListener('click', (e)=>{
            
            if(btMaisModal &&contador >=1){
                qtProdutoSlide.innerHTML=contador+=1
                console.log(qtProdutoSlide)
            }
           })

            //ADICIONANDO ITENS NO CARRINHO DE COMPRA
           
            let addItem = document.querySelector('.add-modal-car')
            let imgCart = document.querySelector('#img-cart img')
            let precoCart = document.querySelector('#preco-cart')
            let nomeProd = document.querySelector('#nome-pd-cart span')
            let areacart = document.querySelector('#contlPdCart')
            let modelo = document.querySelector('#model-item-card')
            let carrinhoCompras = []
            
            addItem.addEventListener('click',(e)=>{
                
                let item = {
                    id:FilterProdutos[i].id,
                    quantidade:contador,
                    nome:FilterProdutos[i].name,
                    preco:FilterProdutos[i].price
                }
                carrinhoCompras.push(item)
              
                atualizaCarrinho()
            })
            function atualizaCarrinho() {
                
            }
        });
        
        


    });


};


input.addEventListener('input', MostraProdutos);




//FUNÇÃO PARA REMOVER OS CLONES DAS PESQUISAS APÓS LIMPAR O INPUT
function LimpaTela() {
    document.querySelector('.produto-area').innerHTML = '';


};



//CHAMANDO FUNÇÕES
VerificaTela();
MostraProdutos();