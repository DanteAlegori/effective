let menu = document.querySelector('.menu')
let menuIcon = document.querySelector('.header__icon')

if (menuIcon) {
	menuIcon.addEventListener('click', function () {
		menu.classList.toggle('_active')
		document.body.classList.toggle('_active')
	})
}