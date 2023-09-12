window.addEventListener('beforeunload', (e) => {
    event.preventDefault();

    window.scrollY = 0;
    window.pageYOffset = 0; 
    document.documentElement.scrollTop = 0;

});