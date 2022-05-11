<?php

    class Controller {
        // load model
        public function model($model) {
            // Require model file
            require_once '../app/models/' . $model . '.php';
            // Instantiate model class
            return new $model();
        }
    }

?>