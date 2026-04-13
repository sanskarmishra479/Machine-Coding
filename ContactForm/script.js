const form = document.getElementById('Frm');
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feadback');
const btn = document.getElementById('submitBtn')

const error = document.getElementById('error');


let fName = fnameInput.value;
let lName = lnameInput.value;
let email = emailInput.value;
let feedback = feedbackInput.value;

fnameInput.addEventListener("change", (e) => {
    fName = e.target.value;
});

lnameInput.addEventListener("change", (e) => {
    lName = e.target.value;
});

emailInput.addEventListener("change", (e) => {
    email = e.target.value;
});

feedbackInput.addEventListener("change", (e) => {
    feedback = e.target.value;
});


const inputValidation = () => {
    if (fName.length === 0 ||
        lName.length === 0 ||
        email.length === 0 ||
        feedback.length === 0) {
        error.innerText = 'incorrect input formate';
        return false
    } else {
        error.innerText = '';
        return true
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!inputValidation()) {
        console.log("input formate is not correct")
    } else {
        console.log('good to go')
    }

})