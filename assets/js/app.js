document.addEventListener('DOMContentLoaded',()=>{
    /* ANIMATED SECTION */
    const animated_section = document.querySelectorAll('.animated-section');
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
          rect.top    >= 0 &&
          rect.left   >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right  <= (window.innerWidth  || document.documentElement.clientWidth)
        );
    }
    function handleScroll() {
        const attribute = 'data-animated';
        animated_section.forEach(section=>{
            if(isElementInViewport(section) && section.getAttribute(attribute) === 'false'){
                section.classList.add('animate');
                section.setAttribute(attribute,'true');
            }
        });
    }
    handleScroll();
    /* MENU */
    const menu = document.getElementById('menu');
    let scroll = 0;
    window.addEventListener('scroll',()=>{
        scroll = window.scrollY || window.pageYOffset;
        menu.style.backgroundColor = scroll > 200 ? '#141515' : 'transparent';
        /* ANIMACION CUSTOMER PROBLEM */
        handleScroll();
    });
    /* BUTTON ACTION */
    window.addEventListener('scroll', e=>{
        const buttonAction = document.getElementById('button-action');
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
            buttonAction.classList.remove('hide');
            buttonAction.classList.add('show');
            buttonAction.style.visibility = 'visible';
        }else{
            buttonAction.classList.remove('show');
            buttonAction.classList.add('hide');
            setTimeout(()=>{
                if(buttonAction.classList.contains('hide'))
                    buttonAction.style.visibility = 'hidden';
            },500);
        }
    });
});