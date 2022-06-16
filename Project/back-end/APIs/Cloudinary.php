<?php

// set headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json ; charset=utf-8');
header("Access-Control-Allow-Methods: *"); 
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers: *");

class Cloudinary extends Controller {
    public function getSignature()
    {
       echo json_encode(cloudinarySign(["folder" => "MonOrganisateur"]));
    }
}