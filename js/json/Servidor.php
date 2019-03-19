<?php
    $data = json_decode($_POST['data']);

    $fichero = $data -> Usuario.".json";

    if(file_exists($fichero)){
        unlink($fichero);
    }

    $fd = fopen($fichero,"a+");

    fputs($fd,json_encode($data));

    fclose($fd);
?>