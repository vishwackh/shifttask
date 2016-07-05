<?php

$app->delete('/deleteapliitem', function() use ($app) {
    $response = array();
    $r = $app->request->get('id');
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    /* set data */
    $id = $r;
    ChromePhp::log($id, ' hello');

$user = $db->deleteIntoTable("delete from applianceCat where id = '$id'");
    ChromePhp::log('user ',$user);
    if ($user) {
        $response['status'] = "success";
        $response['message'] = 'Category Deleted successfully.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
}
});

$app->put('/updateapliitem', function() use ($app) {
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
    $catgoryname = $r->customer->catgoryname;
    $name = $r->customer->name;

$user = $db->updateIntoTable("update applianceCat set id='$id',catgoryname = '$catgoryname',name = '$name' where id = '$id'");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Home category Data Updated.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
}
});

$app->post('/addapliitem', function() use ($app) {
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
    $catgoryname = $r->customer->catgoryname;
    $name = $r->customer->name;
    $type = $r->customer->type;
    $cartcount = $r->customer->cartcount;

$isDataExists = $db->getOneRecord("select 1 from applianceCat where name='$name'");
 if(!$isDataExists){
        $tabble_name = "applianceCat";
        $column_names = array('catgoryname','name', 'type', 'cartcount');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
         if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Record created successfully";
            $response["maincategory"] = "home";
            $response["data"] = $result;
            echoResponse(200, $response);
         }
         else
         {
            $response["status"] = "error";
            $response["message"] = "Failed to create record. Please try again";
            echoResponse(201, $response);
         }
 	}else
 	{
        $response["status"] = "error";
        $response["message"] = "the provided category exists!";
        echoResponse(201, $response);
 	}
}
});

$app->get('/getaplidata', function() use ($app){
    $response = array();
    $db = new DbHandler();
    $user = $db->getRecords("select id,catgoryname,name,type,cartcount,created from applianceCat");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Home category Data.';
        $response['data'] = $user;

     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
        }
    echoResponse(200, $response);
});

/*---------------------------------------------------------VEHICLE APIs---------------------------------------------*/
$app->post('/addvehiitem', function() use ($app) {
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
    $catgoryname = $r->customer->catgoryname;
    $name = $r->customer->name;
    $type = $r->customer->type;
    $cartcount = $r->customer->cartcount;

$isDataExists = $db->getOneRecord("select 1 from vehicleCat where name='$name'");
 if(!$isDataExists){
        $tabble_name = "vehicleCat";
        $column_names = array('catgoryname','name', 'type', 'cartcount');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
         if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Record created successfully";
            $response["maincategory"] = "home";
            $response["data"] = $result;
            echoResponse(200, $response);
         }
         else
         {
            $response["status"] = "error";
            $response["message"] = "Failed to create record. Please try again";
            echoResponse(201, $response);
         }
    }
    else
    {
        $response["status"] = "error";
        $response["message"] = "the provided category exists!";
        echoResponse(201, $response);
    }
}
});

$app->get('/getvehidata', function() use ($app){
    $response = array();
    $db = new DbHandler();
    $user = $db->getRecords("select id,catgoryname,name,type,cartcount,created from vehicleCat");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'furniture category Data.';
        $response['data'] = $user;

     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
        }
    echoResponse(200, $response);
});

$app->delete('/deletevehiitem', function() use ($app) {
    $response = array();
    $r = $app->request->get('id');
    $db = new DbHandler();
    $session = $db->getSession();
    $Authid = $session['uid'];
    $Authemail =$session['email'];
    if(!$Authid && !$Authemail){
      $response['status'] = "error";
      $response['message'] = 'Fake Request!! Please login to get data';
    }else{
    /* set data */

    $id = $r;
    ChromePhp::log($id, ' hello');

$user = $db->deleteIntoTable("delete from vehicleCat where id = '$id'");
    ChromePhp::log('user ',$user);
    if ($user) {
        $response['status'] = "success";
        $response['message'] = 'Category Deleted successfully.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
}        
});

$app->put('/updatevehiitem', function() use ($app) {
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
    $catgoryname = $r->customer->catgoryname;
    $name = $r->customer->name;

$user = $db->updateIntoTable("update vehicleCat set id='$id',catgoryname = '$catgoryname',name = '$name' where id = '$id'");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Home category Data Updated.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
}
});
?>
