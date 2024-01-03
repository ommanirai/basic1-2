console.log("i am external js");

function typeHere() {
    var yourText = document.getElementById("input").value;
    document.getElementById("heading").innerHTML = yourText;
}