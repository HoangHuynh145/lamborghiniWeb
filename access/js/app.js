const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function getParent(element, selector) {
    while(element.parentElement) {
        if(element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

const activeMenuSubMobile = (idMenuSub) => {
    if(document.querySelector('.menu-sub-sdevice-item.active')){
        if(document.querySelector('.menu-sub-sdevice-item.active') === idMenuSub){
            idMenuSub.classList.remove('active');
            idMenuSub.style.height = '0';
        } else{
            document.querySelector('.menu-sub-sdevice-item.active').style.height = '0';
            document.querySelector('.menu-sub-sdevice-item.active').classList.remove('active');
            if(idMenuSub.id === 'maventador' || idMenuSub.id === 'msupertrofeo'){
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '193px'

            }else if (idMenuSub.id === 'mhuracan' || idMenuSub.id === 'mmotorsportmodels'){
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '275px'

            }else if (idMenuSub.id === 'murus' || idMenuSub.id === 'mlimited' || idMenuSub.id === 'mconcept'){
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '152px'
            }else if (idMenuSub.id === 'assistanceandmaintenance'){
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '234px'
            }else if (idMenuSub.id === 'mexperience'){
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '111px'
            }
        }
    }else{
        if(idMenuSub.id === 'maventador' || idMenuSub.id === 'msupertrofeo'){
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '193px'

        }else if (idMenuSub.id === 'mhuracan' || idMenuSub.id === 'mmotorsportmodels'){
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '275px'

        }else if (idMenuSub.id === 'murus' || idMenuSub.id === 'mlimited' || idMenuSub.id === 'mconcept'){
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '152px'
        }else if (idMenuSub.id === 'assistanceandmaintenance'){
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '234px'
        }else if (idMenuSub.id === 'mexperience'){
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '111px'
        }
    }
}

const activeIconHeader = (iconHeader, maskHeader) => {
    const idIcon = document.getElementById(iconHeader.classList[0])
    const exitIcon = idIcon.querySelector('.exit-icon-header')
    idIcon.classList.add('active')
    maskHeader.classList.add('active')
    if(idIcon.querySelector('.bars-overplay-exit')){
        idIcon.querySelector('.bars-overplay-exit').classList.add('active')
    }
    exitIcon.onclick = (e) => {
        e.stopPropagation();
        idIcon.classList.remove('active')
        maskHeader.classList.remove('active')
        if(idIcon.querySelector('.bars-overplay-exit')){
            idIcon.querySelector('.bars-overplay-exit').classList.remove('active')
        }
    }
}

const activeMenuHeader = (itemLeftNav, menuElement, headerMenu) => {
    if(headerMenu.classList.contains('active')){
        if(itemLeftNav.className != $('.header-menu .header-menu-item.active')){
            $('.header-menu .header-menu-item.active').classList.remove('active')
            if(itemLeftNav.innerText === 'MODELS' ) {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '322px'

            }else if (itemLeftNav.innerText === 'CUSTOM SOLUTIONS') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '184px'

            }else if (itemLeftNav.innerText === 'OWNERSHIP') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '276px'

            }else if (itemLeftNav.innerText === 'MOTORSPORT') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '368px'
            }
        }
    }else{
        if(itemLeftNav.innerText === 'MODELS' ) {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '322px'

            }else if (itemLeftNav.innerText === 'CUSTOM SOLUTIONS') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '184px'

            }else if (itemLeftNav.innerText === 'OWNERSHIP') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '276px'

            }else if (itemLeftNav.innerText === 'MOTORSPORT') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '368px'
            }
    }
}

const activeMenuSubHeader = (itemMenu, headerMenuSub) => {
    if($('.header-menu-item .header-menu-item_list a.active')) {
        if($('.header-menu-item .header-menu-item_list a.active') !== itemMenu){
            $('.header-menu-item .header-menu-item_list a.active').classList.remove('active')
            itemMenu.classList.add('active')
        }
    }else{
        itemMenu.classList.add('active')
    }

    if($('.menu-sub .menu-sub-item.active')){
        if($('.menu-sub .menu-sub-item.active') === headerMenuSub){
            console.log('Vô dòng 142')
            headerMenuSub.classList.add('active')
        }else{
            console.log($('.menu-sub-item.active'))
            console.log(headerMenuSub)
            $('.menu-sub-item.active').classList.remove('active')
            headerMenuSub.classList.add('active')
        }
    }else{
        headerMenuSub.classList.add('active')
    }

    const headerMenuSubItems = headerMenuSub.querySelectorAll('a');
    headerMenuSubItems.forEach(itemSubSelect => {
        itemSubSelect.style.color = 'white'
        itemSubSelect.onmouseover = (e) => {
            e.stopPropagation()
            headerMenuSubItems.forEach(itemSub => {
                if(itemSubSelect !== itemSub) {
                    itemSub.style.color = 'rgb(111, 111, 111)';
                    itemSubSelect.style.color = 'white'
                }
            })
        }
    })
}

const outHeader = (headerElement) => {
    $('#header .header-menu .active').classList.remove('active')
    headerElement.querySelector('.header-menu').classList.remove('active')
    headerElement.querySelector('.header-menu').style.height = '0'
}

// mobile menu
const activeMenuMobile = (menuItemMain, navListMobile) => {
    const menuBackIcon = menuItemMain.querySelector('.header-menu-sdevice-back')
    // console.log(menuBackIcon)
    menuItemMain.classList.add('active')
    menuItemMain.querySelector('.header-menu-sdevice-item_list').classList.add('active')
    navListMobile.classList.remove('active');

    menuBackIcon.onclick = (e) => {
        e.stopPropagation();
        menuItemMain.classList.remove('active')
        menuItemMain.querySelector('.header-menu-sdevice-item_list').classList.remove('active')
        navListMobile.classList.add('active');

        // console.log(menuBackIcon.querySelector('.hexagon.on-dark'))
    }
}



const header = () => {
    const itemsLeftNav = $$('.header-nav-left_item a') // lấy ra những thẻ a trong header bên trái
    const iconListHeader = $$('.header-nav-right_icon-box i')
    const headerRightElement = $('#header .header-nav-right')
    const maskHeader = $('.maskHeader')
    const headerElement = document.getElementById('header') // lấy ra header bao hết nguyên cái header
    console.log(headerRightElement)
    
    iconListHeader.forEach(iconHeader => {
        iconHeader.onclick = (e) => {
            e.stopPropagation();
            activeIconHeader(iconHeader, maskHeader)
        }
    });

    headerRightElement.onmouseover = () => {
        outHeader(headerElement)
    }

    // Header item
    headerElement.addEventListener('mouseover', (e) => {
        e.stopPropagation()
        itemsLeftNav.forEach(itemLeftNav => {
            itemLeftNav.onmouseover = (e) => {
                e.stopPropagation()
                if($('.menu-sub .menu-sub-item.active')){
                    console.log('Vô dòng 218')
                    $('.menu-sub .menu-sub-item.active').classList.remove('active')
                    $('.header-menu-item .header-menu-item_list a.active').classList.remove('active')
                }
                const menuElement = document.getElementById(itemLeftNav.className)
                const headerMenu = getParent(menuElement, '.header-menu')
                // console.log(menuElement)
                activeMenuHeader(itemLeftNav, menuElement, headerMenu)

                const headerMenuItems = menuElement.querySelectorAll('.header-menu-item_list li a') // lấy ra những thẻ subnav của header aventador, huracan,...
                
                headerMenuItems.forEach(itemMenu => {
                    
                    itemMenu.onmouseover = (e) => {
                        e.stopPropagation()
                        const headerMenuSub = document.getElementById(itemMenu.classList[0]) // lấy ra những thẻ chứa sub cụ thể aventador svj, roaster,...
                        activeMenuSubHeader(itemMenu, headerMenuSub)
                    }
                })
            }
        })
    })

    headerElement.addEventListener('mouseleave', (e) => {
        outHeader(headerElement)
    })

    // Mobile menu
    const itemsMainNav = $$('.nav-item-box')

    itemsMainNav.forEach(itemMain => {
        itemMain.onclick = (e) => {
            e.stopPropagation();
            const classItemMain = itemMain.querySelector('span').classList[0]; // trả ra thẻ models hay custom, ... đã click
            const menuItemMain = document.getElementById(classItemMain) // vì đặt tên id trùng với tên elemet nên lấy cái phần nav ẩn của thẻ đó ra
            const navListMobile = getParent(itemMain, '.nav-list') // lấy ra thẻ chứa hết tất cả nav để thêm xóa active
            const menuItemMainList = menuItemMain.querySelectorAll('.header-menu-item .menu-sdevice-box') // lấy ra những thẻ sub-nav 

            activeMenuMobile(menuItemMain, navListMobile)

            menuItemMainList.forEach(menuItem => {
                const classMenuMobile = menuItem.querySelector('a');
                classMenuMobile.onclick = (e) => {
                    e.preventDefault();
                    
                }

                menuItem.onclick = (e) => {
                    const idMenuSub = document.getElementById(classMenuMobile.classList[0]);
                    activeMenuSubMobile(idMenuSub)
                }
            })

        }
    })
}

// content 

const autoSlider = () => {
    let count = 1;
    document.getElementById('radio1').checked = true // mặc định mới vào là cho slide 1 thành true luôn
    setInterval(() => {
        const autoBtns = $$('.auto-btn')
        autoBtns.forEach(autoBtn => {
            autoBtn.onclick = (e) => {
                e.stopPropagation();
                const attribute = getAttribute('for')
                count = attribute[5];
            }
        })

        setTimeout(() => {
            document.getElementById('radio' + count).checked = true;
            count ++;
            if(count > 3){
                count = 1;
            }
        }, 100);
    }, 6000);
}

const slider2Back = () => {
    const slides = $$('.slide2')
    const slideActive = slides[0]
    const slideActiving = slides[2]
    const copyOfActiveSlide = slides[0].cloneNode(true)
    const slideContainer = $('.slides2')
    
    copyOfActiveSlide.style.width = '0';
    slideContainer.appendChild(copyOfActiveSlide);

    setTimeout(() => {
        copyOfActiveSlide.removeAttribute('style');
        setTimeout(() => {
            copyOfActiveSlide.classList.add('active');
            slideActiving.classList.remove('active');
            setTimeout(() => {
                slideActive.remove();
            }, 500)
        }, 1);
    }, 1);
}

const slider2Forward = () => {
    const slides = $$('.slide2')
    const slideActive = slides[2];
    const copyOfActiveSlide = slides[2].cloneNode(true);
    const slideContainer = $('.slides2')


    slideContainer.insertBefore(slides[2], slideContainer.children[0])
    slideContainer.appendChild(copyOfActiveSlide)
    slideActive.classList.remove('active')

    setTimeout(() => {
        slides[1].classList.add('active')
        copyOfActiveSlide.style.width = '0'
        setTimeout(() => {
            copyOfActiveSlide.remove()
            // console.log(slides)
            
        }, 500)
    }, 1)
}

const sloganCar = () => {
    const carActive = $('.slide2.active').getAttribute('data_index');
    const slogan = $(`.slide2-text-container .slogan${carActive}`)
    console.log(slogan)
    slogan.classList.add('active')
}

const navCreate = (btnCreate) => {
    if(btnCreate != $('.content-create-nav_choose-name.active')){
        $('.content-create-nav_choose-name.active').classList.remove('active')
        btnCreate.classList.add('active')
    }
}

const content = () => {
    autoSlider()

    // slide 2
    const navBtns = $$('.slides2-navigation-btn .btn')
    navBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const sloganActive = $('.slide2-text-container .active')
            sloganActive.classList.remove('active')
            if(btn.classList.contains('btn-left')){
                slider2Back()
            }else{
                slider2Forward()
            }

            setTimeout(() => {
                sloganCar()
            }, 700);
        }
    })

    // create content
    const navCreateBtns = $$('.content-create-nav_choose-name')
    navCreateBtns.forEach(btnCreate => {
        btnCreate.onclick = (e) => {
            e.stopPropagation();
            navCreate(btnCreate)
        }
    })
}










const start = () => {
    console.log('Hello world!');
    header();
    content();
}

start();