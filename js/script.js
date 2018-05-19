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
  var x = event.clientX, y = event.clientY,
      elementMouseIsOver = document.elementFromPoint(x, y);
  if (!elementMouseIsOver.classList.contains("card")) {
    if (!document.getElementById(id).classList.contains("path-show")) {
      document.getElementById(id).classList.add("path-show");
    } else {
      document.getElementById(id).classList.remove("path-show");
    }
  }
}


// Modal öffnen wenn auf eine card geklickt wird
function openModal() {
  document.getElementById('myModal').style.display = "block";
}


// When the user clicks on the button, open the modal 
$(document).ready(function(){
  document.getElementById("myBtn").onclick = function() {
    document.getElementById('myModal').style.display = "block";
  }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
}