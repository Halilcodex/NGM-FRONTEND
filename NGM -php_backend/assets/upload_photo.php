<?php
class NGM_Member
{
    private $conn;
    private $table_name = "members";

    //member specific information 
    public $id;
    public $first_name;
    public $last_name;
    public $profile_desc;
    public $img_filename;

    //image upload parameters
    private $temp_path;
    public $file_type;
    public $file_size;

    //user defined error array
    public $my_upload_errors = array();

    protected $upload_folder = "photo_uploads_folder"; //upload directory

    protected $upload_errors = array(
        UPLOAD_ERR_OK 				=> "No errors.",
	    UPLOAD_ERR_INI_SIZE  	=> "Larger than upload_max_filesize.",
	  UPLOAD_ERR_FORM_SIZE 	=> "Larger than form MAX_FILE_SIZE.",
	  UPLOAD_ERR_PARTIAL 		=> "Partial upload.",
	  UPLOAD_ERR_NO_FILE 		=> "No file.",
	  UPLOAD_ERR_NO_TMP_DIR => "No temporary directory.",
	  UPLOAD_ERR_CANT_WRITE => "Can't write to disk.",
	  UPLOAD_ERR_EXTENSION 	=> "File upload stopped by extension."
    );


    function __construct($db){
        $this->conn = $db;
    }

    public function upload_photo($file){
        if (!$file || empty($file) || !is_array($file)) {
            $this->my_upload_errors[] = "No file was uploaded";
        } elseif($file['error'] != 0){
            $this->my_upload_errors[] = $this->upload_errors[$file['error']];
            return false;
        } else {
            $this->temp_path = $file['tmp_name'];
            $this->img_filename = basename($file['name']);
            $this->file_type = $file['type'];
            $this->file_size = $file['size'];

            return true;
        }
    }

    public function save_photo(){
        // if (!empty($this->my_upload_errors[])) {
        //     return false;  
        // } 

        if(empty($this->img_filename) || empty($this->temp_path)) {
		    $this->my_upload_errors[] = "The file location was not available.";
		    return false;
          }
          
        $target_path = "assets/" . $this->upload_folder . "/" . $this->img_filename;

        if(move_uploaded_file($this->temp_path, $target_path)) {
            // Success
              // Save a corresponding entry to the database
              if($this->database_create()) {
                  // We are done with temp_path, the file isn't there anymore
                  unset($this->temp_path);
                  return true;
              }
          } else {
              // File was not moved.
          $this->my_upload_errors[] = "The file upload failed, possibly due to incorrect permissions on the upload folder.";
          return false;
        }
    }

    //uploading to the database
    public function database_create (){
        $i_query = "INSERT INTO " . $this->table_name . " 
                                (first_name, last_name, profile_desc, img_file) 
                                VALUES (:first_name, :last_name, :profile_desc, :img_file)";
                
                $insert_query = $this->conn->prepare($i_query);

                $this->first_name = htmlspecialchars(strip_tags($this->first_name));
                $this->last_name = htmlspecialchars(strip_tags($this->last_name)); 
                $this->profile_desc = htmlspecialchars(strip_tags($this->profile_desc));
                $this->img_filename = htmlspecialchars(strip_tags($this->img_filename));

                $insert_query->bindParam(":first_name", $this->first_name);
                $insert_query->bindParam(":last_name", $this->last_name);
                $insert_query->bindParam(":profile_desc", $this->profile_desc);
                $insert_query->bindParam(":img_file", $this->img_filename);

                if ($insert_query->execute()) {
                    return true;
                } else {
                    return false;
                }
    }

    public function read_member_infor(){

        $r_query = "SELECT 
                     id,
                     first_name,
                     last_name,
                     profile_desc,
                     img_file FROM members";
        $read_mem_query = $this->conn->prepare($r_query);

        $read_mem_query->execute();

        return $read_mem_query;
    }

    
}


?>