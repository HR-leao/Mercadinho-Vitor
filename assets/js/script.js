
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
        autoplaySpeed: 2000,  // Intervalo de tempo entre os slides (em milissegundos)
        dots: false,  // Mostrar indicadores de pontos
        infinite: true,  // Repetir o carrossel indefinidamente
        speed: 500,  // Velocidade de transição (em milissegundos)
        fade: false,  // Ativar transições de fade
        cssEase: 'ease-in-out'  // Tipo de transição
    });

});

/*FIM DO SLIDE */




























