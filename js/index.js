const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 200)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	navlist.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

window.onscroll = () => {
	navlist.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '40px',
	duration: 2050,
	delay: 200,
	reset: true
});

sr.reveal('.hero-text', {orogin: 'top'});
sr.reveal('.about-img, .service-item, .about-text', {origin: 'bottom'});
sr.reveal('.about-text h2, .text-center, .right-contact h2', {origin: 'top'});
sr.reveal('.left-contact', {origin: 'bottom'});
/*sr.reveal('.right-contact', {origin: 'right'});*/
sr.reveal('.end-section', {origin: 'top'});