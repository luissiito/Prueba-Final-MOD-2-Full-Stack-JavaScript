
const btnEnviarModalFooter = document.querySelector('.modal-footer .btn-primary');
btnEnviarModalFooter.addEventListener('click', () =>{
    alert('Hubo problemas al intentar comunicarse con el servidor. Tus datos no fueron guardados.'
    + ' \n\n' + 'código error: e101')
    location.reload();
});