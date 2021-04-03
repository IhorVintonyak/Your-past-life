function createContentBlockLeft(person){
	let divContentBlock = document.createElement("div");
	divContentBlock.classList.add("content_block");

	divContentBlock.appendChild(createContentBlockText(person))
	divContentBlock.appendChild(createMiddle())
	divContentBlock.appendChild(createDivEmpty())

	return divContentBlock;
}

function createContentBlockRight(person){
	let divContentBlock = document.createElement("div");
	divContentBlock.classList.add("content_block");
	
	divContentBlock.appendChild(createDivEmpty())
	divContentBlock.appendChild(createMiddle())
	divContentBlock.appendChild(createContentBlockText(person))	

	return divContentBlock;
}



function createContentBlockText(person){
	let divContentBlockText = document.createElement("div");
	divContentBlockText.classList.add("content_block_text");

	divContentBlockText.appendChild(createContentBlockTextImg(person))
	divContentBlockText.appendChild(createContentBlockTextMain(person))

	return divContentBlockText;
}


function createContentBlockTextImg(person){
	let img = document.createElement("img")
	img.src = "img/alessandro-manzoni.jpg"
	img.classList.add("content_block_text_img");
	return img;
}

function createContentBlockTextMain(person){
	let spanInfo = document.createElement("span");
	spanInfo.appendChild(createParagraphName(person));
	spanInfo.appendChild(createParagraphAge(person));
	spanInfo.appendChild(createParagraphYearsTogether(person));
	spanInfo.classList.add("content_block_text_main");
	return spanInfo;
}


function createMiddle(){
	let divMiddle = document.createElement("div");
	divMiddle.classList.add("middle");

	let img = createMiddleImg();
	divMiddle.appendChild(img)
	return divMiddle;
}

function createMiddleImg(){
	let img = document.createElement("img")
	img.src = "img/line.png"
	img.classList.add("middle_img");
	return img;
}

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
