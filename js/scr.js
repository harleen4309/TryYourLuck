window.addEventListener("load", loadWindow, false);
var random =Math.floor(Math.random()*4) + 1;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var out = document.getElementById('output');
var timesUp = document.getElementById('timesUp');
var pickOne = document.getElementById('pickOne');
var div = document.getElementsByTagName("div");
 function loadWindow(e) {

  console.log("Click one of the boxes");
	one.addEventListener('click',eventHandler, false);
	two.addEventListener('click',eventHandler, false);
	three.addEventListener('click',eventHandler, false);
	four.addEventListener('click',eventHandler, false);

}
function eventHandler(e){
	var boom;
	if (e.target.id == "one")
		boom = 1;
	else if(e.target.id == "two")
		boom = 2;
	else if(e.target.id == "three")
		boom = 3;
	else
		boom = 4;
	if(random==boom){
		e.target.setAttribute("class","boom");
		out.innerHTML ="BOOM";	
	}
	else{
		e.target.setAttribute("class","safe");
		out.innerHTML ="SAFE";
		}
	    timesUp.innerHTML="";
		pickOne.innerHTML="";
	
	removeFunc();
	window.setTimeout(time, 5000);
  }
  

  function time(){
  	removeFunc();
  	timesUp.style.color ="white";
  	out.style.color="white";
  	timesUp.innerHTML="Time's Up!!";
	var body =document.getElementsByTagName("body");
	for(var sub =0;sub<body.length;sub++){
		body[sub].setAttribute("id","end");
	}
	

 }
 function removeFunc(){
 	one.removeEventListener('click',eventHandler, false);
	two.removeEventListener('click',eventHandler, false);
	three.removeEventListener('click',eventHandler, false);
	four.removeEventListener('click',eventHandler, false);


 }



	
 



