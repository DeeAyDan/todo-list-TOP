function formPopUp(){
    const formBackgroundDiv = document.createElement('div');
    formBackgroundDiv.setAttribute('id', 'form-background');

    const formWraperDiv = document.createElement('div');
    formWraperDiv.setAttribute('id', 'form');
    formBackgroundDiv.appendChild(formWraperDiv);

    const formItself = document.createElement('form');
    formWraperDiv.appendChild(formItself);

    const formTitle = document.createElement('p');
    formTitle.setAttribute('id', 'form-title');
    formTitle.textContent = 'Add todo';
    formItself.appendChild(formTitle);

    const todoWraper = document.createElement('div');
    formItself.appendChild(todoWraper);

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
    formItself.appendChild(radioWraper);

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

    const submitButton = document.createElement('imput');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Add');
    formItself.appendChild(submitButton);
}
