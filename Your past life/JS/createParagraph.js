function createParagraphName(person){
	let pName = document.createElement("p");
	let pNameText = document.createTextNode(person.name);
	pName.appendChild(pNameText);
	return pName;
}

function createParagraphAge(person){
	let pAge = document.createElement("p");
	let pAgeText = document.createTextNode(person.birthday + "-" + person.dead)
	pAge.appendChild(pAgeText);
	return pAge;
}
function createParagraphYearsTogether(person,inputBirthday,inputDead){
	let pYearsTogether = document.createElement("p");

	let br = document.createElement("br");
	let numberStrong = document.createElement("strong");
	let numberOfYears = document.createTextNode(calculateYearsTogether(person.birthday,person.dead,inputBirthday,inputDead))
	let pYearsTogetherText = document.createTextNode("anni vissuti contemporaneamente")

	numberStrong.appendChild(numberOfYears);
	numberStrong.classList.add("years_together");

	pYearsTogether.appendChild(numberStrong)
	pYearsTogether.appendChild(br)
	pYearsTogether.appendChild(pYearsTogetherText);
	return pYearsTogether;
}