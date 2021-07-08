export default function displayCurrentList(){
    const controlButtons = document.querySelectorAll('.active-button');

    controlButtons.forEach(function(element){
        element.addEventListener('click', function(){
            controlButtons.forEach(function(element){
                element.classList.remove('active');
            })
            element.classList.add('active');
        })
    })
}