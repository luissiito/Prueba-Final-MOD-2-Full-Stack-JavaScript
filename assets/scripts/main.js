
iniciarBootStrapTooltip();

function iniciarBootStrapTooltip() {
    $(function () {
        let btnSubmit = $('#btnSubmit[data-toggle="modal"]');
        btnSubmit.addEventListener('click', (e)=>{
            e.preventDefault();
            btnSubmit.modal()
        });
    })   
}

const linkGithub = document.getElementById('linkGithub');
const linkLinkedin = document.getElementById('linkLinkedin');
const linkTwitter = document.getElementById('linkTwitter');
const linkFacebook = document.getElementById('linkFacebook');

const links = [linkGithub, linkLinkedin, linkTwitter, linkFacebook]

for(let l of links){
    l.addEventListener('mouseover', function(){
        l.children[1].classList.toggle('footerToolTip')
    });
    l.addEventListener('mouseout', function(){
        l.children[1].classList.toggle('footerToolTip')
    });
}

const btnEnviarModalFooter = document.querySelector('.modal-footer .btn-primary');
btnEnviarModalFooter.addEventListener('click', () =>{
    alert('Hubo problemas al intentar comunicarse con el servidor. Tus datos no fueron guardados.')
    location.reload();
});