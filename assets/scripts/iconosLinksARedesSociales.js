
function iniciarIconosLinksARedesSociales() {   
    const linkGithub = document.getElementById('linkGithub');
    const linkLinkedin = document.getElementById('linkLinkedin');
    const linkTwitter = document.getElementById('linkTwitter');
    const linkFacebook = document.getElementById('linkFacebook');
    const links = [linkGithub, linkLinkedin, linkTwitter, linkFacebook]

    for (let link of links) {
        link.addEventListener('mouseover', function () {
            link.children[1].classList.toggle('footerToolTip')
        });
        link.addEventListener('mouseout', function () {
            link.children[1].classList.toggle('footerToolTip')
        });
    }
}