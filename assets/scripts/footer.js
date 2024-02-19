
añadirEventoClickAlLogoDelFoot();

function añadirEventoClickAlLogoDelFoot(){
    document.querySelector('footer h3').addEventListener('click', () =>{
        window.location.href = urlDinamica;
    });
}