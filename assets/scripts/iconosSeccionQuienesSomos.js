
function iniciarIconosSeccionQuienesSomos(){
    const iconos = document.querySelectorAll('section div div h2');
    const alertBootstrapSeccionUno = document.querySelector('#quienesSomos div div:nth-child(1) .alert');
    const alertBootstrapSeccionDos = document.querySelector('#quienesSomos div div:nth-child(2) .alert');
    const alertBootstrapSeccionTres = document.querySelector('#quienesSomos div div:nth-child(3) .alert');
    
    iconos.forEach((e) =>{
        e.addEventListener('click', ()=>{
            e.classList.add('noDisponible');
            if(e.children[0].classList.contains('fa-plane')){
                alertBootstrapSeccionUno.classList.add('bg-primary');
                alertBootstrapSeccionUno.classList.remove('bg-success');
                alertBootstrapSeccionUno.classList.add('disponible');

            }
            else if(e.children[0].classList.contains('fa-triangle-exclamation')){
                alertBootstrapSeccionDos.classList.add('bg-success');
                alertBootstrapSeccionDos.classList.remove('bg-primary');
                alertBootstrapSeccionDos.classList.add('disponible');

            }
            else{
                alertBootstrapSeccionUno.classList.add('alert-primary');                
                alertBootstrapSeccionUno.classList.remove('bg-primary');
                alertBootstrapSeccionUno.classList.remove('bg-success');
                alertBootstrapSeccionTres.classList.add('disponible');
            }
            
        });

        e.addEventListener('mouseout', ()=>{
            alertBootstrapSeccionUno.classList.remove('disponible')
            alertBootstrapSeccionUno.classList.add('noDisponible')
            alertBootstrapSeccionDos.classList.remove('disponible')
            alertBootstrapSeccionDos.classList.add('noDisponible')
            alertBootstrapSeccionTres.classList.remove('disponible')
            alertBootstrapSeccionTres.classList.add('noDisponible')
        });
    });
}