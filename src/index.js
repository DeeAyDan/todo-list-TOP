import './styles/style.css';
import formPopUp from './pop-up-form'
import deleteTodo from './delete-todo'
import deleteList from './delete-list'
import changePriority from './change-priority'
import createList from './create-list'
import displayCurrentList from './display-active-list'
import displayAllLists from './display-all-lists'

deleteTodo();
deleteList();
changePriority();

const addToDoButton = document.querySelector('#add-todo-button');
const addListButton = document.querySelector('#add-button');
const addListInput = document.querySelector('#list-input');
const allListsButton = document.querySelector('#all-list');
const morningRoutineButton = document.querySelector('#default-list');

morningRoutineButton.addEventListener('click', e => {
    displayCurrentList();
})

allListsButton.addEventListener('click', e => {
    displayAllLists();
})

addToDoButton.addEventListener('click', e => {
    formPopUp();
})

addListButton.addEventListener('click', function(e){
    const newListName = document.getElementById('list-input').value;
    createList(newListName);
    displayCurrentList();
});

addListInput.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        const newListName = document.getElementById('list-input').value;
        createList(newListName);
        displayCurrentList();
    }
});
