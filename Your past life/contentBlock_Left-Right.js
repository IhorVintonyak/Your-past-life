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