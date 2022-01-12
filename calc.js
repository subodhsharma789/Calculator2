var clear = document.getElementById("clear");
var backspace = document.getElementById("backspace");
var mod = document.getElementById("%");
var div = document.getElementById("/");
var sev = document.getElementById("7");
var eig = document.getElementById("8");
var nin = document.getElementById("9");
var mul = document.getElementById("*");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var min = document.getElementById("-");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var plus = document.getElementById("+");
var emp = document.getElementById("empty").value;
var zero = document.getElementById("0");
var equal = document.getElementById("=").value;
var output = document.getElementById("output-value");

function oneFn() {
    output.value += one.value;
}
function twoFn() {
    output.value += two.value;
}
function threeFn() {
    output.value += three.value;
}
function fourFn() {
    output.value += four.value;
}
function fiveFn() {
    output.value += five.value;
}
function sixFn() {
    output.value += six.value;
}
function sevFn() {
    output.value += sev.value;
}
function eightFn() {
    output.value += eig.value;
}
function nineFn() {
    output.value += nin.value;
}
function zeroFn() {
    output.value += zero.value;
}
function plusFn() {
    output.value += plus.value;
}
function minusFn() {
    output.value += min.value;
}
function devisionFn() {
    output.value += div.value;
}
function mulFn() {
    output.value += mul.value;
}
function modFn() {
    output.value += mod.value;
}
function clearFn() {
    output.value = clear.value;
    document.getElementById("history-value").innerText = " ";
}
function backFn() {
    output.value = output.value.slice(0, -1);
}
function equalFn() {
    document.getElementById("history-value").innerText = eval(output.value);
    output.value = " ";
}