<?php

    class Database{
        private $host = "localhost";
        private $db_name = "mon_organisateur";
        private $username = "root";
        private $password = "";

        private $conn;
        private $stmt;

        
        public function __construct(){
            // Set Connection to Database
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
            }

            return $this->conn;
        }

        public function query($query) {
            // Prepare Statement
            $this->stmt = $this->conn->prepare($query);
        }

        public function bind($param, $value, $type = null) {
            // Check the type of the value
            switch(true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default:
                    $type = PDO::PARAM_STR;
            }

            $this->stmt->bindParam($param, $value, $type);
        }

        public function execute() {
            // Execute the prepared statement
            return $this->stmt->execute();
        }

        public function resultSet() {
            // Execute the prepared statement
            $this->execute();
            // Get the results
            return $this->stmt->fetchAll(PDO::FETCH_OBJ);
        }

        public function single() {
            // Execute the prepared statement
            $this->execute();
            // Get one result
            return $this->stmt->fetch(PDO::FETCH_OBJ);
        }

        public function rowCount() {
            // Execute the prepared statement
            $this->execute();
            // Get the row count
            return $this->stmt->rowCount();
        }
    }


?>