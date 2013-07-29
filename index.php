<?php
ini_set('error_reporting', E_ALL | E_STRICT);

/* Load Twig engine */
require_once 'vendor/Twig/Autoloader.php';
Twig_Autoloader::register();

/* load template */

$loader = new Twig_Loader_Filesystem(__DIR__.'/views/request');
$twig = new Twig_Environment($loader);

echo $twig->render('start.html');