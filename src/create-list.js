export default function createList(){
    const listContainer = document.querySelector('#lists');
    const input = document.getElementById('list-input');
    const newListName = document.getElementById('list-input').value;

    if (newListName === ''){
        alert('List name can not be empty.');
    }
    else{
        const wraperDiv = document.createElement('div');
        listContainer.appendChild(wraperDiv);

        const controlButton = document.createElement('button');
        controlButton.classList.add('control-button');
        wraperDiv.appendChild(controlButton);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-list');
        wraperDiv.appendChild(deleteButton);

        controlButton.textContent = newListName;
        deleteButton.textContent = 'Delete';
        input.value = '';
    }
}