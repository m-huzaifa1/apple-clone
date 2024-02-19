var list = document.getElementById("listover1");
var menu = document.getElementById("sub1");

list.addEventListener("mouseover", function () {
    menu.style.display = "block"
})
list.addEventListener("mouseout", function () {
    menu.style.display = "none"
})