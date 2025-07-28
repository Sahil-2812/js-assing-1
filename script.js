document.getElementById("alertName").onclick = function() {
    alert("Muhammad Sahil");
    let statment = 'alert("Muhammad Sahil")';
    document.getElementById("statment").innerHTML = statment;
};

document.getElementById("alertNumber").onclick = function() {
    alert("03467635173");
    let statment = 'alert("03467635173")';
    document.getElementById("statment").innerHTML = statment;
};

//clear the statment
document.getElementById("clearStatment").onclick = function() {
    document.getElementById("statment").innerHTML = ' '; 
};



document.getElementById("variableName").onclick = function(){
    document.getElementById("statment").innerHTML = "<li>var</li> <li>let</li> <li>const</li>"
};
document.getElementById("showCamelCaseExample").onclick = function(){
    document.getElementById("outputStatment").innerHTML = "<h3>Here are some examples of camel case:</h3> <h5>youTube, powerPoint, iPhone, iPod,</h5>"
};
document.getElementById("sum2Number").onclick = function() {
    document.getElementById("statment").innerHTML = "2+2=" 
    document.getElementById("outputStatment").innerHTML = "4" 

};
//clear the output
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("outputStatment").innerHTML = ' '; 
};

document.getElementById("subtract2Numbers").onclick = function() {
    document.getElementById("statment").innerHTML = "5-3=" 
    document.getElementById("outputStatment").innerHTML = "2" 
};

document.getElementById("multiply2Numbers").onclick = function() {
    document.getElementById("statment").innerHTML = "5*5=" 
    document.getElementById("outputStatment").innerHTML = "25" 
};

document.getElementById("divide2Numbers").onclick = function() {
    document.getElementById("statment").innerHTML = "5/5=" 
    document.getElementById("outputStatment").innerHTML = "1" 
};

document.getElementById("calculateSomeNumbers").onclick = function() {
    document.getElementById("statment").innerHTML = "36/6*3+2**4-(3+5)=" 
    document.getElementById("outputStatment").innerHTML = "26" 
};