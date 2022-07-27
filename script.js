const passwordInput = document.body.querySelector('#password')
const passwordConfirmationInput = document.body.querySelector('#password-confirmation')
const errorMessage = document.body.querySelector('#error-message')
const button = document.body.querySelector('button')

passwordInput.addEventListener('input', (e) => {
    if(passwordConfirmationInput.value != "") {
        passwordCheck(e)
    }
})

passwordConfirmationInput.addEventListener('input', passwordCheck)

function passwordCheck(event) {
    if(passwordInput.value != passwordConfirmationInput.value) {
        errorMessage.style.display = 'block'
        passwordInput.classList.add('error')
        passwordConfirmationInput.classList.add('error')
        
    } else {
        errorMessage.style.display = 'none'
        passwordInput.classList.remove('error')
        passwordConfirmationInput.classList.remove('error')
    }
    
}

const inputs = document.querySelectorAll('input')
let full = []

button.addEventListener('click', (e) => {
    full = []
    inputs.forEach((input) => {
        if (input.checkValidity() == true) {
            if(input.value != "") {
                full.push(true)
            }
        }
    })
    if(full[5] == true) {
        if(passwordInput.value != passwordConfirmationInput.value) {
            button.type = 'button'
            passwordConfirmationInput.focus()
            setTimeout(reactivateButton, 1)
        }
    }
})

function reactivateButton() {
    button.type = 'submit'
}