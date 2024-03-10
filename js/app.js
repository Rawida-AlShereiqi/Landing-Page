//creating a dynamic navigation bar 
window.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const nav = document.getElementById('navbar');
    const fragment = document.createDocumentFragment();
    
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.innerText = section.id;
        a.href = `#${section.id}`;
        a.addEventListener('click', (event) => {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });

        li.appendChild(a);
        fragment.appendChild(li);
    });
       
    nav.appendChild(fragment);
});

// add or remove a CSS class 'active'
window.addEventListener('scroll', (event) => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// add or remove a CSS class 'active2'
window.addEventListener('scroll', event => { 
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
 
    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);
 
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active2');
        } else {
            link.classList.remove('active2');
        }
    });
});






// When the user scrolls down 20px from the top of the document, show the button:

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document:
//Get the button:
const mybutton = document.getElementById("back-to-top");
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0; // For Safari browsers
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera browsers
}