/*jslint browser: true*/
/*global $, jQuery, alert*/

// Content mittels AJAX reinladen
function loadDoc(fileName) {
  "use strict";
  $("#content-container").load("content/" + fileName + ".html");
}

$(document).ready(function () {
  "use strict";
  loadDoc('einschreibung');
});

// Navigation for mobile view
function dropdownNav() {
  "use strict";
  var x = document.getElementById("topnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// Aktive Seite hervorheben
$(document).ready(function () {
  "use strict";
  var i, navContainer, navs, current;
  navs = document.getElementsByClassName("navBtn");
  // EventListener für jedes Navigationselement hinzufügen
  for (i = 0; i < navs.length; i += 1) {
    navs[i].addEventListener("click", function () {
      current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      dropdownNav();
    });
  }
});

// Übersicht-Dropdowns auf Click
function uebersichtDropdown(id) {
  "use strict";
  var x = event.clientX, y = event.clientY, elementMouseIsOver = document.elementFromPoint(x, y);
  if (!elementMouseIsOver.classList.contains("card")) {
    if (!document.getElementById(id).classList.contains("show")) {
      document.getElementById(id).classList.add("show");
    } else {
      document.getElementById(id).classList.remove("show");
    }
  }
}

// Path-Dropdowns auf Click
function pathDropdown(id) {
  "use strict";
  var x = event.clientX, y = event.clientY, elementMouseIsOver = document.elementFromPoint(x, y);
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
  "use strict";
  document.getElementById('myModal').style.display = "block";
}

// Modal schliessen wenn ausserhalb des Modals geklickt wird
window.onclick = function (event) {
  "use strict";
  if (event.target === document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
};

// Drag & Drop-Funktion für die Module der Einschreibung
function dragStart(ev) {
  ev.dataTransfer.effectAllowed = 'move';
  ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
  ev.dataTransfer.setDragImage(ev.target,0,0);
  return true;
}

function dragEnter(ev) {
  event.preventDefault();
  return true;
}

function dragOver(ev) {
  return false;
}

function dragDrop(ev) {
  var src = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(src));
  ev.stopPropagation();
  return false;
}

