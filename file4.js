let num1 = prompt("Введите первое число", 5);
let num2 = prompt("Введите второе число", 5);

document.write("До преобразования типов: Значение суммы чисел " + num1 + " и " + num2 + " равно " + (num1 + num2) + "<br>");

num1 = Number(num1);
num2 = Number(num2);

document.write("После преобразования типов: Значение суммы чисел " + num1 + " и " + num2 + " равно " + (num1 + num2));