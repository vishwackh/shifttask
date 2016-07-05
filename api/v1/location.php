 <?php
 $app->post('/addlocationitem', function() use ($app) {
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
    $name = $r->customer->name;

$isDataExists = $db->getOneRecord("select 1 from locationEntity where name='$name'");
 if(!$isDataExists){
        $tabble_name = "locationEntity";
        $column_names = array('name');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
         if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Record created successfully";
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
        $response["message"] = "the Location exists!";
        echoResponse(201, $response);
 	}
}
});

$app->get('/getlocationdata', function() use ($app){
    $response = array();
    $db = new DbHandler();
    $user = $db->getRecords("select id,name,createdDate from locationEntity");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Location Data.';
        $response['data'] = $user;

     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
        }
    echoResponse(200, $response);
});

$app->delete('/deletelocationitem', function() use ($app) {
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

$user = $db->deleteIntoTable("delete from locationEntity where id = '$id'");

    if ($user) {
        $response['status'] = "success";
        $response['message'] = 'Location Deleted successfully.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
}
});

$app->put('/updatelocationitem', function() use ($app) {
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
    $name = $r->customer->name;

$isDataExists = $db->getOneRecord("select 1 from locationEntity where name='$name'");
 if(!$isDataExists){
$user = $db->updateIntoTable("update locationEntity set name = '$name' where id = '$id'");

    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Location Data Updated.';
        $response['data'] = $user;
        echoResponse(200, $response);
     }else {
            $response['status'] = "error";
            $response['message'] = 'Data Not Found';
            echoResponse(201, $response);
        }
    }else
 	{
        $response["status"] = "error";
        $response["message"] = "the Location Already exists!";
        echoResponse(201, $response);
 	}
}
});

?>
