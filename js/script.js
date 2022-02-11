$(document).ready(function(){
	$('.testimonials__slider').slick({
		dots:true,
		// autoplay:true,
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
		// autoplay:true,
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
		//autoplay:true,
		autoplaySpeed:5000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		touchMove:true
        
	});

});
//====== Swiper for portfolio ====================================//

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
		clickable: true,
		
		renderBullet: function (index, className) {
		var arr = new Array("All works", "Prints", "Identify", "HTML", "WordPress", "Web", "Branding");
		
		return  `<div class="swiper-pagination-bullet">` + (arr[index]) + ` <span class="border"></span></div>`;
		
		},
		
		el: '.swiper-pagination',
	},
  
	// Navigation arrows
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });



//====== Burger ==================================================//




$(document).ready(function() {
    $('.burger-menu_button').click(function(event) {
        $('.burger-menu_button, .header__menu, .first-part__title, .first-part__subtitle, .burger-menu_overlay').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.menu__link').click(function(event) {
        $('.burger-menu_button, .header__menu, .first-part__title, .first-part__subtitle, .burger-menu_overlay').removeClass('active');
        $('body').removeClass('lock');
    });
});


//====== Map open==================================================//


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
		let windowCenter = (window.innerHeight / 1.2) + window.scrollY;
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
	Circlle('.round');
	window.addEventListener('scroll', () => {
		scrollAnimation();
		
	})


} );




//====== Blocks position==================================================//

var div = document.createElement('div');
  div.className = "features__bottom";
  div.innerHTML = '<div class="features__bottom__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </div><input class="features__bottom__button" type="button" name="" value="Submit Now">';
  
var screenWindows = window.screen.availWidth;  ///screen.width;
    if (screenWindows >= 320 && screenWindows <= 769) {
       var f = document.getElementById("img1");
       f.appendChild(div);
     } else if (screenWindows >= 767) {
       var h = document.getElementById("img3");
       h.appendChild(div);
    }