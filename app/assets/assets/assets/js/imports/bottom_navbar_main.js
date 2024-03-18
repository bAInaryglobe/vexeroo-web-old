function showNavbar(event) {
    event.stopPropagation();
    document.getElementById('circle').style.display = 'none';
    document.getElementById('navbar').style.transform = 'translateX(0)';
}

function hideNavbar() {
    document.getElementById('circle').style.display = 'block';
    document.getElementById('navbar').style.transform = 'translateX(100%)';
}

