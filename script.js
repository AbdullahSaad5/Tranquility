function getCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "test@test.com" && password == "test123") {
        // alert("Login Successful");
        swal("Sucess!", "Click OK to continue!", "success").then(function () {
            window.location.href = "music.html";
        });
    } else {
        // alert("Invalid Username or Password");
        swal("Error!", "Invald Username or Password", "error");
    }
}