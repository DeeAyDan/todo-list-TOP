export default function displayAllLists(){
    displayTitleAllLists();
    deleteAddTodoButton();
    hideAllDisplayConent();
    createDisplayContentAllLists();
}

function displayTitleAllLists(){
    const displayTitle = document.querySelector('#display-text');
    displayTitle.textContent = 'All lists';
}

function deleteAddTodoButton(){
    const addTodoButton = document.querySelector('#add-todo-button');
    addTodoButton.style.display = 'none';
}

function hideAllDisplayConent(){
    const allDisplays = document.querySelectorAll('.display-content');
    allDisplays.forEach(element => {
        element.style.display = 'none';
    });
}

function createDisplayContentAllLists(){
    const displayParent = document.querySelector('#display');
    const displayContentList = document.querySelector('#alllist');
    if (!displayContentList){
        const displayContentList = document.createElement('div');
        displayContentList.classList.add('display-content');
        displayContentList.id = 'alllist';
        displayParent.appendChild(displayContentList);
        displayContentList.style.display = 'block';
        fillDisplayContentAllLists();
        return;
    }
    fillDisplayContentAllLists();
    displayContentList.style.display = 'block';
}

function fillDisplayContentAllLists(){
    const allListsFromSidebar = document.querySelectorAll('.list-button');
    const allListsDisplayContentParent = document.querySelector('#alllist');
    allListsDisplayContentParent.innerHTML = '';
    var odd = true;
    allListsFromSidebar.forEach(element => {
        if (odd) {
            const allListDisplayContent = document.createElement('div');
            allListDisplayContent.classList.add('display-element');
            allListDisplayContent.classList.add('odd');
            allListDisplayContent.classList.add('display-all-lists-and-all-todos');
            allListDisplayContent.textContent = element.textContent;
            allListsDisplayContentParent.appendChild(allListDisplayContent);
            odd = false;
        }
        else if (!odd){
            const allListDisplayContent = document.createElement('div');
            allListDisplayContent.classList.add('display-element');
            allListDisplayContent.classList.add('even');
            allListDisplayContent.classList.add('display-all-lists-and-all-todos');
            allListDisplayContent.textContent = element.textContent;
            allListsDisplayContentParent.appendChild(allListDisplayContent);
            odd = true;
        }
    })
}