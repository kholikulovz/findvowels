let elCount = document.querySelector('.count');
let elInput = document.querySelector('.input');
let elBtn = document.querySelector('#button');
arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function findVowels(param) {
    param = elInput.value.trim()    
    let count = 0
    for (let i = 0; i < param.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (param[i] == arr[j]) {
                count++
            }
        }
    }
    elCount.textContent = 'Vowels: ' + count
}

elBtn.addEventListener('click', findVowels)