document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;

    // Store data in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number);
    localStorage.setItem('message', message);

    location.reload()

    
    alert('Thank You');
});

