function getCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email == "test@test.com" && password == "test123") {
        alert("Login Successful")
        window.location.href = "music.html"
    }
    else {
        alert("Invalid Username or Password")
    }
}