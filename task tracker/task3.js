
window.onload = function()
{
	document.getElementById("add").onclick = hi;
	document.getElementById("delete").onclick = hii;
	document.getElementById("deleteitem").onclick = hiii;
	document.getElementById("input").observe("click", my);
}

function hi()
{
	var r = document.getElementById("list");
	var p = document.getElementById("input");
	var m = document.createElement("li");
	m.innerHTML = p.value;
	r.appendChild(m);
}

function hii()
{
	var out = document.getElementById("list");
	var ou = out.getElementsByTagName("li");
	var f = parseInt(ou.length);
	out.removeChild(ou[f-1]);
}

function hiii()
{
	var out = document.getElementById("list");
	var ou = out.getElementsByTagName("li");
	out.removeChild(ou[(document.getElementById("h").value)-1]);
}

function my(){document.getElementById("input").value = ""}