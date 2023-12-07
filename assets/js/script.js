


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






const Mercadorias = {
    all() {
        return[ // O RETURNE SERVE PARA QUE ELE RETORNE OS VALORES PARA A VARIÁVEL OU FUNÇÃO
            { id: 1, name: 'Grapete', img: 'assets/images-Produtos/grapete-2l.png', price: 10, size: ['2L'], description: 'Refrigerante' },
            { id: 2, name: 'Cliper', img: 'assets/images-Produtos/cliper-cola-2l.png', price: 10, size: ['2L'], description: 'Refrigerante Cola' },
            { id: 3, name: 'Coca cola', img: 'assets/images-Produtos/coca-cola-2l.png', price: 10, size: ['2L'], description: 'Refrigerante' },
            { id: 4, name: 'Mineirinho', img: 'assets/images-Produtos/mineirinho2l.png', price: 10, size: ['2L'], description: 'Refrigerante' },
            { id: 5, name: 'Kuat', img: 'assets/images-Produtos/kuat-2l.png', price: 10, size: ['2L'], description: 'Refrigerante Guaraná' },
            { id: 6, name: 'Império', img: 'assets/images-Produtos/imperio.png', price: 10, size: ['2L'], description: 'Cerveja' },
            { id: 7, name: 'Antártica', img: 'assets/images-Produtos/antartica.png', price: 10, size: ['2L'], description: 'Cerveja' },
            { id: 8, name: 'Brama', img: 'assets/images-Produtos/brama.png', price: 10, size: ['2L'], description: 'Cerveja' },
            { id: 9, name: 'Heineken', img: 'assets/images-Produtos/heineken.png', price: 10, size: ['2L'], description: 'Cerveja' },
            { id: 10, name: 'Itaipava', img: 'assets/images-Produtos/itaipava.png', price: 10, size: ['2L'], description: 'Cerveja' },
            { id: 11, name: 'Cliper Limão', img: 'assets/images-Produtos/cliper-limao2l.png', price: 10, size: ['2L'], description: 'Refrigerante Limão' },
            { id: 12, name: 'Cliper Guaraná', img: 'assets/images-Produtos/cliper-guarana-2l.png', price: 10, size: ['2L'], description: 'Refrigerante Guaraná' }
        ]
    },
    /*NESTA ÁREA EU ESTOU USANDO O FILTER PARA CRIAR UM NOVO ARRAY O FILTER TAMBÉM PRECISA DA CALBACK NESSE CASO É A FUNÇÃO QUE ESTÁ VERIFICANDO SE EM
    Mercadorias EXITE UM DETERMINADO NOME.
    O RETURN ESTÁ SENDO USADO PARA RETORNAR OS VALORES DA VARIÁVEL MERCADORIAS QUE NESSE CASO TEM VÁRIOS OBJETOS (VAI RETORNAR TODOS) PARA

    */
    todosNomes(nome){ /*todosNomes é um método (MÉTODO É UMA FUNÇÃO QUE ESTÁ RELACIONADA A UM OBJETO ESPECÍFICO) */
        return this.all().filter((Mercadorias) =>Mercadorias.name.includes(nome))
    }
};