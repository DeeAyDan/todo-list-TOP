export default function hideForm(){
    const pageBody = document.querySelector('body')
    const formBackgroundDiv = document.querySelector('#form-background');
    pageBody.removeChild(formBackgroundDiv);
    unblurringContent();

}

function unblurringContent(){
    const content = document.querySelector('#content');
    content.setAttribute('style', 'filter:blur(0px)');
}