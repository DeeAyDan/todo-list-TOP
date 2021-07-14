import deleteList from './delete-list'

export default function createList(newListName){
    const listContainer = document.querySelector('#lists');
    const input = document.getElementById('list-input');
    const newlistId = newListName.toLowerCase().replace(/\s/g, '');
    createListDisplay(newlistId);
    if (newListName === ''){
        alert('List name can not be empty.');
    }
    else{
        const wraperDiv = document.createElement('div');
        listContainer.appendChild(wraperDiv);

        const controlButton = document.createElement('button');
        controlButton.classList.add('control-button');
        controlButton.classList.add('active-button');
        controlButton.classList.add('list-button');
        wraperDiv.appendChild(controlButton);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-list');
        wraperDiv.appendChild(deleteButton);

        controlButton.textContent = newListName;
        deleteButton.textContent = 'Delete';
        input.value = '';
    }
    deleteList();
}

function createListDisplay(displayId){
    const displayParent = document.getElementById('display');
    const displayItself = document.createElement('div');
    displayParent.appendChild(displayItself);
    displayItself.classList.add('display-content');
    displayItself.id = displayId;
}