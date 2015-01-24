<?
	class GenericDAO{
		
		private $sql;
		
		public function select($select = "*"){
			$this->sql = "select ".$select;
		} 

		public function from($from){
			if($from == ""){
				$mensage = $this->sql." (from not exist)";
				throw new Exception($mensage , 1);
			}
			$this->sql = " from ".$from; 
		}

		public function where($colunm, $param = ""){
			if($param == ""){
				$this->sql = "where ".$colunm;
			}
			$this->sql = "where ".$colunm." = ".$param;
		}

		

	}
?>