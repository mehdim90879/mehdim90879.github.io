/* write your code here */
window.onload = change;
function change() {
	document.getElementById("green").onclick = change0;
	document.getElementById("blue").onclick = change1;
	document.getElementById("mono").onclick = change2;
	document.getElementById("sansserif").onclick = change3;
    document.getElementById("serif").onclick = change4;
    document.getElementById("increase").onclick = change5;
    document.getElementById("decrease").onclick = change6;
}
function change0() {
	document.getElementById("paragraph").style.color = "Green";
}
function change1() {
	document.getElementById("paragraph").style.color = "Blue";
}
function change2() {
	document.getElementById("paragraph").style.fontFamily = "monospace";
}
function change3() {
	document.getElementById("paragraph").style.fontFamily = "sans-serif";
}
function change4() {
	document.getElementById("paragraph").style.fontFamily = "serif";
}
function change5() {
var retrievedfont = window.getComputedStyle(document.getElementById("paragraph")).getPropertyValue('font-size');
var TheSize = parseInt(retrievedfont);
document.getElementById("paragraph").style.fontSize = (TheSize + 1) + "px";
}
function change6() {
var retrievedfont = window.getComputedStyle(document.getElementById("paragraph")).getPropertyValue('font-size');
var TheSize = parseInt(retrievedfont);
document.getElementById("paragraph").style.fontSize = (TheSize - 1) + "px";
}
