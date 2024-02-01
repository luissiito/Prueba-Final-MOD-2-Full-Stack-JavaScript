
function iniciarIconosLinksARedesSociales() {   
    const linkGithub = document.getElementById('linkGithub');
    const linkLinkedin = document.getElementById('linkLinkedin');
    const linkTwitter = document.getElementById('linkTwitter');
    const linkFacebook = document.getElementById('linkFacebook');

    const links = [linkGithub, linkLinkedin, linkTwitter, linkFacebook]

    for (let l of links) {
        l.addEventListener('mouseover', function () {
            l.children[1].classList.toggle('footerToolTip')
        });
        l.addEventListener('mouseout', function () {
            l.children[1].classList.toggle('footerToolTip')
        });
    }
}