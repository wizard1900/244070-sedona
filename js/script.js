var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".modal-hotel-form");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("modal-hotel-form-hidden");
});