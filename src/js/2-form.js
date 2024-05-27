let formData = {
    email: "",
    message: "",
};

const labels = document.querySelectorAll('label');
labels.forEach(label => { label.classList.add('form-label') });
const input = document.querySelector('input');
input.classList.add('form-input');
const message = document.querySelector('textarea');
message.classList.add('form-message');
const button = document.querySelector('button');
button.classList.add('form-btn');
