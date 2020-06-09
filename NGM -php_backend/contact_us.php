<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object files
include_once 'assets/config/database.php';
include_once 'assets/message_contact_form.php';


$database= new Database();
$db= $database->getConnection();

if (isset($_POST['send_message'])) {

  $sent_message = New Contact_FORM($db);
  $sent_message_arr = array();

  $sent_message->sender_name = $_POST['sender_name'];
  $sent_message->sender_email = $_POST['sender_mail'] ;
  $sent_message->sender_message = $_POST['sender_message'];

  if ($sent_message->sendMessage()) {
    
      $sent_message_arr = array(
        "message"=> "Message Sent Successfully",
        "Sender Name" => $sent_message->sender_name,
        "Sender Mail" => $sent_message->sender_email,
        "Sender Message" => $sent_message->sender_message
      );


      // set response code - 200 OK
        http_response_code(201);
    
        // send member data in json format
        echo json_encode($sent_message_arr);

  } else{
      // set response code - 503 Not found
    http_response_code(503);
  
    // unable to Send Message
    echo json_encode(array("message" => "Message Not Sent"));
  }
}
?>