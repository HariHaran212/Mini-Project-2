// Change Active Page    
function changeActivePage(event) {
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    }); 

    event.currentTarget.classList.add('active');
}