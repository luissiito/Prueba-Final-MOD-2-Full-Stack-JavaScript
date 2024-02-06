
añadirEventoClickAlLogoNavBarSvg();
añadirEventoClickAlLogoNavBar();
function añadirEventoClickAlLogoNavBarSvg(){
    document.querySelector('nav .logoViajesChile img').addEventListener('click', () =>{
        window.location.href = 'https://luissiito.github.io/PruebaFinalModulo2ViajesChile/';
    });
}
function añadirEventoClickAlLogoNavBar(){
    document.querySelector('nav div a.navbar-brand').addEventListener('click', () =>{
        window.location.href = 'https://luissiito.github.io/PruebaFinalModulo2ViajesChile/';
    });
}