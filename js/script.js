$(document).ready(function() {
  loadDoc('uebersicht');
});

// Content mittels AJAX reinladen
function loadDoc(fileName) {
  $("#content-container").load("content/" + fileName + ".html");
}

// Navigation for mobile view
function dropdownNav() {
  var x = document.getElementById("topnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// Aktive Seite hervorheben
$(document).ready(function() {
  var i;
  var navContainer;
  var navs;
  var current;

  navContainer = document.getElementById("topnav");
  navs = document.getElementsByClassName("navBtn");

  // EventListener für jedes Navigationselement hinzufügen
  for (i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
      current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active"; 
      
      dropdownNav();
    });
  } 
})

// Path-Dropdowns auf Click
function pathDropdown(id) {
  document.getElementById(id).classList.toggle("path-show");
}

// Modulbeschreibung (Modal) öffnen
$(".card").on("click", function (e) {
  $("#modalnew").modal("show");
});

// Nav schliessen
$(window).on('click', function() {
  
})