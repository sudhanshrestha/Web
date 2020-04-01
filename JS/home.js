// declaring constants and cariables

const text =['SUDHAN SHRESTHA'] // text to be displayed
//seting counter as 0
let count = 0;
//declaring index as 0
let index = 0;
//setting the curent text as null or " "
let currentText = '' ;
//setting letter as null as well
let letter = '';
//creating a function which initilizes itself 
(function type() {
	// if the counter is equals to the total length of the text counter resets
	if (count === text.length) {
		count = 0;

	}
	//taking each letter 
	currentText = text[count];
	//incresing the index as well as taking each letter
	letter = currentText.slice(0,++index);
	//displayes each letter 
	document.querySelector('.typing').textContent = letter;
	//increasing counter
	if (letter.length === currentText.length) {
		count++;
		
	}
	//setting speed of the effect
	setTimeout(type,200);
}())