;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	var winST;
	var $header = $('.header');
	var $headerClone = $header.clone();
	var $statistics = $('.statistics');
	var $gallery = $('.list-images');

	$.fn.extend({
		scrollSpy: function(headerOffset) {
			var $this = $(this);
			var anchors = [];
			var spySectionsOffsets = [];
			var offset = headerOffset == true ? $('.header').outerHeight() : 0;

			$this
				.find('a:not(.scrollspy-excluded)')
					.each(function(){
						anchors.push($(this));
					});

			updateSpy();

			$win.on('load scroll', function(){
				for (var i = spySectionsOffsets.length - 1; i >= 0; i--) {
					if (winST + offset >= spySectionsOffsets[i]) {
						$('.spy-active').removeClass('spy-active')
						
						anchors[i].addClass('spy-active');

						break;
					}

					if (i == 0) {
						$('.spy-active').removeClass('spy-active')
					}
				}
			}).on('resize', function(){
				updateSpy();
			});

			function updateSpy() {
				offset = headerOffset == true ? $('.header').outerHeight() : 0;
				spySectionsOffsets = [];

				$this
					.find('a:not(.scrollspy-excluded)')
						.each(function(){
							spySectionsOffsets.push($($(this).attr('href')).offset().top);
						});
			}
		}
	});

	// Function to start sliders
	function startSlider($slider, options) {
		$slider.each(function(){
			var $this = $(this);
			var $slidesContainer = $this.find('.slides').length ? $this.find('.slides') : $this;

			$slidesContainer
						.addClass('owl-carousel')
						.owlCarousel(options);
		});
	}

	// Start slider based on window width
	function startResponsiveSlider($slider, winW) {
		if ($win.width() < winW && !$slider.hasClass('owl-carousel')) {
			startSlider($slider, {
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 7000,
				smartSpeed: 1500
			});
		} else if ($win.width() > winW - 1 && $slider.hasClass('owl-carousel')){
			$slider
				.removeClass('owl-carousel')
				.trigger('destroy.owl.carousel');
		}
	}

	// Check if element should be hidden on click
	function hideElementsOnClick($target, element, className) {
		if (!$target.is(element + ', ' + element + ' *, .js-toggle.' + className + ', .js-toggle.' + className + ' *')) {
			$('.' + className).each(function(){
				var $this = $(this);

				$this.removeClass(className);
			});
		}
	}

	// Create a static nachor or header offset
	$headerClone
			.appendTo('body')
			.addClass('cloned header-scrolled');

	// Start scrollspy
	$header
		.find('.nav')
			.scrollSpy(true);

	// Anchor links animation
	$('.scroll').on('click', function(e){
		e.preventDefault();

		var $this = $(this);

		$('.nav-visible').removeClass('nav-visible');

		$('html, body').animate({
			scrollTop: $($this.attr('href')).offset().top - $headerClone.outerHeight()
		}, 1000);
	});

	// Accordion functionality
	$('.accordion-head h3').on('click', function(){
		$(this)
			.closest('.accordion-section')
				.toggleClass('accordion-expanded')
				.siblings()
					.removeClass('accordion-expanded');
	});

	// JS toggles
	$('.js-toggle').on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		var $target = $this.data('target') ? $($this.data('target')) : $($this.attr('href'));
		var activeClass= $this.data('class') ? $this.data('class') : 'active';

		$this
			.add($target)
			.toggleClass(activeClass);
	});

	// Video Popups
	$doc.on('click', '.video-popup', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.magnificPopup.open({
			type: 'iframe',
			removalDelay: 300,
			items: {
				src: $this.attr('href')
			}
		});
	});

	// Close elements when clicked outside of them
	$doc.on('click touchstart', function(e){
		var $target = $(e.target);

		hideElementsOnClick($target, '.header-inner', 'nav-visible');
	});

	$win.on('load', function(){
		// Start videos slider
		if ($('.slider-videos').length) {
			startSlider($('.slider-videos'), {
				loop: true,
				autoplay: true,
				autoplayTimeout: 7000,
				mouseDrag: false,
				smartSpeed: 1500,
				items: 1,
				margin: 30
			});
		}
	}).on('scroll', function(){
		winST = $win.scrollTop();

		// Toggle between fixed header
		$header.toggleClass('header-scrolled', winST > 0);
	}).on('load resize', function(){
		// Add class for mobile nav
		$header
			.add($headerClone)
			.toggleClass('header-mobile', $win.width() < 768);

		// Check if mobile statistics slider should be started
		startResponsiveSlider($statistics, 1024);

		// Check if mobile images slider should be started
		startResponsiveSlider($gallery, 768);
	});
})(jQuery, window, document);
