//calculator.js

//global variables
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;
var number6 = 0;
var number7 = 0;
var number8 = 0;
var number9 = 0;
var number0 = 0;


var num1Clicked = 0;
var num2Clicked = 0;
var num3Clicked = 0;
var num4Clicked = 0;
var num5Clicked = 0;
var num6Clicked = 0;
var num7Clicked = 0;
var num8Clicked = 0;
var num9Clicked = 0;
var num0Clicked = 0;

var plus = 0;
var minus = 0;
var mulitply = 0;
var divide = 0;

var numSelectedFirst = 10; // using 10, as this number can't be selected on calculator.

function click1(){
	document.calculator_form.calc_fld.value=1;
	num1Clicked = 1;
	number1=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number1;
	}
}

function click2(){
	document.calculator_form.calc_fld.value=2;
	num2Clicked = 1;
	number2=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number2;
	}	
}

function click3(){
	document.calculator_form.calc_fld.value=3;
	num3Clicked = 1;
	number3=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number3;
	}
}

function click4(){
	document.calculator_form.calc_fld.value=4;
	num4Clicked = 1;
	number4=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number4;
	}
}

function click5(){
	document.calculator_form.calc_fld.value=5;
	num5Clicked = 1;
	number5=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number5;
	}
}

function click6(){
	document.calculator_form.calc_fld.value=6;
	num6Clicked = 1;
	number6=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number6;
	}
}

function click7(){
	document.calculator_form.calc_fld.value=7;
	num7Clicked = 1;
	number7=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number7;
	}
}

function click8(){
	document.calculator_form.calc_fld.value=8;
	num8Clicked = 1;
	number8=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number8;
	}
}

function click9(){
	document.calculator_form.calc_fld.value=9;
	num9Clicked = 1;
	number9=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number9;
	}
}

function click0(){
	document.calculator_form.calc_fld.value=0;
	num0Clicked = 1;
	number0=parseInt(document.calculator_form.calc_fld.value);
	if(numSelectedFirst === 10){ // this is the first number selected
		numSelectedFirst = number0;
	}
}


function clickplus(){
	plus = 1;
	minus = 0;
	mulitply = 0;
	divide = 0;
}

function clickminus(){
	plus = 0;
	minus = 1;
	mulitply = 0;
	divide = 0;
}

function clickmulitply(){
	plus = 0;
	minus = 0;
	mulitply = 1;
	divide = 0;
}

function clickdivide(){
	plus = 0;
	minus = 0;
	mulitply = 0;
	divide = 1;
}


function clickequals(){
	// 1 & 2 selected for arithmetic
	if((num1Clicked === 1)&&(num2Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number2);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number2);
			}else{
				document.calculator_form.calc_fld.value = (number2 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number2);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number2);
			}else{
				document.calculator_form.calc_fld.value = (number2 / number1);
			}
		}
		
			}
			
			
			
		/* need to include functionality for mulitply and divide
		   Note: Multiply will be similar to plus conditional statement 
		         and divide similar to minus conditional statement */
	

	// 1 & 3 selected for arithmetic
	if((num1Clicked === 1)&&(num3Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number3);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number3);
			}else{
				document.calculator_form.calc_fld.value = (number3 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number3);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number3);
			}else{
				document.calculator_form.calc_fld.value = (number3 / number1);
			}
		}
		
			}
		// 1 & 4 selected for arithmetic
	if((num1Clicked === 1)&&(num4Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number4);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number4);
			}else{
				document.calculator_form.calc_fld.value = (number4 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number4);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number4);
			}else{
				document.calculator_form.calc_fld.value = (number4 / number1);
			}
		}
		
			}
			// 1 & 5 selected for arithmetic
	if((num1Clicked === 1)&&(num5Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number5);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number5);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 / number1);
			}
		}
		
			}
		// 1 & 6 selected for arithmetic
	if((num1Clicked === 1)&&(num6Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number6);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number6);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 / number1);
			}
		}
		
			}
			// 1 & 7 selected for arithmetic
	if((num1Clicked === 1)&&(num7Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number7);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number7);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 / number1);
			}
		}
		
			}
			// 1 & 8 selected for arithmetic
	if((num1Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number1);
			}
		}
		
			}
			// 1 & 9 selected for arithmetic
	if((num1Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number1);
			}
		}
		
			}
			// 1 & 0 selected for arithmetic
	if((num1Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number1 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number1);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number1 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number1){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number1 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number / number1);
			}
		}
		
			}
		/* need to include functionality for mulitply and divide
		   Note: Multiply will be similar to plus conditional statement 
		         and divide similar to minus conditional statement */
	

	// 2 & 3 selected for arithmetic
	if((num2Clicked === 1)&&(num3Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number3);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number3);
			}else{
				document.calculator_form.calc_fld.value = (number3 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number3);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number3);
			}else{
				document.calculator_form.calc_fld.value = (number3 / number2);
			}
		}
		
			}
			// 2 & 4 selected for arithmetic
	if((num2Clicked === 1)&&(num4Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number4);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number4);
			}else{
				document.calculator_form.calc_fld.value = (number4 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number4);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number4);
			}else{
				document.calculator_form.calc_fld.value = (number4 / number2);
			}
		}
		
			}
			// 2 & 5 selected for arithmetic
	if((num2Clicked === 1)&&(num5Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number5);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number5);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 / number2);
			}
		}
		
			}
					// 2 & 6 selected for arithmetic
	if((num2Clicked === 1)&&(num6Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number6);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number6);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 / number2);
			}
		}
		
			}
					// 2 & 7 selected for arithmetic
	if((num2Clicked === 1)&&(num6Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number6);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number6);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 / number2);
			}
		}
		
			}
					// 2 & 7 selected for arithmetic
	if((num2Clicked === 1)&&(num7Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number7);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number7);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 / number2);
			}
		}
		
			}
					// 2 & 8 selected for arithmetic
	if((num2Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number2);
			}
		}
		
			}
					// 2 & 9 selected for arithmetic
	if((num2Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number2);
			}
		}
		
			}
					// 2 & 0 selected for arithmetic
	if((num2Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number2 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number2){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number2 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number2);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number2 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number2){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number2 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number2);
			}
		}
		
			}
			
					// 3 & 4 selected for arithmetic
	if((num3Clicked === 1)&&(num4Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number4);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number4);
			}else{
				document.calculator_form.calc_fld.value = (number4 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number4);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number4);
			}else{
				document.calculator_form.calc_fld.value = (number4 / number3);
			}
		}
		
			}
				// 3 & 5 selected for arithmetic
	if((num3Clicked === 1)&&(num5Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number5);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number5);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 / number3);
			}
		}
		
			}
			// 3 & 6 selected for arithmetic
	if((num3Clicked === 1)&&(num6Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number6);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number6);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 / number3);
			}
		}
		
			}
				// 3 & 7 selected for arithmetic
	if((num3Clicked === 1)&&(num7Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number7);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number7);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 / number3);
			}
		}
		
			}
				// 3 & 8 selected for arithmetic
	if((num3Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number3);
			}
		}
		
			}
			// 3 & 9 selected for arithmetic
	if((num3Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number3);
			}
		}
		
			}
				// 3 & 0 selected for arithmetic
	if((num3Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number3 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number3){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number3 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number3);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number3 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number3){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number3 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number3);
			}
		}
		
			}
		
			// 4 & 5 selected for arithmetic
	if((num4Clicked === 1)&&(num5Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number4 + number5);
		}
		if (minus === 1){
			if(numSelectedFirst === number4){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number4 - number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 - number4);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number4 * number5);
		}
		if (divide === 1){
			if(numSelectedFirst === number4){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number4 / number5);
			}else{
				document.calculator_form.calc_fld.value = (number5 / number4);
			}
		}
		
			}
				// 4 & 6 selected for arithmetic
	if((num4Clicked === 1)&&(num6Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number4 + number6);
		}
		if (minus === 1){
			if(numSelectedFirst === number4){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number4 - number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 - number4);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number4 * number6);
		}
		if (divide === 1){
			if(numSelectedFirst === number4){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number4 / number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 / number4);
			}
		}
		
			}
				// 4 & 7 selected for arithmetic
	if((num4Clicked === 1)&&(num7Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number4 + number7);
		}
		if (minus === 1){
			if(numSelectedFirst === number4){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number4 - number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 - number4);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number4 * number7);
		}
		if (divide === 1){
			if(numSelectedFirst === number4){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number4 / number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 / number4);
			}
		}
		
			}
				// 4 & 8 selected for arithmetic
	if((num4Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number4 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number4){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number4 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number4);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number4 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number4){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number4 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number4);
			}
		}
		
			}
			// 4 & 9 selected for arithmetic
	if((num4Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number4 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number4){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number4 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number4);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number4 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number4){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number4 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number4);
			}
		}
		
			}
				// 4 & 0 selected for arithmetic
	if((num4Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number4 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number4){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number4 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number4);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number4 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number4){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number4 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number4);
			}
		}
		
			}
		
			// 5 & 6 selected for arithmetic
	if((num5Clicked === 1)&&(num6Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number5 + number6);
		}
		if (minus === 1){
			if(numSelectedFirst === number5){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number5 - number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 - number5);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number5 * number6);
		}
		if (divide === 1){
			if(numSelectedFirst === number5){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number5 / number6);
			}else{
				document.calculator_form.calc_fld.value = (number6 / number5);
			}
		}
		
			}
			// 5 & 7 selected for arithmetic
	if((num5Clicked === 1)&&(num7Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number5 + number7);
		}
		if (minus === 1){
			if(numSelectedFirst === number5){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number5 - number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 - number5);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number5 * number7);
		}
		if (divide === 1){
			if(numSelectedFirst === number5){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number5 / number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 / number5);
			}
		}
		
			}
			// 5 & 8 selected for arithmetic
	if((num5Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number5 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number5){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number5 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number5);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number5 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number5){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number5 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number5);
			}
		}
		
			}
			// 5 & 9 selected for arithmetic
	if((num5Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number5 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number5){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number5 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number5);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number5 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number5){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number5 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number5);
			}
		}
		
			}
			// 5 & 0 selected for arithmetic
	if((num5Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number5 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number5){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number5 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number5);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number5 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number5){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number5 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number5);
			}
		}
		
			}
		
		// 6 & 7 selected for arithmetic
	if((num6Clicked === 1)&&(num7Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number6 + number7);
		}
		if (minus === 1){
			if(numSelectedFirst === number6){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number6 - number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 - number6);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number6 * number7);
		}
		if (divide === 1){
			if(numSelectedFirst === number6){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number6 / number7);
			}else{
				document.calculator_form.calc_fld.value = (number7 / number6);
			}
		}
		
			}
			// 6 & 8 selected for arithmetic
	if((num6Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number6 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number6){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number6 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number6);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number6 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number6){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number6 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number6);
			}
		}
		
			}
		// 6 & 9 selected for arithmetic
	if((num6Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number6 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number6){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number6 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number6);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number6 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number6){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number6 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number6);
			}
		}
		
			}
			// 6 & 0 selected for arithmetic
	if((num6Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number6 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number6){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number6 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number6);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number6 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number6){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number6 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number6);
			}
		}
		
			}
			
			// 7 & 8 selected for arithmetic
	if((num7Clicked === 1)&&(num8Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number7 + number8);
		}
		if (minus === 1){
			if(numSelectedFirst === number7){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number7 - number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 - number7);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number7 * number8);
		}
		if (divide === 1){
			if(numSelectedFirst === number7){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number7 / number8);
			}else{
				document.calculator_form.calc_fld.value = (number8 / number7);
			}
		}
		
			}
			// 7 & 9 selected for arithmetic
	if((num7Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number7 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number7){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number7 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number7);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number7 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number7){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number7 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number7);
			}
		}
		
			}
			// 7 & 0 selected for arithmetic
	if((num7Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number7 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number7){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number7 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number7);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number7 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number7){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number7 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number7);
			}
		}
		
			}
			
			// 8 & 9 selected for arithmetic
	if((num8Clicked === 1)&&(num9Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number8 + number9);
		}
		if (minus === 1){
			if(numSelectedFirst === number8){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number8 - number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number8);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number8 * number9);
		}
		if (divide === 1){
			if(numSelectedFirst === number8){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number8 / number9);
			}else{
				document.calculator_form.calc_fld.value = (number9 / number8);
			}
		}
		
			}
				// 8 & 0 selected for arithmetic
	if((num8Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number8 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number8){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number8 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 - number8);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number8 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number8){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number8 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number8);
			}
		}
		
			}
			
				// 9 & 0 selected for arithmetic
	if((num9Clicked === 1)&&(num0Clicked === 1)){
		if (plus === 1){
			document.calculator_form.calc_fld.value = (number9 + number0);
		}
		if (minus === 1){
			if(numSelectedFirst === number9){ //implies number 2 was selected first
				document.calculator_form.calc_fld.value = (number9 - number0);
			}else{
				document.calculator_form.calc_fld.value = (number9 - number0);
			}
		}
		if (mulitply === 1){
			document.calculator_form.calc_fld.value = (number9 * number0);
		}
		if (divide === 1){
			if(numSelectedFirst === number9){ //implies number 1 was selected first
				document.calculator_form.calc_fld.value = (number9 / number0);
			}else{
				document.calculator_form.calc_fld.value = (number0 / number9);
			}
		}
		
			}
			
		/* need to include functionality for mulitply and divide
		   Note: Multiply will be similar to plus conditional statement 
		         and divide similar to minus conditional statement */
	
	
	
	/*Conditional statements implemented for following:
	1 and 2,
	1 and 3,
	2 and 3,
	Now just implement the conditional statements for the other 42 combinations.
	*/
	
}

function clickclear(){
	document.calculator_form.calc_fld.value = "";
	plus = 0; 
	minus = 0;
	number1 = 0; 
	number2 = 0;
	number3 = 0;
	number4 = 0;
	number5 = 0; 
	number6 = 0;
	number7 = 0;
	number8 = 0;
	number9 = 0; 
	number0 = 0;	
	num1Clicked = 0;
	num2Clicked = 0;
	num3Clicked = 0;
	num4Clicked = 0;
	num5Clicked = 0;
	num6Clicked = 0;
	num7Clicked = 0;
	num8Clicked = 0;
	num9Clicked = 0;
	num0Clicked = 0;
	numSelectedFirst = 10;
}