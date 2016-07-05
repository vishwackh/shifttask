<?php

/*Vendor signup*/
$app->post('/vendorsignUp', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('emailId', 'name', 'password'),$r->customer);
    require_once 'passwordHash.php';
    $db = new DbHandler();
    $name = $r->customer->name;
    $pannumber = $r->customer->pannumber;
    $emailId = $r->customer->emailId;
    $mobilenumber = $r->customer->mobilenumber;
    $address = $r->customer->address;
    $area = $r->customer->area;
    $city = $r->customer->city;
    $states = $r->customer->states;
    $pincode = $r->customer->pincode;
    $password = $r->customer->password;
    $r->customer->status = 'pending';
    $isUserExists = $db->getOneRecord("select 1 from VendorEntity where mobilenumber='$mobilenumber' or emailId='$emailId'");
    if(!$isUserExists){
        $r->customer->password = passwordHash::hash($password);
        $tabble_name = "VendorEntity";
        $column_names = array('name', 'pannumber', 'emailId', 'mobilenumber','address','area','city','states','pincode','password', 'status');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Vendor account created successfully";
            $response["id"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create customer. Please try again";
            echoResponse(201, $response);
        }
    }else{
        $response["status"] = "error";
        $response["message"] = "A vendor with the provided phone or email exists!";
        echoResponse(201, $response);
    }
});

$app->get('/vendors', function() use ($app){
    $response = array();
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    $user = $db->getRecords("select id,name,pannumber,emailId,mobilenumber,address,area,city,states,pincode,status,createdDate from VendorEntity");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Registered Vendors.';
        $response['data'] = $user;

     }else {
            $response['status'] = "error";
            $response['message'] = 'Vendor not yet registered';
        }
    }
    echoResponse(200, $response);
});

$app->put('/vendorapproved', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    /* set data */
    $id = $r->customer->id;

$user = $db->updateIntoTable("update VendorEntity set status='approved' where id = '$id'");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Vendor Approved Successfully.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
}
});

$app->post('/vendorlogin', function() use ($app) {
    require_once 'passwordHash.php';
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('emailId', 'password'),$r->customer);
    $response = array();
    $db = new DbHandler();
    $password = $r->customer->password;
    $email = $r->customer->emailId;

    $user = $db->getOneRecord("select id,name,password,emailId,status,createdDate from VendorEntity where emailId='$email' and status='approved'");

    if ($user != NULL) {
        if(passwordHash::check_password($user['password'],$password)){
        $response['status'] = "success";
        $response['message'] = 'Logged in successfully.';
        $response['name'] = $user['name'];
        $response['uid'] = $user['id'];
        $response['email'] = $user['emailId'];
        $response['type'] = 'vendor';
        $response['createdAt'] = $user['createdDate'];
        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['uid'] = $user['id'];
        $_SESSION['email'] = $email;
        $_SESSION['name'] = $user['name'];
        $_SESSION['type'] = "vendor";
        } else {
            $response['status'] = "error";
            $response['message'] = 'Login failed. Incorrect credentials';
        }
    }else {
            $response['status'] = "error";
            $response['message'] = 'No such user is registered';
            $response['data'] = $user;
        }
    echoResponse(200, $response);
});

$app->put('/vendorresetPass', function() use ($app) {
    require_once 'passwordHash.php';
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('emailId', 'password'),$r->customer);
    $response = array();
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    $password = $r->customer->password;
    $email = $r->customer->emailId;
    $newpassword = $r->customer->newpassword;

$user = $db->getOneRecord("select id,name,password,emailId,status,createdDate from VendorEntity where emailId='$email' and status='approved'");


    if($user != NULL){
        $newpass = $r->customer->newpassword = passwordHash::hash($newpassword);

$result = $db->updateIntoTable("update VendorEntity set password='$newpass' where emailId ='$email'");

        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Password Reset successfully";
            $response["id"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to Reset Password. Please try again";
            echoResponse(201, $response);
        }
    }else{
        $response["status"] = "error";
        $response["message"] = "Incorrect credentials !";
        echoResponse(201, $response);
    }
}
});

$app->post('/getvendordetails', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    /* set data */
    $email = $r->customer->emailId;
   ChromePhp::log($email, ' vendor');
    $user = $db->getRecords("select id,name,pannumber,emailId,mobilenumber,address,area,city,states,pincode,status,createdDate from VendorEntity where emailId ='$email'");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Vendor Profile info.';
        $response['data'] = $user;
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
        }
}        
    echoResponse(200, $response);
});
?>
