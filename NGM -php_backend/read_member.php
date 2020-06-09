<?php
// include database and object files
include_once 'assets/config/database.php';
include_once 'assets/upload_photo.php';

header("Access-Control-Allow-Origin: *"); //allowing access to all
header("Content-Type: application/json; charset=UTF-8"); //json file encoded in UTF-8

//create new db object
$database = new Database();
$db = $database->getConnection();



$member_info = new NGM_Member($db);

$member_query = $member_info->read_member_infor();
$members_row = $member_query->rowCount();

if ($members_row > 0) {
    $members_arr = array();
    $members_arr['members_records'] = array();

    while ($row = $member_query->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $single_member_info=array(
            "id" => $id,
            "firstName" => $first_name,
            "lastName" => $last_name,
            "member_profile_desc" => html_entity_decode($profile_desc),
            "img_file" => $img_file,
        );

        array_push($members_arr['members_records'] , $single_member_info);
    }

    // set response code - 200 OK
    http_response_code(200);
  
    // show products data in json format
    echo json_encode($members_arr);
} else{
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "No Member Found")
    );
}



?>