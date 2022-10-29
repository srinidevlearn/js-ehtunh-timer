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

printNameAtEvery5SecondsIntervale(printName);

setTimeout(() => {
  clearInterval(timer);
}, 30 * 1000);
