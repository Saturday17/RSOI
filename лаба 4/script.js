var textA = document.getElementById('textA');
var textB = document.getElementById('textB');
var textC = document.getElementById('textC');
var textD = document.getElementById('textD');
var text = document.getElementById('text');
var color = document.getElementById('color');
var size = document.getElementById('size');
var btn = document.getElementById('button');

textA.addEventListener('mouseover', function(){
	textA.style.backgroundColor='blue';
	text.value = textA.innerHTML;
})
textB.addEventListener('mouseover', function(){
	textB.style.backgroundColor='blue';
	text.value = textB.innerHTML;
})
textC.addEventListener('mouseover', function(){
	textC.style.backgroundColor='yellow';
	text.value = textC.innerHTML;
})
textD.addEventListener('mouseover', function(){
	textD.style.backgroundColor='blue';
	text.value = textD.innerHTML;
})

btn.addEventListener('click', function(){
	switch(color.value){
	case 'Красный':{
		textA.style.color='red';
		textB.style.color='red';
		textC.style.color='red';
		textD.style.color='red';
		break;
	}
	case 'Фиолетовый':{
		textA.style.color='purple';
		textB.style.color='purple';
		textC.style.color='purple';
		textD.style.color='purple';
		break;
	}
	case 'Оранжевый':{
		textA.style.color='orange';
		textB.style.color='orange';
		textC.style.color='orange';
		textD.style.color='orange';
		break;
	}
	case 'Зелёный':{
		textA.style.color='green';
		textB.style.color='green';
		textC.style.color='green';
		textD.style.color='green';
		break;
	}
	}
	switch(size.value){
		case 'Маленький':{
			textA.style.fontSize='small';
			textB.style.fontSize='small';
			textC.style.fontSize='small';
			textD.style.fontSize='small';
			break;
		}
		case 'Средний':{
			textA.style.fontSize='medium';
			textB.style.fontSize='medium';
			textC.style.fontSize='medium';
			textD.style.fontSize='medium';
			break;
		}
		case 'Большой':{
			textA.style.fontSize='large';
			textB.style.fontSize='large';
			textC.style.fontSize='large';
			textD.style.fontSize='large';
			break;
		}
	}
});