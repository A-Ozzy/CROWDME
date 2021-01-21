function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;


let burger = document.querySelector('.burger');
let headermenu = document.querySelector('.headermenu');
let body = document.getElementsByTagName('body');


burger.onclick =  burgerSwitch;

function burgerSwitch(){
	body[0].classList.toggle('lock');
	burger.classList.toggle('active');
	headermenu.classList.toggle('active');

}
// ============================================ TABS ===========================================
let tabs = document.querySelectorAll('.tabs__block');
let selected;

for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', findRelative);
};

tabs.onclick = findRelative;

function findRelative(event){
	let td = event.target;
	let tdSibling = event.target.parentNode.querySelector('.tabs__number');
	let tdClosest;
	
	for (var i = 0; i < td.childNodes.length; i++) {
		tdClosest = td.childNodes[1];
   }
   if (tdSibling.className == 'tabs__number'){
   	changeSlider(tdSibling);
   }  
   if (tdClosest.classList == 'tabs__number'){
   	changeSlider(tdClosest);
   }

}
function changeSlider(event){
	let a = document.querySelectorAll('.tabs__item .tabs__number-active').forEach(n => n.classList.remove('tabs__number-active'));
	event.classList.add("tabs__number-active");
	let idFromEvent = event.getAttribute("id");
	document.querySelector('.tabsinput__slider').value = idFromEvent;
	let contentinfo = document.querySelectorAll('.tabsContent');
	
	for (let i = 0; i < contentinfo.length; i++) {
		if (idFromEvent == 1) {
			let b = document.querySelectorAll('.tabsContent').forEach(n => n.classList.remove('active'));
			contentinfo[0].classList.add('active');
		}
		else if (idFromEvent == 2) {
			
			let b = document.querySelectorAll('.tabsContent').forEach(n => n.classList.remove('active'));
			contentinfo[1].classList.add('active');
		}
		else if (idFromEvent == 3) {
			let b = document.querySelectorAll('.tabsContent').forEach(n => n.classList.remove('active'));
			contentinfo[2].classList.add('active');
		}
	}
}
// ======================================= input range ====================
const myRange = document.querySelectorAll('.projectcard__slider');
// console.log(myRange);

for (let i = 0; i < myRange.length; i++) {
	myRange[i].addEventListener("input", SliderEvent);
	// console.log(myRange[i]);
}

function SliderEvent(event){
	let range = event.target;
  	let x = range.value;
	let color = 'linear-gradient(90deg, rgba(173, 209, 54, 1)' + x + '%, rgba(227, 227, 227, 1)' + x + '%)';
	range.style.background = color;
}
