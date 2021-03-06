import hideForm from './hide-form'
import createToDo from './create-todo'

export default function formPopUp(){
    const content = document.querySelector('body');

    const formBackgroundDiv = document.createElement('div');
    formBackgroundDiv.setAttribute('id', 'form-background');
    content.appendChild(formBackgroundDiv);

    const formWraperDiv = document.createElement('div');
    formWraperDiv.setAttribute('id', 'form');
    formBackgroundDiv.appendChild(formWraperDiv);

    const formTitle = document.createElement('p');
    formTitle.setAttribute('id', 'form-title');
    formTitle.textContent = 'Add todo';
    formWraperDiv.appendChild(formTitle);

    const todoWraper = document.createElement('div');
    formWraperDiv.appendChild(todoWraper);

    const todoName = document.createElement('p');
    todoName.classList.add('form-todo-name');
    todoName.textContent= 'Todo name';
    todoWraper.appendChild(todoName);

    const todoInput = document.createElement('input');
    todoInput.setAttribute('id', 'add-todo-input');
    todoInput.setAttribute('placeholder', "Type todo's name");
    todoWraper.appendChild(todoInput);

    const radioWraper = document.createElement('div');
    radioWraper.setAttribute('id', 'radio-section');
    formWraperDiv.appendChild(radioWraper);

    const radioName = document.createElement('p');
    radioName.classList.add('form-todo-name');
    radioName.textContent= 'Priority';
    radioWraper.appendChild(radioName);

    const radioLow = document.createElement('input');
    radioLow.setAttribute('type', 'radio');
    radioLow.setAttribute('id', 'low-radio');
    radioLow.setAttribute('name', 'todo-priority-form');
    radioLow.setAttribute('value', 'Low');
    radioWraper.appendChild(radioLow);

    const labelLow = document.createElement('label');
    labelLow.setAttribute('for', 'low-radio');
    labelLow.textContent = 'Low';
    radioWraper.appendChild(labelLow);

    const break1 = document.createElement('br');
    radioWraper.appendChild(break1);

    const radioMedium = document.createElement('input');
    radioMedium.setAttribute('type', 'radio');
    radioMedium.setAttribute('id', 'medium-radio');
    radioMedium.setAttribute('name', 'todo-priority-form');
    radioMedium.setAttribute('value', 'Medium');
    radioWraper.appendChild(radioMedium);

    const labelMedium = document.createElement('label');
    labelMedium.setAttribute('for', 'medium-radio');
    labelMedium.textContent = 'Medium';
    radioWraper.appendChild(labelMedium);

    const break2 = document.createElement('br');
    radioWraper.appendChild(break2);

    const radioHigh = document.createElement('input');
    radioHigh.setAttribute('type', 'radio');
    radioHigh.setAttribute('id', 'high-radio');
    radioHigh.setAttribute('name', 'todo-priority-form');
    radioHigh.setAttribute('value', 'High');
    radioWraper.appendChild(radioHigh);

    const labelHigh = document.createElement('label');
    labelHigh.setAttribute('for', 'high-radio');
    labelHigh.textContent = 'High';
    radioWraper.appendChild(labelHigh);

    const break3 = document.createElement('br');
    radioWraper.appendChild(break3);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.textContent = 'Add';
    formWraperDiv.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancel-button');
    cancelButton.textContent = 'Cancel';
    formWraperDiv.appendChild(cancelButton);

    cancelButton.addEventListener('click', function(e){
        hideForm();
    })

    submitButton.addEventListener('click', function(e){
        createToDo();
        hideForm();
    })

    blurringContent();
}

function blurringContent(){
    const content = document.querySelector('#content');
    content.setAttribute('style', 'filter:blur(8px)');
}