var n = 6;
var colors = generateRandomColors(n);
var colorPicked = colorPick();
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".modeBtn");
colorDisplay.textContent = colorPicked;

for(var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
	   modeButton[0].classList.remove("selected");
	   modeButton[1].classList.remove("selected");
       this.classList.add("selected");
	   this.textContent === "Easy" ? n = 3: n = 6;
	   reset();
	});
}

resetBtn.addEventListener("click", function(){
	reset();
});

function reset(){
	resetBtn.textContent = "New Colors";
	colors = generateRandomColors(n);
	colorPicked = colorPick();
	colorDisplay.textContent = colorPicked;
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}
	for( i = 0; i < colors.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
           var clickedColor = this.style.backgroundColor;
           if(clickedColor === colorPicked){
           	message.textContent = "Correct";
           	changeColors(clickedColor);
           	h1.style.backgroundColor = clickedColor;
           	resetBtn.textContent = "Play Again";
           }
           else{
           	message.textContent = "Try Again!!";
           	this.style.backgroundColor = "#232323" ;
           }
	    });
    }

function changeColors(color){
	for(i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function colorPick(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
       arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

