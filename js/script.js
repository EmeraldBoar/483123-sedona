var button = document.querySelector(".search__btn");
var form = document.querySelector(".search-form");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
})
