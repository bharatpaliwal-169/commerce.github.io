
var answer;
var amountAns;
var compoundAns;
var logAns;

function calculate(){
    
    let principal = document.getElementById("p").value;
    let rate = (document.getElementById("r").value)/100;
    let time = document.getElementById('t').value;
    
    answer = principal * rate * time;
    
    document.getElementById('respond').innerHTML = answer;
}

function calculateAmount(){
    let principal = document.getElementById("p1").value;
    let rate = (document.getElementById("r1").value)/100;
    let time = document.getElementById('t1').value;
    
    amountAns  =   principal * ( 1 + rate * time );
    
    document.getElementById('amount').innerHTML = amountAns;

}

function calculateCompound(){
    let principal = document.getElementById("p2").value;
    let rate = (document.getElementById("r2").value)/100;
    let n = document.getElementById('c2').value;
    let time = document.getElementById('t2').value;
    let timepp = n * time;
    let intrest = ((rate/n) + 1);
    let power = Math.pow(intrest,timepp);
    let total = principal * power
    
    compoundAns = total;
    document.getElementById('aa').innerHTML = compoundAns;

}

function calLog(){
    let value = document.getElementById("log").value;
    
    logAns  =   Math.log10(value);
    
    document.getElementById('loged').innerHTML = logAns;

}

