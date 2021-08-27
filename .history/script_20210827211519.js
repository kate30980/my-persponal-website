// first query those items and then create a loop to actually add an event handler
let themDots = document.getElementsByClassName("theme-dot");
for (var i = 0; themeDots.length > i; i++) {
  themDots[i].addEventListener("click", function () {
    console.log("Option Clicked");
  });
}
