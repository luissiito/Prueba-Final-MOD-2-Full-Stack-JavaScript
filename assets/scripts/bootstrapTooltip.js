
function iniciarBootStrapTooltip() {
    $(function () {
        let btnSubmit = $('#btnSubmit[data-toggle="modal"]').get();
        btnSubmit.addEventListener('click', (e)=>{
            e.preventDefault();
            btnSubmit.modal();
        });
    })   
}