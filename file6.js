let a = 10;
let b = 5;
let c = 3;

b += a;
a /= c;
c %= b;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);