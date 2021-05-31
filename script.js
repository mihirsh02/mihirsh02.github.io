// NavBar Highlight and movement

const sections = document.querySelectorAll('section');

const navLi = document.querySelectorAll('.header_navbar ul li');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute('id');
        }
    })


    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })

})

// Make Nav Bar sticky

stickyElem =
    document.querySelector(".sticky-div");

currStickyPos =
    stickyElem.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function () {

    if (window.pageYOffset > currStickyPos) {
        stickyElem.style.position = "fixed";
        stickyElem.style.top = "0px";
    } else {
        stickyElem.style.position = "relative";
        stickyElem.style.top = "initial";
    }
}