// var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        window.location.href = 'pages/profile.php';
    } else {
        // User is signed out.
        window.location.href = 'index.html';
    }
});

function logIn() {
    let userEmail = document.getElementById('Email').value;
    let userPassword = document.getElementById('Password').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error: " + errorMessage);
    });
}