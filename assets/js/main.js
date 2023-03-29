"use strict";

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];

//Deyerin movcudluqunu yoxlamaq ucun check funksiyasi:
function isExist() {
    for (let itm of todo) {
        if (inp.value == itm) {
            inp.value = '';
            console.error('This value already exists!');
            return false;
        }
    }
    return true;
}

//Deyeri Todo liste elave etme funskiyasi:
function add() {
    if (inp.value == '') { return false }
    if (isExist()) {
        todo.push(inp.value);
        inp.value = '';

        let data = '';
        for (let item of todo) {
            data += `<li class="list-group-item position-relative"> ${item} <button class="position-absolute trash-btn">🗑</button></li> `
        }
        list.innerHTML = data;
    }
}
btn.addEventListener('click', add);





