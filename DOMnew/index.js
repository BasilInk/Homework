// create add update delete element DOM CRUD
// attributes
// data attr
// js modules
// localstorage

const userInput = document.querySelector('.user-input');
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');


const generateTodo = (innerText) => {
    const myDiv = document.createElement('div');
    myDiv.classList.add('todo');
    myDiv.insertAdjacentHTML(
        `afterbegin`,
        `
            <i class="fas fa-trash"></i>
            <i class="far fa-check-circle"></i>
            <p class="todo__text">${innerText}</p>
        `);

    return myDiv;
};

{/* <i class="fas fa-check-circle"></i> */}

const addTodo = () => {
    if (userInput.value === '') {
        return;
    }

    const todo = generateTodo(userInput.value);
    userInput.value = '';
    userInput.focus();
    todoList.append(todo); 
};

addBtn.addEventListener('click', addTodo);

userInput.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 13) {
        addTodo();
    }
});


todoList.addEventListener('click', function ({target}) {
    if (target.classList.contains('fa-trash')) {
        // target.parentElement.remove();
        target.closest('.todo').remove();
    }
});


