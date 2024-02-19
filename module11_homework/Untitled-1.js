//Задание 2.

function isPrime(num) {
    let _true = 'число простое', _false = 'ответ неверный';
    if (num <= 1 && num > 1000) return _false;
    if (num == 2) return _true;
    for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return _false;
    }
    }
    return _true;
    }
console.log(isPrime(1001));
console.log(isPrime(53));

//Задание 3.

function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );

//Задание 4.

function intUser(a,b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

intUser(5, 10);

//Задание 5.
let x = prompt('введи число', '')
let n = prompt('введи степень', '')

if (n < 0) {
    // сообщение вывели, но выполнять всё равно продолжили
    alert('степень должна быть больше нуля')
}

function pow(x, n) 