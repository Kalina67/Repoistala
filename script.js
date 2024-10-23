//this is the JavaScript File that u should read and try to understand
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}! Your message has been sent!.`;
    responseMessage.classList.remove('hidden');

    this.reset();
});

document.getElementById('loadMore').addEventListener('click', function() {
    alert('More projects will be added soon!');
});
 function rainbowAnimateText(elementId) {
      const element = document.getElementById(elementId);
      let hue = 0;

      function updateColor() {
        hue += 1; 
        if (hue >= 360) hue = 0; 
        element.style.color = `hsl(${hue}, 100%, 50%)`; // Set color using HSL
        requestAnimationFrame(updateColor); 
      }

      updateColor(); 
    }

    // Call the function to apply the rainbow animation
    rainbowAnimateText('rainbow');
