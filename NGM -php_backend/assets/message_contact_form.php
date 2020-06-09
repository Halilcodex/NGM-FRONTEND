<?php

class Contact_FORM {

    public $id;
    public $sender_name;
    public $sender_email;
    public $sender_message;

    private $conn;
    private $table_name = "contact_us_form";

    function __construct($db){
        $this->conn = $db;
    }

    public function sendMessage(){
        $s_query = "INSERT INTO " . $this->table_name . "(
                    sender_name, sender_mail, sender_message) VALUES(
                    :sender_name, :sender_email, :sender_message)";

        $contact_us_query = $this->conn->prepare($s_query);

        $this->sender_name = htmlspecialchars(strip_tags($this->sender_name));
        $this->sender_email = htmlspecialchars(strip_tags($this->sender_email));
        $this->sender_message = htmlspecialchars(strip_tags($this->sender_message));

        $contact_us_query->bindParam(":sender_name", $this->sender_name);
        $contact_us_query->bindParam(":sender_email", $this->sender_email);
        $contact_us_query->bindParam(":sender_message", $this->sender_message);

        if ($contact_us_query->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
?>