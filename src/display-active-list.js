export default function displayCurrentList(){
    const controlButtons = document.querySelectorAll('.list-button');
    const allDisplays = document.querySelectorAll('.display-content');

    controlButtons.forEach(function(element){

        element.addEventListener('click', function(){

            allDisplays.forEach(e => {
                e.style.display = 'none';
                e.classList.remove('active-display');
             })

            controlButtons.forEach(function(element){
                element.classList.remove('active');
            })

        const displayIdName = element.textContent.toLowerCase().replace(/\s/g, '');
        const activeDisplay = document.getElementById(displayIdName);
        activeDisplay.style.display = 'block';
        activeDisplay.classList.add('active-display');
        element.classList.add('active');

        const newTitle = element.textContent;
        displayTitleChange(newTitle);
        displayAddTodoButton();
        deactivateAllListAndAllTodo();
        })

    })
}

function displayTitleChange(newTitle){
    const displayTitle = document.querySelector('#display-text');
    displayTitle.textContent = newTitle;
}

function displayAddTodoButton(){
    const addTodoButton = document.querySelector('#add-todo-button');
    addTodoButton.style.display = 'block';
}

function deactivateAllListAndAllTodo(){
    const allListButton = document.querySelector('#all-list');
    allListButton.classList.remove('active');
    const allTodoButton = document.querySelector('#all-todos');
    allTodoButton.classList.remove('active');
}