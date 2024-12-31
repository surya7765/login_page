
const registrationForm = document.getElementById('regsiterForm');
const loginForm = document.getElementById('loginForm');

registrationForm.addEventListener('submit', (event) => { 
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const username = document.getElementById('registerUserName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPass').value;
    
    const user = {
        name,
        username,
        email,
        password
    };
    
    // if user email is exists in local storage then show alert
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === email);
    if(userExists) {
        alert('User already exists with this email');
        return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully');
    registrationForm.reset();
});

// Login Form Event Listener
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUserName').value;
    const password = document.getElementById('loginPass').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);
    if(user) {
        alert('User logged in successfully');
        loginForm.reset();
    } else {
        alert('Invalid credentials');
    }
});
