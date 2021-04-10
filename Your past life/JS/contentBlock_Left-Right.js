function createContentBlockLeft(person,inputBirthday,inputDead){
	let divContentBlock = document.createElement("div");
	divContentBlock.classList.add("content_block");

	divContentBlock.appendChild(createContentBlockText(person,inputBirthday,inputDead))
	divContentBlock.appendChild(createMiddle())
	divContentBlock.appendChild(createDivEmpty())


	return divContentBlock;
}

function createContentBlockRight(person,inputBirthday,inputDead){
	let divContentBlock = document.createElement("div");
	divContentBlock.classList.add("content_block");
	
	divContentBlock.appendChild(createDivEmpty())
	divContentBlock.appendChild(createMiddle())
	divContentBlock.appendChild(createContentBlockText(person,inputBirthday,inputDead))	


	return divContentBlock;
}