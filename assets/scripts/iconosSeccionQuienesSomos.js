
function iniciarIconosSeccionQuienesSomos(){
    const iconos = document.querySelectorAll('section div div h2');
    const alertBootstrap = document.querySelector('#quienesSomos div.alert');
    iconos.forEach((e) =>{
        e.addEventListener('click', ()=>{
            e.classList.add('noDisponible');
            if(e.children[0].classList.contains('fa-plane')){
                alertBootstrap.classList.add('bg-primary')
            }
            if(e.children[0].classList.contains('fa-triangle-exclamation')){
                alertBootstrap.classList.add('bg-success')
            }
            alertBootstrap.classList.add('disponible')
            setInterval(()=>{
                alertBootstrap.classList.remove('disponible')
                alertBootstrap.classList.remove('bg-primary')
                alertBootstrap.classList.remove('bg-success')
            },2500);
        });
        e.addEventListener('mouseout', ()=>{
            e.classList.remove('noDisponible')
        });
    });
}