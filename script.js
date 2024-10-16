document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending the message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseMessage.classList.remove('hidden');

    // Clear the form
    this.reset();
});

// Load more projects (simulated)
document.getElementById('loadMore').addEventListener('click', function() {
    alert('More projects will be added soon!');
});
