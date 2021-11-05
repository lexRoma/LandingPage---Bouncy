$(document).ready(function(){
	$('.testimonials__slider').slick({
		dots:true,
		autoplay:true,
		autoplaySpeed:5000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		touchMove:true
        
	});

});

$(document).ready(function(){
	$('.blog__slider').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		autoplaySpeed:5000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,

		vertical:true,
		verticalSwiping:true,
		touchMove:true

        
	});

});

$(document).ready(function(){
	$('.theteam__slider').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		autoplaySpeed:5000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		touchMove:true
        
	});

});



function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.menu__link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');

document.getElementById('seeMap').onclick = function() {
	document.getElementById('mapCover').classList.add('invisible');
	document.getElementById('seeMap').classList.add('invisible');
}

document.getElementById('mapCover').onclick = function() {
	document.getElementById('mapCover').classList.add('invisible');
	document.getElementById('seeMap').classList.add('invisible');
}

/*
document.getElementById('down').onclick = function() {
	const el = document.getElementsByName('hello');
	el.scrollIntoView({behavior: "smooth"});

}
*/


/*
document.addEventListener('DOMContentLoaded', () => {


	let animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeigh;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;


				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_start');
				} else {
					animItem.classList.remove('_start');
				}
			}
		}

		function offset(el) {                           // Важное, сохрани!!!!!!!
			var rect = el.getBoundingClientRect(),
		scrollLeft = window.scrollX || document.documentElement.scrollLeft,
		scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll()
		}, 200)
	}

})
*/


document.addEventListener('DOMContentLoaded', () => {
	const scrollitems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		scrollitems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};

	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	})


} );
