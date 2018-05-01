$(document).ready(function() {
  loadDoc('uebersicht');
})

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
var navContainer = null;
var navs = null;
$(document).ready(function() {
  navContainer = document.getElementById("topnav");
  navs = navContainer.getElementsByClassName("navBtn");

  // EventListener für jedes Navigationselement hinzufügen
  for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active"; 
      }
    });
  } 
})