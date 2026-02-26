for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}
const frutas = ["maçã", "banana", "laranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;   // soma = soma + i
}
console.log(soma);  // 5050