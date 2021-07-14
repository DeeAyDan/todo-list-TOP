export default function deleteList(){
    const deleteListButtons = document.querySelectorAll('.delete-list');

    deleteListButtons.forEach(element => {
        element.addEventListener('click', function(e){
                const displayIdName = e.currentTarget.parentNode.firstChild.textContent.toLowerCase().replace(/\s/g, '');
                const activeDisplay = document.getElementById(displayIdName);
                activeDisplay.remove();
                e.currentTarget.parentNode.remove();
                
        })
    })
}