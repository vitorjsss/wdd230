const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const delBtn = document.createElement('button');

        li.textContent = input.value;
        delBtn.textContent = '❌';

        li.append(delBtn);
        list.append(li);

        delBtn.addEventListener('click', () =>{
            list.removeChild(li);
            input.focus();
        });
    };
    input.focus();
    input.value = '';
});