
añadirEventoClickAlLogoNavBarSvg();
añadirEventoClickAlLogoNavBar();
function añadirEventoClickAlLogoNavBarSvg(){
    document.querySelector('nav .logoViajesChile img').addEventListener('click', () =>{
        window.location.href = 'http://127.0.0.1:5500/PruebaFinalModulo2ViajesChile';
    });
}
function añadirEventoClickAlLogoNavBar(){
    document.querySelector('nav div a.navbar-brand').addEventListener('click', () =>{
        window.location.href = 'http://127.0.0.1:5500/PruebaFinalModulo2ViajesChile';
    });
}