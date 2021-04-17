function elimination(){

 	let image = document.getElementById("image_line");
	let description = document.getElementById("description");
	
	image.parentNode.removeChild(image);
	description.parentNode.removeChild(description);	
}