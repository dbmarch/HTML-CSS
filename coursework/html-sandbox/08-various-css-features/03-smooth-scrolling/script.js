document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  console.log("Header element:", header);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });
});
