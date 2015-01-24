<?
	class DefaultController{
		
		public function __construct(){

		}

		public function library($name){
			include('../library/'.$name.".php");
		}

		public function view($name){
			include('../view/'.$name.".php");
			die();
		}

		public function modell($name){
			include('../modell/'.$name.".php");
		}
	}
?>