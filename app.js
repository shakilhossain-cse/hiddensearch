const button = document.querySelector('button');
const searchDiv = document.querySelector('.search');
button.addEventListener('click',(e)=>{
    searchDiv.classList.add('active');
    e.stopPropagation();
})


const body = document.querySelector('body');
body.addEventListener('click',(e)=>{
    if ( e.target.tagName != 'INPUT') {
        searchDiv.classList.remove('active');
    }
})