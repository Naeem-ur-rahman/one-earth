window.addEventListener('DOMContentLoaded', () => {
    // header scroll script

    window.addEventListener('scroll', function () {
        var topHeader = document.querySelector('.header-up');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var headerDown = document.querySelector('.header-down');
        if (scrollTop > 50) {
            topHeader.classList.remove('active')
        } else {
            topHeader.classList.add('active')
        }
    });
});