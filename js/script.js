var player_number=1;
var filled=0;
var over=0;

var numbers = ["zero","one","two", "three", "four","five","six","seven","eight","nine"];
var temp=document.querySelector(".box");
temp.addEventListener("click", getclicked, false);

function cross(element){
	var newimg=document.createElement("img");
	newimg.id="image";
	newimg.src="https://img.clipartfest.com/63eb7d7e7004cca78d65644e04b75301_download-the-standard-clip-art-clipart-wrong-cross_441-441.png"
	newimg.style.height="130px";
	newimg.style.width="130px";
	newimg.style.position="absolute";
	element.appendChild(newimg);
}

function circle(element){
	var newimg=document.createElement("img");
	newimg.id="image";
	newimg.src="https://appstickers-cdn.appadvice.com/1166350852/819346269/ced8fa5efbf548fccb7b5056e87b973f-2.png";
	newimg.style.height="130px";
	newimg.style.width="130px";
	newimg.style.position="absolute";
	element.appendChild(newimg);
}

function play(obj){
	if(player_number==1){
		if(obj.childNodes.length<1){
			cross(obj);
			player_number=2;
			filled++;
			return;
		}
	}
	else{
		if(obj.childNodes.length<1){
			circle(obj);
			player_number=1;
			filled++;
			return;
		}
	}
}

function getclicked(temp) {
    if (temp.target !== temp.currentTarget) {
        var clickedItem = temp.target;
        play(clickedItem);
        gameEnd(clickedItem);
    }
    temp.stopPropagation();
}

function gameEnd(current){
	var justClicked = numbers.indexOf(current.id);
	switch(justClicked){

		case 1: if(compare(2,3,current)){
					cut(1,2,3);
				}
				else if(compare(4,7,current)){
					cut(1,4,7);
				}
				else if(compare(5,9,current)){
					cut(1,5,9);
				}
				break;
		case 2: if(compare(1,3,current)){
					cut(1,2,3);
				}
				else if(compare(5,8,current)){
					cut(2,5,8);
				}
				break;
		case 3: if(compare(2,1,current)){
					cut(1,2,3);
				}
				else if(compare(6,9,current)){
					cut(3,6,9);
				}
				else if(compare(5,7,current)){
					cut(3,5,7);
				}		
				break;
		case 4:	if(compare(7,1,current)){
					cut(1,4,7);
				}
				else if(compare(6,5,current)){
					cut(4,5,6);
				}	
				break;	
		case 5: if(compare(9,1,current)){
					cut(1,5,9);
				}
				else if(compare(2,8,current)){
					cut(2,5,8);
				}
				else if(compare(4,6,current)){
					cut(4,5,6);
				}		
				break;
		case 6: if(compare(4,5,current)){
					cut(4,5,6);
				}
				else if(compare(3,9,current)){
					cut(3,6,9);
				}		
				break;
		case 7: if(compare(9,8,current)){
					cut(7,8,9);
				}
				else if(compare(1,4,current)){
					cut(1,4,7);
				}
				else if(compare(3,5,current)){
					cut(3,5,7);
				}		
				break;	
		case 8: if(compare(9,7,current)){
					cut(8,7,9);
				}
				else if(compare(2,5,current)){
					cut(2,5,8);
				}
				break;
		case 9: if(compare(1,5,current)){
					cut(1,5,9);
				}
				else if(compare(3,6,current)){
					cut(3,6,9);
				}
				else if(compare(7,8,current)){
					cut(7,8,9);
				}		
				break;		
	}															
	if(filled==9 && over==0){
			alert("Its a tie!");
			restart();
	}	
	
}

function compare(index1, index2, current){
	if(document.getElementById(numbers[index1]).childNodes.length==1 &&
	 document.getElementById(numbers[index2]).childNodes.length==1){
		if(document.getElementById(numbers[index1]).childNodes[0].src==current.childNodes[0].src &&
			document.getElementById(numbers[index2]).childNodes[0].src==current.childNodes[0].src)
			return true;
	}
	return false;
}

function cut(index1, index2, index3){
		document.getElementById(numbers[index1]).style.background="blue";
		document.getElementById(numbers[index2]).style.background="blue";
		document.getElementById(numbers[index3]).style.background="blue";
		alert("Player "+(3-player_number)+" wins!");
		temp.removeEventListener("click",getclicked);
		over=1;
		restart();
}

function restart(){
	var re=document.createElement("button");
	var anchor=document.createElement("a");
	anchor.href="index.html";
	anchor.innerHTML="Restart";
	re.appendChild(anchor);
	var bo= document.getElementById("wrap");
	bo.appendChild(re);
}