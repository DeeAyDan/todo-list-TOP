export default function changePriority(){
    const priorities = document.querySelectorAll('.priority');
    priorities.forEach(e => {
        e.addEventListener('click', function(){
            if (e.classList.contains('low-priority')){
                e.classList.remove('low-priority');
                e.classList.add('medium-priority');
            }
            else if (e.classList.contains('medium-priority')){
                e.classList.remove('medium-priority');
                e.classList.add('high-priority');
            }
            else if (e.classList.contains('high-priority')){
                e.classList.remove('high-priority');
                e.classList.add('low-priority');
            }
        })
    })
}