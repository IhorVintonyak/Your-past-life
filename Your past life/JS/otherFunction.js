function createDivEmpty(){
	let divEmpty = document.createElement("div")
	return divEmpty;
}


function calculateYearsTogether(birthday,dead,inputBirthday,inputDead){
	yearsTogether = 0
	if (inputBirthday <= birthday & inputDead >= dead){
		yearsTogether = dead - birthday 
	}else if(inputBirthday > birthday & inputDead > dead){
		yearsTogether = dead - inputBirthday
	}else if(inputBirthday > birthday & inputDead < dead){
		yearsTogether = inputDead - inputBirthday
	}else if(inputBirthday < birthday & inputDead < dead){
		yearsTogether = inputDead - birthday
	}
	return yearsTogether
}

function areContemporaries(person,inputBirthday,inputDead){
	if((person.birthday > inputDead) || (person.dead < inputBirthday)){
		return false;
	}else{
		return true;
	}
}