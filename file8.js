let height = 70; 
let weight = 160; 

let heightCm = height * 2.54;
let heightM = heightCm / 100;
let weightKg = weight / 2.2046;

let bmi = weightKg / (heightM ** 2);

console.log(`Рост: ${heightInches} дюймов = ${heightCm} см`);
console.log(`Вес: ${weightPounds} фунтов = ${weightKg} кг`);
console.log(`Индекс массы тела: ${bmi.toFixed(2)}`);