// Adding active class when hovering Navbar
let list = document.querySelectorAll('li');
for (let i=0; i<list.length; i++){
    list[i].onmouseover = function() {
        let j = 0;
        while(j<list.length){
            list[j++].className = 'list'
        }
        list[i].className = 'list active'
    }
}

let offButton = document.getElementById('off-button')
let onButton = document.getElementById('on-button')
let spanText = document.getElementById('text--logo')

offButton.addEventListener('click', () => {
    offButton.classList.remove('active')
    offButton.classList.add('inactive')
    onButton.classList.add('active')
    onButton.classList.remove('inactive')
    document.body.classList.toggle('dMode')
    spanText.classList.add('dMode1')
})
onButton.addEventListener('click', () => {
    onButton.classList.remove('active')
    onButton.classList.add('inactive')
    offButton.classList.add('active')
    offButton.classList.remove('inactive')
    document.body.classList.toggle('dMode')
})