<?php
$app->get('/session', function() {
    $db = new DbHandler();
    $session = $db->getSession();
    $response["uid"] = $session['uid'];
    $response["email"] = $session['email'];
    $response["name"] = $session['name'];
    $response["type"] = $session['type'];
    echoResponse(200, $session);
});

$app->get('/users', function() use ($app){
    $response = array();
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    $user = $db->getRecords("select uid,name,email,created,type,address,phone from customers_auth where type='user' ");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Registered Users.';
        $response['data'] = $user;

     }else {
            $response['status'] = "error";
            $response['message'] = 'Users not yet registered';
        }
    }
    echoResponse(200, $response);
});

$app->post('/login', function() use ($app) {
    require_once 'passwordHash.php';
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'password'),$r->customer);
    $response = array();
    $db = new DbHandler();
    $password = $r->customer->password;
    $email = $r->customer->email;
    $user = $db->getOneRecord("select uid,name,password,email,created,type from customers_auth where phone='$email' or email='$email'");
    if ($user != NULL) {
        if(passwordHash::check_password($user['password'],$password)){
        $response['status'] = "success";
        $response['message'] = 'Logged in successfully.';
        $response['name'] = $user['name'];
        $response['uid'] = $user['uid'];
        $response['email'] = $user['email'];
        $response['type'] = $user['type'];
        $response['createdAt'] = $user['created'];
        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['uid'] = $user['uid'];
        $_SESSION['email'] = $email;
        $_SESSION['name'] = $user['name'];
        $_SESSION['type'] = $user['type'];
        } else {
            $response['status'] = "error";
            $response['message'] = 'Login failed. Incorrect credentials';
        }
    }else {
            $response['status'] = "error";
            $response['message'] = 'No such user is registered';
        }
    echoResponse(200, $response);
});
$app->post('/signUp', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'name', 'password'),$r->customer);
    require_once 'passwordHash.php';
    $db = new DbHandler();
    $phone = $r->customer->phone;
    $name = $r->customer->name;
    $email = $r->customer->email;
    $address = $r->customer->address;
    $password = $r->customer->password;
    $type = $r->customer->type;

    $isUserExists = $db->getOneRecord("select 1 from customers_auth where phone='$phone' or email='$email'");
    if(!$isUserExists){
        $r->customer->password = passwordHash::hash($password);
        $tabble_name = "customers_auth";
        $column_names = array('phone', 'name', 'email', 'password', 'address','type');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "User account created successfully";
            $response["uid"] = $result;
            if (!isset($_SESSION)) {
                session_start();
            }
            $_SESSION['uid'] = $response["uid"];
            $_SESSION['phone'] = $phone;
            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            $_SESSION['type'] = $type;

            $mail = new PHPMailer();
            $mail->IsSMTP(); // set mailer to use SMTP
            $mail->Host = "ssl://smtp.gmail.com"; // specify main and backup server
            $mail->Port = 465; // set the port to use
            $mail->SMTPAuth = true; // turn on SMTP authentication
            $mail->Username = "vishwackh89@gmail.com"; // your SMTP username or your gmail username
            $mail->Password = "Rohith258955"; // your SMTP password or your gmail password
            $from = "vishwackh89@example.com"; // Reply to this email
            $to=$email; // Recipients email ID
            $name=$name; // Recipient's name
            $mail->From = $from;
            $mail->FromName = "TASK BOB"; // Name to indicate where the email came from when the recepient received
            $mail->AddAddress($to,$name);
            $mail->AddReplyTo($from,"Task bob Reply");
            $mail->WordWrap = 50; // set word wrap
            $mail->IsHTML(true); // send as HTML
            $mail->msgHTML(file_get_contents('demo.html'), dirname(__FILE__));
            $mail->Subject = "Registered to Task Bob successfully";
            $mail->Body = "Thank You for Registered to Task BOB  "; //HTML Body
            $mail->AltBody = "This is the body when user views in plain text format"; //Text Body
            if(!$mail->Send())
            {
            // echo "Mailer Error: " . $mail->ErrorInfo;
            $response["status"] = "error";
            }
            else
            {
            $response["status"] = "success";
            }

            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create customer. Please try again";
            echoResponse(201, $response);
        }
    }else{
        $response["status"] = "error";
        $response["message"] = "An user with the provided phone or email exists!";
        echoResponse(201, $response);
    }
});
$app->get('/logout', function() {
    $db = new DbHandler();
    $session = $db->destroySession();
    $response["status"] = "info";
    $response["message"] = "Logged out successfully";
    echoResponse(200, $response);
});



?>
