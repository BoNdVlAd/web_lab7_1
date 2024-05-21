const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function storageSave() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function storageLoad() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}


storageLoad();


form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }
    storageSave();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
        form.reset();
    }
});
