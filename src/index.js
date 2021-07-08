import './styles/style.css';
import createList from './create-list'
import formPopUp from './pop-up-form'
import displayAllLists from './display-all-lists'
import displayCurrentList from './display-active-list'

createList('Morning routine');
displayCurrentList();

const addListButton = document.querySelector('#add-button');
const addListInput = document.querySelector('#list-input');
const addTodoButton = document.querySelector('#add-todo-button');
const allListsButton = document.querySelector('#all-list');

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

addTodoButton.addEventListener('click', function(e){
    formPopUp();
})

allListsButton.addEventListener('click', function(e){
    displayAllLists();
})
