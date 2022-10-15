'use strict';
// const obshaga = {
//     Vasia: 2000,
//     Roma : 4000,
//     Aladin: 0,
//     slavik :{
//         zsu : 4000,
//         main : 6000
//     }
// };


// for(let name in obshaga){
//     if(typeof(name) === 'object'){
//         for(let j in obshaga[name]){
//             console.log(`Ебать ${name} має на основі ${obshaga[name]} ммp`)
//         }
//     }else{
//         console.log(`Ебать ${name} має на основі ${obshaga[name]} ммp`);
//     }
// }







// const city = {
//   "Cherkassy": 100,
//   "Kyiv": 300,
//   "Odessa": 500,
//   "NewYork": 70,
//   "Washington" : 200
// };

// const number = {
//   1 : 750,
//   2 : 300,
//   3 : 70, 
//   4 : 85,
//   5: 200,
//   6 : 900
// };




// function writeCity(obj1, value){
//   number[obj1] = value;
//   for(let key in city){
//       for(let i in number){
//           if(city[key] === number[i]){
//               console.log(key);
//           }
//       }
//   }
// }


// writeCity(10, 100);


// // Созадть функцію 3 параметра 
// // першиї 2 параметра 2 обєкта
// // 3 параметр велью отвічає за те шоб у другий обєкт добавлять нове значення
// // Задание функции 
// // Сравнить значение обєктів якщо вони співпадають то виводить названіє города


// var myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;
    



// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для преноса строки используется \n в конце строки.
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами).
//  Если данные в объекте поменяются, то и сообщение тоже изменится.
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs : function() {
//         const {age} = personalPlanPeter;
//         const {languages} = personalPlanPeter.skills;
//         console.log(`Мне ${age} и я владею языками: ${languages[0].toUpperCase()} ${languages[1].toUpperCase()}`);
//     }
// };

// function showExperience(plan) {
//     const {exp} = personalPlanPeter.skills;
//     console.log(exp);
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str= "";
// const{programmingLangs} = personalPlanPeter.skills;
//     for(let key in programmingLangs){
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return str;
// }

// showProgrammingLangs(personalPlanPeter);
// personalPlanPeter.showAgeAndLangs();






// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) 
// Поэтому нам нужно привести строки в один формат для правильной работы.

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     if(family.length === 0){
//         str += 'Семья пуста';
//         return console.log(str); 
//     }else{
//         str += `Семья состоит из: ${family.join(" ")}`;
//     return console.log(str);
//     }
    
// }
// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `;
//     });

//     return console.log(str);
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for(let value of arr){
//         return (value.toLowerCase());
//     }
    
// }

// standardizeStrings(favoriteCities);


// ЗАДАЧА 1

const someString = 'This is some strange string';
const arr = [];

function reverse (str) {
    let st = '';
    if (typeof(str) !== 'string') {
      return 'Ошибка!';
    }else {
      for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
      }
    st = arr.join('');
  }
  return st;
}

console.log(reverse(someString));



// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     return str.split('').reverse().join('');

// }

// console.log(reverse(someString));





// Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, 
// второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков 
// сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
//  Если массив в первом аргументе пустой - 
// то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const bankomat = baseCurrencies.concat(additionalCurrencies);

// function availableCurr(arr, missingCurr) {
//   let str = '';
//     if(arr.length === 0){
//         str += 'Нет доступных валют';
//   }else{
//         str = `Доступные валюты:\n`;
//         arr.forEach(function(curr, i){
//             if(curr !== missingCurr){
//                 str += `${curr}\n`;
//             }
//         });
        
//     }
//     return str;
    
// }
// console.log(availableCurr(bankomat, "UAH"));


const polimorf = (str) => str === str.split('').reverse().join('');

console.log(polimorf('aviva'));


for (let i = 0; i < 5; i_++){
  3 + 4 = 8;
}
