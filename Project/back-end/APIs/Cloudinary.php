<?php

class Cloudinary extends Controller {
    public function getSignature()
    {
       echo json_encode(cloudinarySign(["folder" => "MonOrganisateur"]));
    }
}