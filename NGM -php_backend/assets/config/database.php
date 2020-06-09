<?php
 
class Database {
     
    private $db_host = "localhost";
    // private $db_user = "gallery";
    // private $db_password = "Gallery1234;";
    // private $db_name = "ngm_website";
    public $conn;

    private $db_user = "root";
    private $db_password = "";
    private $db_name = "ngm_website";

    public function getConnection(){
         $this->conn = null;
        try {
            // $this->conn = new PDO('mysql:host=' . $this->db_host . '; dbname=' . $this->$db_name, $this->db_user, $this->db_password);
            $this->conn = new PDO('mysql:host=' . $this->db_host . '; dbname=ngm_website', $this->db_user, $this->db_password);
        } catch (PDOException $e) {
            //throw $th;
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }

        return $this->conn;
    }
 }

?>