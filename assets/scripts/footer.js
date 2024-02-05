
añadirEventoClickAlLogoDelFoot();
function añadirEventoClickAlLogoDelFoot(){
    document.querySelector('footer h3').addEventListener('click', () =>{
        window.location.href = 'http://127.0.0.1:5500/PruebaFinalModulo2ViajesChile';
    });
}