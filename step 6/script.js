document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#sel").addEventListener('change', save);
    document.querySelector("#result").addEventListener('click', calc);
    document.querySelector("#sayhello").addEventListener('click', () => alert("МЯУ!"));
    document.querySelector("#btnChange").addEventListener('click', change);
    document.querySelector("#btnChange").addEventListener('mouseover', (e) => e.target.style.color = "yellow");
    document.querySelector("#btnChange").addEventListener('mouseout', (e) => e.target.style.color = "");
});

// Calculator

const input = document.querySelector("#calc");
let firstArg = 0;
let signSaved = '';

function save() {
    let sign = this.value;
    if (sign) {
        firstArg = +input.value;
        input.value = '';
        signSaved = this.value;
    }
}

function calc() {
    let secondArg = +input.value;
    let result = 0;

    if (signSaved === '') {
        alert('Выберите арифметическую операцию!');
    } else {
        switch (signSaved) {
            case '+':
                result = firstArg + secondArg;
                alert(result);
            break;
            case '-':
                result = firstArg - secondArg;
                alert(result);
            break;
            case 'x':
                result = firstArg * secondArg;
                alert(result);
            break;
            case '/':
                result = firstArg / secondArg;
                alert(result);
            break;
        }
    }

    input.value = '';
    document.querySelector("#sel").value = '';
}

// Work with string

// Конкатенация

const descr = "Ваша киска" + " купила бы 10 пачек" + " whiskas!";

// console.log(descr);

// Экранирование

// console.log(descr.match(/\d/g));
// console.log(descr.match(/\w/g));
// console.log(descr.match(/\!/g));

// Шаблонизация

const arrCatFood = ['whiskas', 'kitekat', 'sheba'];

// console.log(`Ваша киска купила бы ${arrCatFood[0]}`);
// console.log(`Ваша киска купила бы ${arrCatFood[1]} и ${arrCatFood[2]}`);

// Логические операции 

let hourCat = 9;

if (hourCat < 12 || hourCat > 3 ) {
    // console.log('Борис спит!');
}

// try / catch

try {
    // console.log('Начало');
    // console.log('Шаг 2');
    // console.log('Конец');
    // afag
} catch(e) {
    // console.log('Ошибка! ' + e.name + e.message);
}

// Цикл
function change() {
    const btns = document.querySelectorAll('.btn_cat');

    for (let btn of btns) {
        // console.log(btn);
        btn.classList.toggle("green");
    }
}

//focus input

const email = document.querySelector('#email'),
      error = document.querySelector('#error');

email.onblur = function() {
    if (!email.value.includes('@')) {
      email.focus();
      email.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильный email.';
    }
  };
  
  email.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };

// ===================== Step 5

// Arrow func

let arrFunc = (a, b, c) => a + b - c;

// console.log(arrFunc(10, 10, 5));

// default parametr 

let defFunc = (a, b, c = 5) => a + b - c;

// console.log(defFunc(20, 20));

// Spread/Rest operator

const cats = ['Boris', 'Murzik', 'Barsik'],
      dogs = ['Bobik', 'Sharik'],
      animals = [...cats, ...dogs];

// console.log(animals);

const nums = [1, 5, 4];

function arrRest(a, b, c) {
    return a + b + c;
}

// console.log(arrRest(...nums));

// class and super

class Animal {
    constructor(paws, tail, fur) {
        this.paws = paws;
        this.tail = tail;
        this.fur = fur;
    }
    say() {
        // console.log(`Sorry, animals can't speak. But I can say I have ${this.paws} paws.`);
    }
}

class Cat extends Animal {
    constructor(paws, tail, fur) {
        super(paws, tail, fur);
        this.name = 'Boris';
    }
}

const Boris = new Cat(4, true, true);

Boris.say();
// console.log(Boris);

//yield

function* gen(i) {
    while (i < 2) {
      yield i;
      i++;
    }
}

const iter = gen(1);

// console.log(iter.next().value);
// console.log(iter.next().value);

// Деструктуризация объекта

const objDest = {
    a: 1,
    b: 2,
    c: 3
};

const {a, b, c} = objDest;

// console.log(a, b, c);

// ================= Step 6

// url navigator history

const url = window.location.href;

console.log("Текущий путь - " + url);

function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

debugger;  // <-- здесь выполнение прерывается

console.log("Внимание! Информация из объекта navigator может вводить в заблуждение");
console.log("cookiesEnabled установлено в " + navigator.cookieEnabled);
console.log("navigator.appName - " + navigator.appName);
console.log("navigator.appCodeName - " + navigator.appCodeName);
console.log("navigator.product - " + navigator.product);
console.log("Версия браузера - " + navigator.appVersion);
console.log("Пользовательский агент браузера - " + navigator.userAgent);
console.log("Операционная система - " + navigator.platform);
console.log("Язык браузера - " + navigator.language);
console.log("Браузер подключен к сети Интернет? - " + navigator.onLine);
console.log("Java влючен? - " + navigator.javaEnabled());