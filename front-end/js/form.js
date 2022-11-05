const user = document.getElementById('user')
const password = document.getElementById('pass')
const form = document.getElementById('form')
// const modalToggle = document.getElementById(''); 
const modal = document.getElementById('modal')
const formBtn = document.getElementById('btnForm')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if ((user.value ==='') && (password.value === '')) {
        console.log('completa ambos campos')
    }else if (user.value ==='') {
        console.log('completa el nombre de usuario')
    }else if (password.value === ''){
        console.log('Escribe tu contraseña')
    }else {
        formBtn.setAttribute('data-bs-toggle', 'modal')
    }
})

