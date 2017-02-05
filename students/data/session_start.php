<?php
$user = json_decode(file_get_contents("php://input") ) ;
//var_dump($user->msg);exit;

if($user->msg == 'authenticated'){
    
    session_start() ;
   
    $_SESSION['uid'] = uniqid(ang_);

    echo $_SESSION['uid'] ;

}



?>