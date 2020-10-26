//Адаптив
function burgerMenu() {

    window.addEventListener('resize', () => {
        

        const parentLang = document.querySelector('.header-top'),
            headerMenu = document.querySelector('.header-menu'),
            headerLang = document.querySelector('.header-top-lang'),
            headerBottomMenu = document.querySelector('.header-bottom-menu'),
            headerBottomMenuAll = document.querySelectorAll('.header-bottom-menu'),
            headerBottomColumns = document.querySelectorAll('.header-bottom__column');
            let width = window.innerWidth;

            if(width < 767) {
                if(!headerLang.classList.contains('done')) {
                    headerLang.classList.add('done');
                    headerMenu.append(headerLang);
                } 
            } else {
                if(headerLang.classList.contains('done')) {
                    headerLang.classList.remove('done');
                    parentLang.prepend(headerLang);
                }
            } 


            if(width < 767) {
                
                if(!headerBottomMenu.classList.contains('done')) {
                    headerBottomMenu.classList.add('done');
                    headerMenu.append(headerBottomMenu);
                }

            } else {
                headerBottomMenuAll.forEach(item => {
                if(item.classList.contains('header-bottom-menu--right')) {
                    item.classList.remove('done');
                        headerBottomColumns[2].prepend(item);
                }else {
                    item.classList.remove('done');
                        headerBottomColumns[0].prepend(item);
                }
            });    
        }
    });
}

export default burgerMenu;