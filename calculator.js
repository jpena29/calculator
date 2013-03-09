var oper = "";
var num = "";

function displaynum(n){
  document.form.t1.value = document.form.t1.value + n;
}

function operator(op){
	oper = op;
	num = document.form.t1.value;
	document.form.t1.value = "";
}

//Code for equals starts here
function equals(){
	doesthejob(eval(num), eval(document.form.t1.value), oper);
}

//a sub-function of equals
function doesthejob(n1, n2, op){
	if(op == "+"){
		document.form.t1.value = n1 + n2;
	}
	else if(op == "-"){
		document.form.t1.value = n1 - n2;
	}
	else if(op == "*"){
		document.form.t1.value = n1 * n2;
	}
	else if(op == "/"){
		document.form.t1.value = n1 / n2;
	}
	else if(op == "nCr"){
		document.form.t1.value = fact2(n1)/fact2(n1-n2)/fact2(n2);
	}
	else if(op == "nPr"){
		document.form.t1.value = fact2(n1)/fact2(n1-n2);
	}
}	//Code for equals ends here

function fact2(n){	//fact2() for nCr and nPr
	if(errorchecking(n) == false){
		return;
	}
	
	var answer = 1;
	for(i = n; i >= 2; i--){
		answer = answer*i;
	}
	return answer;
}

function fact(){
	n = Number(document.form.t1.value)
	if(errorchecking(n) == false){
		return;
	}
	
	var answer = 1;
	for(i = n;i >= 2; i--){
		answer = answer*i;
	}
	document.form.t1.value = answer;
}

function errorchecking(n){
	if(n < 0){
		alert("Number shouldn't be negative");
		return false;
	}
}

function prime(n){
	if(errorchecking(n) == false){
		return;
	}
	
	var b = true;
	for(i = 2; i <= n/2; i++){
		if(n % i == 0){
			document.form.t1.value = "Not prime; it's first divided by " + i;
			b = false;
			break;
		}
	}
	if(b){
		document.form.t1.value = "Is Prime";
	}
}

function negation(){
	document.form.t1.value = document.form1.t1.value * -1;
}

function reset(){
	document.form.t1.value = "";
	num = "";
}
	
