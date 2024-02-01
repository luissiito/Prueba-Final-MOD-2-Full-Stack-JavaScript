

iniciarBootStrapTooltip();
iniciarIconosLinksARedesSociales();
iniciarIconosSeccionQuienesSomos();

function iniciarBootStrapTooltip() {
    $(function () {
        let btnSubmit = $('#btnSubmit[data-toggle="modal"]');
        btnSubmit.addEventListener('click', (e)=>{
            e.preventDefault();
            btnSubmit.modal()
        });
    })   
}

const btnEnviarModalFooter = document.querySelector('.modal-footer .btn-primary');
btnEnviarModalFooter.addEventListener('click', () =>{
    alert('Hubo problemas al intentar comunicarse con el servidor. Tus datos no fueron guardados.')
    location.reload();
});