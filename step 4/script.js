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

console.log(descr);

// Экранирование

console.log(descr.match(/\d/g));
console.log(descr.match(/\w/g));
console.log(descr.match(/\!/g));

// Шаблонизация

const arrCatFood = ['whiskas', 'kitekat', 'sheba'];

console.log(`Ваша киска купила бы ${arrCatFood[0]}`);
console.log(`Ваша киска купила бы ${arrCatFood[1]} и ${arrCatFood[2]}`);

// Логические операции 

let hourCat = 9;

if (hourCat < 12 || hourCat > 3 ) {
    console.log('Борис спит!');
}

// try / catch

try {
    console.log('Начало');
    console.log('Шаг 2');
    console.log('Конец');
    // afag
} catch(e) {
    console.log('Ошибка! ' + e.name + e.message);
}

// Цикл
function change() {
    const btns = document.querySelectorAll('.btn_cat');

    for (let btn of btns) {
        console.log(btn);
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