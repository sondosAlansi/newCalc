"use strict"

let keepHistory=[];


function calc(num){
	
if(document.querySelector('input').value=='0'){
	
	document.querySelector('input').value="";
}

	
	
	document.querySelector('input').value += num;
	
	
	
}

function equal(){
	
	
	
	
	if(document.getElementById('history').innerHTML=="There is no history yet   "){
		document.getElementById('history').innerHTML="";
	}
	
	keepHistory=document.querySelector('input').value+'='+ eval(document.querySelector('input').value)+"</br> ";
	document.getElementById('history').innerHTML+=keepHistory;
	
	
	
	if(document.querySelector('input').value.indexOf('^')>-1){
		
		document.querySelector('input').value=Math.pow(document.querySelector('input').value.substring(0,document.querySelector('input').value.indexOf('^')),
		document.querySelector('input').value.substring(document.querySelector('input').value.indexOf('^')+1 )
		);
	}
	
	document.querySelector('input').value=eval(document.querySelector('input').value);
	
	
}
function ExpMath(){
	
	document.querySelector('input').value=Math.exp(document.querySelector('input').value);
	
	
}		

function cosMath() {
	document.querySelector('input').value= Math.cos(document.querySelector('input').value);
	
	
	keepHistory='cos('+document.querySelector('input').value+')='+ Math.cos(document.querySelector('input').value);
	document.getElementById('history').innerHTML+=keepHistory;
}
function sinMath() {
	
	
	document.querySelector('input').value= Math.sin(document.querySelector('input').value);
	
	keepHistory='sin('+document.querySelector('input').value+')='+ Math.cos(document.querySelector('input').value);
	document.getElementById('history').innerHTML+=keepHistory;
}
function tanMath() {
	document.querySelector('input').value= Math.tan(document.querySelector('input').value);
	
	keepHistory='tan('+document.querySelector('input').value+')='+ Math.cos(document.querySelector('input').value);
	document.getElementById('history').innerHTML+=keepHistory;
}
function logMath() {
	document.querySelector('input').value= Math.log(document.querySelector('input').value);
	
	keepHistory='log('+document.querySelector('input').value+')='+ Math.cos(document.querySelector('input').value);
	document.getElementById('history').innerHTML+=keepHistory;
}
function sqrMath() {
	document.querySelector('input').value= Math.pow(document.querySelector('input').value,2);
}
function sqrtMath() {
	document.querySelector('input').value= Math.sqrt(document.querySelector('input').value);
}
/*function powMath() {
	
	//document.querySelector('input').value= Math.pow(document.querySelector('input').value,document.querySelector('input').value);
}*/
function TenMath() {
	document.querySelector('input').value= Math.pow(10,document.querySelector('input').value);
}
function plusMinus(){
	if(document.querySelector('input').value>0){
		document.querySelector('input').value=document.querySelector('input').value * -1;
		
	}
	else
	{
		document.querySelector('input').value=document.querySelector('input').value * -1;
		}
	
}


function fact()
{  var n=document.querySelector('input').value;
    var factorial=1;
    for (var i = 2; i <= n; i++)
        factorial = factorial * i;
     document.querySelector('input').value=factorial;
}
function deleteChar() {
	if(document.querySelector('input').value.length>1){
	document.querySelector('input').value = document.querySelector('input').value.substring(0, document.querySelector('input').value.length - 1);
	}
	else{
		
		document.querySelector('input').value=0;
	}
} 
function clearEntry() {
	
if(document.querySelector('input').value.includes("* + - / %")>-1){
	document.querySelector('input').value = document.querySelector('input').value.substring(0, document.querySelector('input').value.length - 1);
	}
	else{
	document.querySelector('input').value=document.querySelector('input').value;
	}
}  

	
function cclear(){
	
	document.querySelector('input').value =0;
	
}

			
		
			
function toggleShow() {
    var elem = document.getElementById('menu');
    if(elem.style.display == 'block'){
      elem.style.display="none";
    }
    else {
      elem.style.display = "block";
    }
  }
	


