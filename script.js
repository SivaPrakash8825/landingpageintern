const scroll = document.getElementById("scroll");
const scrollbtn = document.getElementById("scroll_icon");
const clickme = document.getElementById("btnscr");
scrollbtn.addEventListener("click", () => {
  scroll.scrollIntoView();
});

clickme.addEventListener("click", () => {
  scroll.scrollIntoView();
});
