document.getElementById("form").onsubmit = function (event) {

    event.preventDefault();

    let form = document.getElementById("form");

    let name = document.getElementById("name").value.trim();
    let name1 = document.getElementById("name1").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("no").value.trim();
    let password = document.getElementById("pas").value;
    let confirmPassword = document.getElementById("pass").value;
    let userType = document.getElementById("Usr").value;

    if (name==="") {
        alert("First Name must be required");
        return;
    }
    
    if (name1==="") 
    {
        alert("Last Name must be required");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regex.
    if (!emailPattern.test(email)) {
        alert("Enter a valid email");
        return;
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must be 10 digits");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (userType === "") {
        alert("Select user type");
        return;
    }

    alert("Form submitted successfully!");

form.reset()
    
};
