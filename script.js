function getCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "test@test.com" && password == "test123") {
        // alert("Login Successful");
        logged_in = true;
        swal("Success!", "Click OK to continue!", "success").then(function () {
            window.location.href = "music.html";
        });
    } else {
        // alert("Invalid Username or Password");
        swal("Error!", "Invalid Username or Password", "error");
    }
}