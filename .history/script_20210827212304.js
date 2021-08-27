// first query those items and then create a loop to actually add an event handler
let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
      let mode this.dataset.mode
    console.log("Option clicked",mode);
  });
}
