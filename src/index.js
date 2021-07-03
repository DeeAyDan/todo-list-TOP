import './styles/style.css';
import createList from './create-list'

const addListButton = document.querySelector('#add-button');
const addListInput = document.querySelector('#list-input')

addListButton.addEventListener('click', function(e){
    createList();
});

addListInput.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        createList();
    }
});
