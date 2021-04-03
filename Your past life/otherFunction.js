function createDivEmpty(){
	let divEmpty = document.createElement("div")
	return divEmpty;
}


function calculateYearsTogether(birthday,dead){
	yearsTogether = 0
	if (inputBirthday < birthday & inputDead > dead){
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
