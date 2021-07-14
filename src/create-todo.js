import deleteTodo from './delete-todo'
import changePriority from './change-priority'

export default function createToDo(){
    const wrapperParent = document.querySelectorAll('.display-content');
    wrapperParent.forEach(e => {
        if (e.classList.contains('active-display')){
            createWrapper();
            changePriority();
            deleteTodo();
        }
    });
}

function createWrapper(){
    const displayActive = document.querySelector('.active-display');
    const wrapperelement = document.createElement('div');
    displayActive.appendChild(wrapperelement);
    let odd = true;
    if(odd){
        wrapperelement.classList.add('odd');
        wrapperelement.classList.add('display-element');
        odd = false;
    }
    else if (!odd){
        wrapperelement.classList.add('even');
        wrapperelement.classList.add('display-element');
        odd = true;
    }
    // Setting Priorirty
    const newPriority = document.createElement('div');
    newPriority.classList.add('priority');
    wrapperelement.appendChild(newPriority);
    const checkLowPriority = document.querySelector('#low-radio');
    const checkMediumPriority = document.querySelector('#medium-radio');
    const checkHighPriority = document.querySelector('#high-radio');

    if(checkHighPriority.checked){
        newPriority.classList.add('high-priority');
    }
    else if(checkMediumPriority.checked){
        newPriority.classList.add('medium-priority');
    }
    else{
        newPriority.classList.add('low-priority');
    }
    // ---------------------------------------------

    // Setting todo name
    const todoName = document.createElement('p');
    wrapperelement.appendChild(todoName);
    todoName.classList.add('display-todo');

    const nameFromForm = document.querySelector('#add-todo-input');
    todoName.textContent = nameFromForm.value;
    // ---------------------------------------------

    // Make delete todo button
    const deleteTodoButton = document.createElement('button');
    wrapperelement.appendChild(deleteTodoButton);
    deleteTodoButton.classList.add('delete-todo');
    deleteTodoButton.textContent = 'Delete';
    // ---------------------------------------------

}