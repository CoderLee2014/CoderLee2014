<?php
require 'smarty/libs/Smarty.class.php';
$smarty = new Smarty();
$smarty->template_dir = "smarty/templates/templates";
$smarty->compile_dir = "smarty/templates/templates_c";
$smarty->config_dir = "smarty/templates/config";
$smarty->cache_dir = "smarty/templates/cache";
$smarty->caching = false;
$smarty->left_delimiter ="{#";
$smarty->right_delimiter ="#}";
$hello = "Hello World!";
$smarty->assign("hello",$hello);
$smarty->display("index.tpl");?>