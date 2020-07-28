var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var aHead = document.getElementById("a");
var bHead = document.getElementById("b");
var cHead = document.getElementById("c");
var interval;

function timer(){
    msec ++;
    if(msec < 10){msecHeading.innerHTML = "0" + msec;}
    else{msecHeading.innerHTML = msec;}
    if(msec == 100){
        sec ++
        if(sec < 10){secHeading.innerHTML = "0" + sec;}
        else{secHeading.innerHTML = sec;}
        msec = 0;
    } else if(sec == 59){
        min ++
        if(min < 10){minHeading.innerHTML = "0" + min;}
        else{minHeading.innerHTML = min;}
        sec = 0
    }
}

function start(){
    interval = setInterval(timer, 10);
    document.getElementById("start").disabled = true; 
}

function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false; 
}

function re(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = '0'+min;
    secHeading.innerHTML = '0'+sec;
    msecHeading.innerHTML = '0'+msec;
    stop();
    document.getElementById("start").disabled = false; 
    document.getElementById("readRows").innerHTML = ''; 
   
}

function read(){
    var a = minHeading.innerHTML;
    var b = secHeading.innerHTML;
    var c = msecHeading.innerHTML;
    

    aH = `<div class='readRowsChild dig text-center '><span>Interval: </span><h2>${a}</h2>`;
    bH = `<h2>${b}</h2>`;
    cH = `<h2>${c}</h2></div>`;

    exVal = document.getElementById('readRows').innerHTML;
    document.getElementById('readRows').innerHTML = aH+bH+cH + exVal ;
}
