// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
let count = 0;
let timer = 0;

function printName() {
  // document.write('Srini')
  console.count();
  console.log('Srini', count);
  count++;
}
console.clear();

console.log('Started');
// printName();

function printDelayBy5second(callBack) {
  setTimeout(callBack, 5000);
}

// printDelayBy5second(printName);

function printNameAtEvery5SecondsIntervale(callBack) {
  timer = setInterval(callBack, 5000);
}

// printNameAtEvery5SecondsIntervale(printName);

// setTimeout(() => {
//   clearInterval(timer);
// }, 30 * 1000);

// number

console.log('Exponential');
var data = 1;
var result = data.toExponential(2);
console.log(result);

console.log('Fixed');
var data2 = 1;
var result2 = data2.toFixed(2);
console.log(result2);

console.log('Precision');
var data3 = 2.555;
var result3 = data3.toPrecision(2);
console.log(result3);

console.log('ValueOf');
var data4 = new Number(2.555);
var result4 = data4.valueOf();
console.log(result4);

// Math
console.log('Math.sin ::', Math.sin(20));
console.log('Math.cos ::', Math.cos(20));
console.log('Math.tan ::', Math.tan(20));

console.log('Math.ceil ::', Math.ceil(2.2));
console.log('Math.floor ::', Math.floor(2.2));
console.log('Math.round ::', Math.round(2.2));

console.log('Math.max ::', Math.max(2, 3, 4, 5));
console.log('Math.min ::', Math.min(2, 3, 4, 5));

// Date
