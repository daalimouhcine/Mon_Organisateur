<?php

    require_once 'Controller.php';
    require_once 'Database.php';

    class Core {
        protected $currentApi ='Errors';
        protected $currentMethod = 'index';
        protected $apiParams = [];

        public function __construct() {
            $url = $this->getUrl();

            if(!empty($url[0])) {
                // Look in controllers for first value
                if(file_exists('../APIs/' . ucwords($url[0]) . '.php')) {
                    // If exists, set as controller
                    $this->currentApi = ucwords($url[0]);
                    // Unset 0 Index
                    unset($url[0]);
                }
            }

            // Require the controller
            require '../APIs/' . $this->currentApi . '.php';

            // Instantiate controller class
            $this->currentApi = new $this->currentApi;

            // Check for second part of url
            if(!empty($url[1])) {
                if(method_exists($this->currentApi, $url[1])) {
                    $this->currentMethod = $url[1];
                    // Unset 1 index
                    unset($url[1]);
                }
            }

            // Get params 
            $this->apiParams = $url ? array_values($url) : [];

            // Call a callback with array of params
            call_user_func_array([$this->currentApi, $this->currentMethod], $this->apiParams);

        }

        public function getUrl() {
            if(isset($_GET['url'])) {
                $url = rtrim($_GET['url'], '/');
                $url = filter_var($url, FILTER_SANITIZE_URL);
                $url = explode('/', $url);
                $url = array_filter($url);
                return $url;
            }
        }

    }

    // Instantiate Core Class
    new Core();
?>

