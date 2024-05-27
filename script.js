document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            links.forEach(function(otherLink) {
                otherLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
