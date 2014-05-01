<?php

require_once 'server/model/CapitulosModel.php';
require_once 'server/drawing/IndexDrawing.php';

use Gear\Controller\ControllerAJAX;

class IndexController extends ControllerAJAX
{
	public function __construct()
	{
		$page = new IndexDrawing();
		$page->drawPage( 'Gear Events' ); 
	}	

} // end DocumentationController

$page = new IndexController();