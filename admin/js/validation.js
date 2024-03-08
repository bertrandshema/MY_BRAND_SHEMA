const form = document.getElementById('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error');
    errorDisplay.innerText = message;
    errorDisplay.style.display ="block";
    element.classList.add('input-error');
    element.classList.remove('input-success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error');
    errorDisplay.innerText = '';
    errorDisplay.style.display ="none";
    element.classList.remove('input-error');
    element.classList.add('input-success');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};



const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const nameValue = fullname.value.trim();
    const confirmValue = confirmPassword.value.trim();
    if(nameValue === '') {
        setError(fullname, 'Fullname is required');
    }
    else {
        setSuccess(fullname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else{
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(confirmValue === '') {
        setError(confirmPassword, 'Confirm your password please.');
    } else if (passwordValue !== confirmValue ) {
        setError(confirmPassword, 'Password does not match.')
    } else {
        setSuccess(confirmPassword);
    }


};