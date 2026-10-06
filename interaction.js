const button = document.querySelector("button");

const message = document.querySelector(".image-container");

button.addEventListener('click', () => {
  message.classList.toggle("show");
});
function myFunction() {
  var x = document.getElementById("image-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}