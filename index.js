// const open = document.querySelectorAll("btn");
const overlay = document.querySelector(".overlay");
	modal = document.querySelector(".modal-window");
	  btn = document.querySelector(".btn");

	btn.addEventListener('click', () => {
		overlay.classList.add("active");
		modal.classList.add("active");
	});

const closeOverlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".X");


	closeBtn.addEventListener('click', () => {
		modal.classList.remove("active");
		overlay.classList.remove("active");
	});

	closeOverlay.addEventListener('click', () => {
		modal.classList.remove("active");
		overlay.classList.remove("active");
	});