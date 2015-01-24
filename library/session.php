<?
	class Session{
		public function __construct(){
			session_start();
		}

		public function set($key,$object){
			if(isset($_SESSION[$key])){
				unset($_SESSION[$key]);
			}
			$_SESSION[$key] = serialize($object);
		}

		public function get($key){
			if(isset($_SESSION[$key])){
				return unserialize($_SESSION[$key]);
			}
		}

		public function delete($key){
			unset($_SESSION[$key]);
		}

		public function destroy(){
			session_destroy();
		}

	}
?>
