button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    if (input.value =  '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('4');
        const li = document.createElement('li');

        const deleteButon = document.createElement('button');

        li.textContent = input.value;

        deleteButon.textContent = 'x';

        li.append(deleteButon);

        list.append(li)
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
