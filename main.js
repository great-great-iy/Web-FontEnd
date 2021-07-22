/*---------Toggle menu----------*/
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
    return navLinks;
}
function hideMenu(){
    navLinks.style.right = "-200px";
    return navLinks;
}