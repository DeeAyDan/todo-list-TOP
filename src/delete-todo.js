export default function deleteTodo(){
    const deleteTodoButtons = document.querySelectorAll('.delete-todo');
    deleteTodoButtons.forEach(element => {
        element.addEventListener('click', function(e){
            
            e.currentTarget.parentNode.remove();
            
        })
    })
}