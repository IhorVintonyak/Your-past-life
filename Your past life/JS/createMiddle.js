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