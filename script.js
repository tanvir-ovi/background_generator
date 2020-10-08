var CSS=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function colorchange(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
CSS.innerHTML = body.style.background+";";
}


color1.addEventListener("input",colorchange);

color2.addEventListener("input", colorchange);
// body.oninput=colorchange;