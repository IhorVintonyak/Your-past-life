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