<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object files
include_once 'assets/config/database.php';
include_once 'assets/upload_photo.php';


$database= new Database();
$db= $database->getConnection();


//$message = "";
if (isset($_POST['submit_member_info'])) {
  
  $photo = new NGM_Member($db);
  $photo->first_name = $_POST['first_name']; 
  $photo->last_name = $_POST['last_name']; 
  $photo->profile_desc = $_POST['user_desc'];
  
  
    $photo->upload_photo($_FILES['upload_photo']);

    $products_arr = array();
    $products_arr['records'] = array();

  if ($photo->save_photo()) {
      $message = "Photograph Updated Successfully";
    
      $member_info_array = array(
        "member_Fname" => $photo->first_name,
        "member_LName" => $photo->last_name,
        "member_profile" => $photo->profile_desc
      );
      // set response code - 200 OK
        http_response_code(201);
    
        // send member data in json format
        echo json_encode($member_info_array);

  } else{
      // set response code - 404 Not found
    http_response_code(503);
  
    // unable to add member
    echo json_encode(array("message" => $photo->my_upload_errors));
  }
}
?>