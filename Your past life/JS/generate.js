let index=0;
function generate(){

	if ((image = document.getElementById("image_line"))!=null){
		elimination()	
	}

	if (index>0){
		let div = document.getElementById('content');
		while(div.firstChild){
	    	div.removeChild(div.firstChild);
		}
	}

	let content = document.getElementById("content")

	let inputBirthday = document.getElementById("Birthday").value;
	let inputDead = document.getElementById("Dead").value;

	let contentBlock;
	

	let ordine = -1;
	for (let i in arrayPerson){
		if(areContemporaries(arrayPerson[i],inputBirthday,inputDead)){
			ordine+=1
			if(ordine%2==0){
				contentBlock = createContentBlockLeft(arrayPerson[i],inputBirthday,inputDead)
			}else{
				contentBlock = createContentBlockRight(arrayPerson[i],inputBirthday,inputDead)
			}
			content.appendChild(contentBlock);
		}
	}
	index+=1;
}
