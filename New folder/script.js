function setActive(link) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
}
