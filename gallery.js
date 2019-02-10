// JavaScript Document
// Desislava Dicheva
// September 14th, 2018

window.onload = switchImage;

function switchImage(event) {
	event  = event || window.event;
	
	var targetElement  = event.target || event.srcElement;
	if (targetElement.tagName === "IMG"){
		document.getElementById("fullImage").src = targetElement.getAttribute("src");
		}


}

