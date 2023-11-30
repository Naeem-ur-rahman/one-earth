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

    // Navbar Handle function
    let navbar_down = document.querySelectorAll('.navbar-item.down');
    const navbarHandle = () => {
        navbar_down.forEach(nav_down => {
            const link = nav_down.querySelector("a")
            const link_href = link.href
            if (window.matchMedia('(max-width: 991px)').matches) {
                link.href = 'javascript:void'
            } else {
                link.href = link_href;
            }
        });
    }
    // Navbar click mobile screen
    window.addEventListener('load', navbarHandle())
    window.addEventListener('resize', navbarHandle())
    screen.addEventListener('load', navbarHandle())
    screen.addEventListener('resize', navbarHandle())

    // Navbar links click and trigger the nav-dropdown
    for (let i = 0; i < navbar_down.length; i++) {
        const nav_dropdown = navbar_down[i].querySelector('.nav-dropdown')
        const clickBtn = navbar_down[i].querySelector('a');
        clickBtn.addEventListener('click', () => {
            nav_dropdown.classList.toggle('active');
        })
    }


    let navbar = document.querySelector('.navbar')
    let menu = document.querySelector('#hamburg i')

    menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active')
    })

    let dubai_head_items = document.querySelectorAll('.dubai-area-container .head-item')
    let dubai_body_items = document.querySelectorAll('.dubai-area-container .body-item')

    for (let i = 0; i < dubai_head_items.length; i++) {
        dubai_head_items[i].addEventListener('click', () => {
            dubai_head_items.forEach(item => {
                item.classList.remove('active');
            });
            dubai_body_items.forEach(body => {
                body.classList.remove('active');
            })
            dubai_head_items[i].classList.add('active');
            dubai_body_items[i].classList.add('active');
        });
    }
});