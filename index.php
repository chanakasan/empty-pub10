<?php
ini_set('error_reporting', E_ALL | E_STRICT);

/* Load Twig engine */
require_once 'vendor/Twig/Autoloader.php';
Twig_Autoloader::register();

/* load templates */
$layout_loader = new Twig_Loader_Filesystem(__DIR__.'/layouts');
$request_loader = new Twig_Loader_Filesystem(__DIR__.'/views/request');

$loader = new Twig_Loader_Chain(array($layout_loader, $request_loader));
$twig = new Twig_Environment($loader, array('debug' => true));

echo $twig->render('list.html.twig');

?>

<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--    <title>UI Preview</title>-->
<!--</head>-->
<!--<body>-->
<!--    <h2>Prototypes</h2>-->
<!---->
<!--<div id="ui_request">-->
<!--    <p>Request</p>-->
<!--    <ul>-->
<!--        <li><a href="/views/request/start.html">start</a></li>-->
<!--        <li><a href="/views/request/one.html">oneday</a></li>-->
<!--    </ul>-->
<!--</div>-->
<!---->
<!---->
<!--</body>-->
<!--</html>-->