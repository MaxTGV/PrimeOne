function showBurgerMenu() {
    const icon = document.querySelector('.header-menu__icon'),
          menu = document.querySelector('.header-menu');

    icon.addEventListener('click', (event) => {
        const target = event.target;

        if(target) {
            icon.classList.toggle('active');
            menu.classList.toggle('active');
        }

    });
}

export default showBurgerMenu;