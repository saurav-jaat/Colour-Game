var numsquare=6;
var colors=generateRandomColors(numsquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickcolor();
var colorDisplay=document.querySelector("#colorDisplay");
var msgdisplay=document.querySelector("#info");
var changeheadingcolor=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colorDisplay.textContent=pickedColor;

easybtn.addEventListener("click",function () {
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquare=3;
	colors=generateRandomColors(numsquare);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else squares[i].style.display="none";
	}
});
hardbtn.addEventListener("click",function () {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquare=6;
	colors=generateRandomColors(numsquare);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		
		squares[i].style.backgroundColor=colors[i];
		
		squares[i].style.display="block";
	}
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var ClickedColor=this.style.backgroundColor;
		
		if(ClickedColor===pickedColor){
			msgdisplay.textContent="Correct";
			changecolor(ClickedColor);
			changeheadingcolor.style.backgroundColor=pickedColor;
			resetbutton.textContent="Play Again?";



		}
		else{
			this.style.backgroundColor="#232323";
		msgdisplay.textContent="Try again!"
		} 
	});
}


resetbutton.addEventListener("click",function() {
	// body...
	colors=generateRandomColors(numsquare);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New colors";
	msgdisplay.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	changeheadingcolor.style.backgroundColor="steelblue";

});

function changecolor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return  colors[random];
}
function generateRandomColors(num) {
	var arr=[];	
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}

	return arr;
}
function randomcolor() {
	// body...
	var r=Math.floor(Math.random() *256);
	var g=Math.floor(Math.random() *256);
	var b=Math.floor(Math.random() *256);
	
	 return "rgb(" + r +", "+ g +", "+ b +")"; 
}