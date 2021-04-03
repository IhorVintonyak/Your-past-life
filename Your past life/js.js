let AlessandroManzoni = {
    name: "Alessandro Manzoni",
    birthday:1785,
    dead:1873,
}

let inputBirthday = 1800;
let inputDead = 1820;

let birthday = AlessandroManzoni.birthday
let dead = AlessandroManzoni.dead

getElementsByClassName

function calculateYearsTogether(){
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