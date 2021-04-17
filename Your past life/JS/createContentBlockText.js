function createContentBlockText(person,inputBirthday,inputDead){
	let divContentBlockText = document.createElement("div");
	divContentBlockText.classList.add("content_block_text");

	divContentBlockText.appendChild(createContentBlockTextImg(person))
	divContentBlockText.appendChild(createContentBlockTextMain(person,inputBirthday,inputDead))

	return divContentBlockText;
}


function createContentBlockTextImg(person){
	let img = document.createElement("img")
	img.src = person.img
	img.classList.add("content_block_text_img");
	return img;
}

function createContentBlockTextMain(person,inputBirthday,inputDead){
	let spanInfo = document.createElement("span");
	spanInfo.appendChild(createParagraphName(person));
	spanInfo.appendChild(createParagraphAge(person));
	spanInfo.appendChild(createParagraphYearsTogether(person,inputBirthday,inputDead));
	spanInfo.classList.add("content_block_text_main");

	return spanInfo;
}