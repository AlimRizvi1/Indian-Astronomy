// script.js

// Function to display an alert when the button is clicked
function showAlert() {
    alert('Welcome to Indian Astronomy!');
}

// Function to change the background color of a section when clicked
function changeSectionStyle(event) {
    const section = event.currentTarget; // Get the clicked section
    section.style.backgroundColor = '#444'; // Change background color
    section.style.color = '#fff'; // Change text color
}

// Add event listeners to buttons and sections if needed
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to the button
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', showAlert);
    }

    // Add click event to all sections to change their style
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', changeSectionStyle);
    });
});

// script.js

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}