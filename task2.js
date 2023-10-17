const readlineSync = require('readline-sync'); 
const income = readlineSync.question('Сколько щас градусов Цельсия?:'); 
const incomeTaxCalculator = (C) => { 
return (C * 9/5) + 32; //15 процентов от суммы дохода 
} 
console.log (`${incomeTaxCalculator(income)} - температура по Фаренгейту`)