// GET NECESSARY ELEMENTS
const header = document.querySelector(".header__info");
const headerInNav = document.getElementById("menu__link__header");

const about = document.querySelector("#about .section__content");
const aboutInNav = document.getElementById("menu__link__about");

const portfolio = document.querySelector("#portfolio .section__content");
const portfolioInNav = document.getElementById("menu__link__portfolio");

const contact = document.querySelector("#contact .section__content");
const contactInNav = document.getElementById("menu__link__contact");


// FUNCTION REMOVES CLASS 'menu__item__link--focus' FROM ALL NAV LINKS
var removeNavItemsFocus = () => {
    let links = document.querySelectorAll(".menu__item__link");
    links.forEach(link => {
        link.classList.remove("menu__item__link--focus");
    })
}

// REMOVES THE FOCUS CLASS FROM ALL MENU LINKS AND ADDS IT TO THE CORRECT ONE  
var updateMenuFocus = function (elem, inNav) {
    if(!(inNav.classList.contains("menu__item__link--focus"))){
        removeNavItemsFocus();
        inNav.classList.add("menu__item__link--focus");    
    }
}

// LIST OF MAIN SECTIONS
const sections = document.querySelectorAll('.section');

// FUNCTION TO INTERATE OVER LIST AND LOOKS FOR INTERSECTION. IF TRUE, UPDATES NAV LINKS STATE
function handleIntersection(entries) {
    entries.map((entry, i, x) => {
        if (entry.isIntersecting) {
            if("menu__link__"+entry.target.id == headerInNav.id){
                updateMenuFocus(header, headerInNav);
            }else if("menu__link__"+entry.target.id == aboutInNav.id){
                updateMenuFocus(about, aboutInNav);
            }else if("menu__link__"+entry.target.id == portfolioInNav.id){
                updateMenuFocus(portfolio, portfolioInNav);
            }else if("menu__link__"+entry.target.id == contactInNav.id){
                updateMenuFocus(contact, contactInNav);
            }
        }
    });
}

// CREATES NEW INTERSECTION OBSERVER TO RUN THE ABOVE FUNCTION
const observer = new IntersectionObserver(handleIntersection);

// STARTS AN OBSERVER FOR EACH MAIN SECTION
sections.forEach(section => observer.observe(section));

