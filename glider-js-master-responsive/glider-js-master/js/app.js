window.addEventListener('load', function () {
	new Glider(document.querySelector('.slide1'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		// dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},

		responsive: [{
			// screens greater than >= 775px
			breakpoint: 300,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			// screens greater than >= 775px
			breakpoint: 550,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			// screens greater than >= 1024px
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}

		}]
	});
});
window.addEventListener('load', function () {
	new Glider(document.querySelector('.slide2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		// dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},

		responsive: [{
			// screens greater than >= 775px
			breakpoint: 300,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			// screens greater than >= 775px
			breakpoint: 550,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			// screens greater than >= 1024px
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}

		}]
	});
});

$(".lightgallery").lightGallery();

/*탭버튼*/
var tabAnchor = $(".tabs-nav li a"),
	tabpanel = $(".glide__slides")

tabpanel.hide();
$("#productD-slide").show();

tabAnchor.click(function (e) {
	e.preventDefault();

	tabAnchor.removeClass("active");
	$(this).addClass("active");

	tabpanel.hide();
	var $target = $(this).attr('href');
	console.log($target);
	$($target).show();

});