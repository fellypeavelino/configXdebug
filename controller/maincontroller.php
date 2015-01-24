<?
	include('defaultController.php');

	class MainController extends DefaultController{
		public function __construct(){
			parent::library('session');
		}

		public function index(){
			if(isset($_POST['login']) and isset($_POST['senha'])){
				$_SESSION['ok'] = "ok";
				echo $_SESSION['ok'];
				parent::view("main");
				//include("../view/main.php");
				//die();
			}
		}

		public function teste(){
			echo $_POST["teste"];
			die();
		}
	}

	$main = new MainController();
	$main->index();
	$main->teste();

?>