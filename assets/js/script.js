


$(document).ready(function () {
    $('.slides').slick({

        vertical:false,
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

mnSanduIch.addEventListener('click', ()=>{
    if(bLateral.classList.contains('open')){
        bLateral.classList.remove('open')
        console.log('CONTEM')
    }else {
        bLateral.classList.add('open')
    }
})




const c = (el) => document.querySelector(el); 

const all = (el) => document.querySelectorAll(el)


produtosJson.map((item, index)=>{
    let proDuto = c('.produto').cloneNode(true)

    proDuto.setAttribute('data-key',index);
    proDuto.querySelector('.imgProd').src = item.img;
    proDuto.querySelector('.titulo').innerHTML = `${item.name}`; 
    proDuto.querySelector('.descricao').innerHTML = item.description
    proDuto.querySelector('.valor').innerHTML = `R$ ${item.price.toFixed(2) }`
    proDuto.querySelector('.tamanho').innerHTML = item.size/
    
    
    proDuto.querySelector('.link-produto').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.produto').getAttribute('data-key')
        c('.img-modal img').src=item.img;
        c('.titulo-desc-mod').innerHTML = item.name;
        c('.cifrao').innerHTML = `R$ ${item.price.toFixed(2)}`
        c('.desc-mod').innerHTML= item.description;
        
        c('.window-area-produtos').style.opacity = 0;
        c('.window-area-produtos').style.display = 'flex'
        setTimeout(()=>{ 
            c('.window-area-produtos').style.opacity = 1;
        },100)

        c('.cancela-modal').addEventListener('click', () => {
            setTimeout(()=>{
                c('.window-area-produtos').style.opacity = 0; 
                
            },200)
            setTimeout(()=>{
                c('.window-area-produtos').style.display = 'none'
            },500)
            
        })


    })
    let search = document.getElementById('input-menu')
    let pdJ = produtosJson
    search.addEventListener('change', filterProd)



    function filterProd(){
        if(search.value !='') {
            for(let produto of pdJ){
                let nameP = produto.name
                nameP= nameP.toLowerCase()
                let filterInput = search.value.toLowerCase()
                if(filterInput == nameP){
                    console.log(nameP)
                }else{
                    
                    console.log()
                }
                
            }
        }
    }


    c('.produto-area').append(proDuto)

})



// CONTINUEMMOS





//CONFIGURALÇÃO DO MENU
