// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("pats").classList.add("opaque");	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
	
}

function showTrophy(el){
	el.classList.add("center-content")
	document.getElementById("pats").src = "images/lombardi_trophy.png";
	document.getElementById("rams").src = "images/lombardi_trophy.png";
	document.getElementById("trophy").src = "images/lombardi_trophy.png";
}