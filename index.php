<?php
if (session_id() === null) {
    session_start();
}
date_default_timezone_set("Asia/Ho_Chi_Minh");
require_once "app/request.php";
$app = new App();
?>