<?php
/**
 * Created by PhpStorm.
 * User: ochieng_
 * Date: 2/20/19
 * Time: 9:09 AM
 */

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>

        <div class="container">
            <div class="col-sm-4 col-sm-offset-4 form-div">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3>Welcome to Firebase</h3>
                    </div>
                    <div class="panel-body">
                        <p>Welcome to firebase log in web example... You are currently Logged In</p>
                    </div>
                    <div class="panel-footer">
                        <button type="button" class="btn btn-primary">Log Out</button>
                    </div>
                </div>
            </div>
        </div>

</body>
<script src="../js/jquery-3.3.1.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script src="../js/index.js"></script>

<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.8.2/firebase-auth.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAiItFWNzc7T-GUMDm-rTd1ZbX-fC54xQU",
        authDomain: "kate-b61d6.firebaseapp.com",
        databaseURL: "https://kate-b61d6.firebaseio.com",
        projectId: "kate-b61d6",
        storageBucket: "kate-b61d6.appspot.com",
        messagingSenderId: "631895753614"
    };
    firebase.initializeApp(config);
</script>
</html>
