function loadDoc(fileName) {
    $("#content").load("content/" + fileName + ".html");
}

$(document).ready(function() {
    loadDoc('uebersicht');
})