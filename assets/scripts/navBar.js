
let urlDinamica = window.location.protocol + "//" + window.location.host + window.location.pathname

añadirEventoClickAlLogoNavBarSvg();
añadirEventoClickAlLogoNavBar();
function añadirEventoClickAlLogoNavBarSvg(){
    document.querySelector('nav .logoViajesChile img').addEventListener('click', () =>{
        window.location.href = urlDinamica;
    });
}
function añadirEventoClickAlLogoNavBar(){
    document.querySelector('nav div a.navbar-brand').addEventListener('click', () =>{
        window.location.href = urlDinamica;
    });
}