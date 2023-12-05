


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



let mnSanduIch = document.querySelector('.div--menu')
let bLateral = document.querySelector('.nav-sidebar-left')

mnSanduIch.addEventListener('click', () => {
    if (bLateral.classList.contains('open')) {
        bLateral.classList.remove('open')
        console.log('CONTEM')
    } else {
        bLateral.classList.add('open')
    }
})




const c = (el) => document.querySelector(el);

const all = (el) => document.querySelectorAll(el)


produtosJson.forEach((item, index) => {
    const produto = document.createElement('div');
    produto.classList.add('produto');
    produto.setAttribute('data-key', index);

    const imgProd = document.createElement('img');
    imgProd.classList.add('imgProd')
    imgProd.src = item.img;
    produto.appendChild(imgProd);


    const add = document.createElement('div');
    add.classList.add('add');
    add.textContent ='+';
    produto.appendChild(add)

    const titulo = document.createElement('h3');
    titulo.classList.add('titulo');
    titulo.textContent = item.name;
    produto.appendChild(titulo);

    const descricao = document.createElement('p');
    descricao.classList.add('descricao');
    descricao.textContent = item.description;
    produto.appendChild(descricao);

    const valor = document.createElement('p');
    descricao.classList.add('valor');
    descricao.textContent = `R$ ${item.price.toFixed(2)}`;
    produto.appendChild(valor);

    const tamanho = document.createElement('p');
    tamanho.classList.add('tamanho');
    tamanho.textContent = item.size;
    produto.appendChild(tamanho);


    const linkProduto = document.createElement('a');
    linkProduto.classList.add('link-produto');
    linkProduto.addEventListener('click', (e) => {
        e.preventDefault();

        const key = e.target.closest('.produto').getAttributute('data-key');
        document.querySelector('.image-modal img').src = item.img;
        document.querySelector('.titulo-desc-mod').textContent = item.name;
        document.querySelector('.cifrao').textContent = `R$ ${item.price.toFixed(2)}`;
        document.querySelector('.desc-mod').textContent = item.description;

        document.querySelector('.window-area-produtos').style.opacity = 0;
        document.querySelector('.window-area-produtos').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.window-area-produtos').style.opacity = 1;
        }, 100);

        document.querySelector('.cancela-modal').addEventListener('click', (e) => {
            setTimeout(() => {
                document.querySelector('.window-area-produtos').style.opacity = 0;
            }, 200);
            setTimeout(() => {
                document.querySelector('.window-area-produtos').style.display = 'none';
            }, 500);
        });
    });



    console.log(produto)

    produto.appendChild(linkProduto)
    document.querySelector('.produto-area').appendChild(produto)

})



// CONTINUEMMOS





//CONFIGURALÇÃO DO MENU
