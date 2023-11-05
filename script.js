//get database
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

//Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = 'Name can not be blank';
        nameInput.classList.add('error-border');
        errorFlag = true;
    }

    if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = 'Invalid email address';
        email.classList.add('error-border');
         errorFlag = true;
    }

    if(message.value.length < 1) {
        errorNodes[2].innerText = 'Please enter a valid message';
        message.classList.add('error-border');
         errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = 'Success!!';
    }
}

// Clear error / success messages

function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = '';
    }
    success.innerText = '';
    nameInput.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');
}

//Check email

function emailIsValid() {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}