let AlessandroManzoni = {
    name: "Alessandro Manzoni",
    birthday:1785,
    dead:1873,
}

let inputBirthday = 1781;
let inputDead = 1875;

function generate(){
	let content = document.getElementById("content")

	let contentBlock;

	for (let i = 0; i < 4; i++) {
		if (i % 2 == 0){
			contentBlock = createContentBlockLeft(AlessandroManzoni)
		}else{
			contentBlock = createContentBlockRight(AlessandroManzoni)
		}
		content.appendChild(contentBlock);
	}
}


