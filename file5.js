let a = prompt("Введите длину первого катета:");
let b = prompt("Введите длину второго катета:");

a = Number(a);
b = Number(b);

let c = Math.sqrt(a**2 + b**2);
alert("Длина гипотенузы: " + c);