<?php
ini_set('error_reporting', E_ALL | E_STRICT);

/* Load Twig engine */
require_once 'vendor/Twig/Autoloader.php';
Twig_Autoloader::register();

$loader = new Twig_Loader_String();
$twig = new Twig_Environment($loader);
echo $twig->render('Hello {{ name }}!', array('name' => 'world'));

/* load template */
//include_once 'index.html.twig';

$loader = new Twig_Loader_Filesystem(__DIR__.'/layouts');
$twig = new Twig_Environment($loader, array(
    'cache' => __DIR__.'/cache',
));

echo $twig->render('admin.html', array('name' => 'Fabien'));