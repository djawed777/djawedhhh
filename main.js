//  ---------- toturial one ------------

// function opentab(name) {
//   //Hide the tab contents
//   var tabcontents = document.getElementsByClassName("tab-contents");

//   //Loop on tag contents to remove the class name , cuz we call the element with class name
//   for (i = 0; i < tabcontents.length; i++) {
//     tabcontents[i].classList.remove("active-tab");
//   }

//   //add active-link to display the tab content
//   var selectedtab = document.getElementById(name);
//   selectedtab.classList.add("active-tab");
//   selectedtab.classList.add("active-link");
// }

// -------tutorial two ---------
var tabcontents = document.getElementsByClassName("active-tab");
var tablinks = document.getElementsByClassName("active-link");
function opentab(name) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  document.getElementById(name).classList.add("active-tab");
}

//menu function

var buttonmenu = document.querySelector(".fa-bars");
var menu = document.querySelector("nav ul");

buttonmenu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  buttonmenu.classList.toggle("active-icon");
});
