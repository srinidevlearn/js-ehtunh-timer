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

var today = new Date(new Date().setTime(1634428800000));
console.log(today);

console.log('from epoch website', '1667019026'.length);
console.log('getTime', new Date().getTime());
console.log('getDate', new Date().getDate());
console.log('getMonth', new Date().getMonth()); // coz it always starts from 0 to 11
console.log('getFullYear', new Date().getFullYear()); // coz it always starts from 0 to 11
console.log('getHours', new Date().getHours()); // coz it always starts from 0 to 11
console.log('toLocaleDateString', new Date().toLocaleDateString());
console.log('toLocaleTimeString', new Date().toLocaleTimeString());

console.log('toIsoString', new Date().toISOString());

console.log('from epoch website', '1667019026'.length);
console.log('today getTime', today.getTime());
console.log('today getDate', today.getDate());
console.log('today getMonth', today.getMonth()); // coz it always starts from 0 to 11
console.log('today getFullYear', today.getFullYear()); // coz it always starts from 0 to 11
console.log('today getHours', today.getHours());
console.log('today toLocaleDateString', today.toLocaleDateString());
console.log('today toLocaleTimeString', today.toLocaleTimeString());

console.log('today toIsoString', today.toISOString());

console.log('getTime', (new Date().getTime() + '').length);
console.log('passdate and time', new Date('2022-03-20'));

var day1 = '2022-01-01';
var day2 = '2022-02-01';
var day3 = '2022-03-01';
var day4 = '2022-06-01';

let maxDate = Math.max(
  new Date(day1).getTime(),
  new Date(day2).getTime(),
  new Date(day3).getTime(),
  new Date(day4).getTime()
);

//TODO print minDate

console.log(new Date(maxDate).toLocaleDateString('')); // m/d/y

console.log(new Date(maxDate).toLocaleDateString('en-GB')); // d/m/y
