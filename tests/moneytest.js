import {formatCurrency} from '../scripts/utils/money.js';
console.log('Test Suite : formatCurrency');

console.log('1. Converts Cents into Dollars');
if(formatCurrency(2095) === '20.95' ){
  console.log('Passed'); 
}else{
  console.log('Failed');
}
console.log('2. Works With Zero');
if (formatCurrency(0) === '0.00') {
  console.log('Passed'); 
}else{
  console.log('Failed');
} 
console.log('3. Rounds up with the nearest Cent');
if (formatCurrency(2000.5) === '20.01') {
  console.log('Passed'); 
}else{
  console.log('Failed');
}