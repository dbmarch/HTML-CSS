// const button = document.getElementById("button");
const button = document.querySelector("#button");
button.addEventListener("click", function () {
  button.classList.toggle("active");
  document.body.classList.toggle("dark");
});
console.log(button);
