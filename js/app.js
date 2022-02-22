let catalogSlider = new Swiper('.catalog__body_main', {
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		500: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1280: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1580: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	},
});

let storySlider = new Swiper('.story__body', {
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	slidesPerView: 3,
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 0,
			centeredSlides: true,
		},
		480: {
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		1280: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
		1600: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
	},
});

(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:767.98px)' );
  let productsSwiper;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
			if ( productsSwiper !== undefined ) productsSwiper.destroy( true, true );
			return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
  };

  const enableSwiper = function() {
    productsSwiper = new Swiper ('.feedbacks__body', {
      observer: true,
			observeParents: true,
			speed: 800,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			},
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

let productSlider = new Swiper('.slider-product', {
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 15,
			centeredSlides: true,
		},
		550: {
			slidesPerView: 2,
			spaceBetween: 30,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: false,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
			centeredSlides: false,
			direction: 'vertical',
		},
		1280: {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: false,
			direction: 'vertical',
		},
	},
});

let feedbackProductSlider = new Swiper('.feedback-product__body', {
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 14,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1600: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
//lang menu
const langMenu = document.querySelector(".lang_active");
if (langMenu) {
	const langBody = document.querySelector(".lang_s");

	langMenu.addEventListener("click", function(e) {
		e.preventDefault();
		langBody.classList.toggle("_active");
	});

	document.addEventListener('click', function(e) {
    const target = e.target;
    const its_langBody = target == langBody || langBody.contains(target);
		const its_langMenu = target == langMenu;
    const langBody_is_active = langBody.classList.contains('_active');
    if (!its_langBody && !its_langMenu && langBody_is_active) {
      langBody.classList.remove('_active');
    }
	});
}

//currency open
const currButton = document.querySelector(".menu__currency-text");
if (currButton) {
	const currBody = document.querySelector(".menu__currency-select");

	currButton.addEventListener("click", function(e) {
		e.preventDefault();
		currBody.classList.toggle("_active");
	});

	document.addEventListener('click', function(e) {
    const target = e.target;
    const its_currBody = target == currBody || currBody.contains(target);
		const its_currButton = target == currButton;
    const currBody_is_active = currBody.classList.contains('_active');
    if (!its_currBody && !its_currButton && currBody_is_active) {
      currBody.classList.remove('_active');
    }
	});
}

//menu open
let unlock = true;
let iconMenu = document.querySelector(".header__menu-button");
let closeMenu = document.querySelector(".menu__close");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			menuBody.classList.add("_active");
		}
	});
	closeMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			menuBody.classList.remove("_active");
		}
	});
};

const orderButton = document.querySelector('.orders-button');
if (orderButton) {
	const bodyOrder = document.querySelector('.product__orders');
	const formOrder = document.querySelector('.product__form');

	orderButton.addEventListener('click', function() {
		bodyOrder.classList.add('_hide');
		formOrder.classList.add('_visible');
	});
}

// auto height slider
window.addEventListener('resize', sliderHeight);
function sliderHeight() {
	let slideProduct = document.querySelector('.product__image-wrap');
	if (slideProduct !== null) {
		let styleProduct = getComputedStyle(slideProduct);
		let slideHeight = parseInt(styleProduct.paddingTop);
		let miniSliderProduct = document.querySelector('.slider-product');
		if (window.innerWidth > 992) {
			miniSliderProduct.style.height = slideHeight + 'px';
		}
	}
}
setTimeout(function () {
	sliderHeight();
}, 10);

//product slider toggler
const productSlides = document.querySelectorAll('.slider-product__slide-wrap img');
if (productSlides.length) {
	const productImage = document.querySelector('.product__image-wrap img');
	for (let i = 0; i < productSlides.length; i++) {
		let productSlide = productSlides[i];

		productSlide.addEventListener("click", function() {
			productImage.src = productSlide.src;
		});
	}
}

//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}

//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

//Show more
const showMoreButton = document.querySelector('.article__button');
if (showMoreButton) {
	const articleBody = document.querySelector('.article__content');

	showMoreButton.addEventListener('click', function() {
		if (showMoreButton.classList.contains('_active')) {
			showMoreButton.innerHTML = 'Развернуть';
		} else {
			showMoreButton.innerHTML = 'Свернуть';
		}

		articleBody.classList.toggle('_active');
		showMoreButton.classList.toggle('_active');
	});
}

//Map
const mapBlock = document.getElementById("map");

if (mapBlock) {
	document.addEventListener('DOMContentLoaded', initMap);

	let map;
	let marker;
	let infoMap;

	function initMap() {
		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: 49.99391253481255, lng: 36.22280340426285 },
			zoom: 17,
		});

		marker = new google.maps.Marker({
			position: { lat: 49.99391253481255, lng: 36.22280340426285 },
			map: map,
		});

		infoMap = new google.maps.InfoWindow({
			content: '<h3>Доставка цветов VIAFLOR</h3>'
		});

		marker.addListener('click', function() {
			infoMap.open(map, marker);
		});
	}
}

//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}

//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});

//sort open
const sortButton = document.querySelector(".sort");
if (sortButton) {
	const sortBody = document.querySelector(".sorting");
	const sortItems = document.querySelectorAll(".sorting__item");

	sortButton.addEventListener("click", function(e) {
		e.preventDefault();
		e.stopPropagation();
		sortBody.classList.toggle("_active");
	});

	for (let i = 0; i < sortItems.length; i++) {
		sortItem = sortItems[i];

		sortItem.addEventListener('click', function() {
			sortBody.classList.remove('_active');
		});
	}

	document.addEventListener('click', function(e) {
    const target = e.target;
    const its_sortBody = target == sortBody || sortBody.contains(target);
		const its_sortButton = target == sortButton;
    const sortBody_is_active = sortBody.classList.contains('_active');
    if (!its_sortBody && !its_sortButton && sortBody_is_active) {
      sortBody.classList.remove('_active');
    }
	});
}

//RANGE
const priceSlider = document.querySelector('.filter__slider');
if (priceSlider) {

	noUiSlider.create(priceSlider, {
		start: [630, 11500],
		connect: true,
		range: {
			'min': [630],
			'max': [11500]
		}
	});

	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');

	priceSlider.noUiSlider.on('update', function (values, handle) {
    let value = values[handle];

    if (handle) {
			priceEnd.value = Math.round(value);
    } else {
			priceStart.value = Math.round(value);
    }
	});

	priceStart.addEventListener('change', function () {
    priceSlider.noUiSlider.set([this.value, null]);
	});

	priceEnd.addEventListener('change', function () {
		priceSlider.noUiSlider.set([null, this.value]);
	});
}

const bodyCheckboxs = document.querySelectorAll('.filter__checkbox-line');
if (bodyCheckboxs.length > 0) {
	document.addEventListener('DOMContentLoaded', initChecbox);

	function initChecbox() {
		for (let i = 0; i < bodyCheckboxs.length; i++) {
			bodyCheckbox = bodyCheckboxs[i];
	
			const inputCheckbox = bodyCheckbox.querySelector('input');
			const colorCheckbox = inputCheckbox.getAttribute('value');
			const labelCheckbox = bodyCheckbox.querySelector('.filter__checkbox');
			labelCheckbox.style.backgroundColor = `#${colorCheckbox}`;
		}
	}
}

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

let currentScroll;
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let wrapper = document.querySelector('.wrapper');
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			wrapper.classList.add('_scroll');
			header.classList.add('_scroll');
		} else {
			wrapper.classList.remove('_scroll');
			header.classList.remove('_scroll');
		}
	}
}