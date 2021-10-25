/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
// End Global Variables

// build the nav
let counter = 0;
for(const section of sections){
    const sectionId = section.getAttribute("id");
    const sectionName = section.getAttribute("data-nav");
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionName}</a>`;
    li.addEventListener("click",e =>{
      e.preventDefault();
      section.scrollIntoView({behavior: "smooth"});
      })
    navList.appendChild(li);
}

//collect navbar content in an array
let navitli = document.querySelectorAll(".menu__link");
let count = 0;
//detect which section is currently active
function currentlyActive(sec){
    let position = sec.getBoundingClientRect();
    return(position.top >= 0 );
}
// Add class 'active' to section when near top of viewport
function activeSection(){
    for(section of sections){
        
        if (currentlyActive(section)) {
            if (!section.classList.contains("your-active-class" ) ){
                 section.classList.add("your-active-class");
    }
}
    else{
        section.classList.remove("your-active-class");
     }

}
}


/**
 * End Main Functions
 * Begin Events
*/
// Set sections as active
document.addEventListener('scroll', activeSection);




