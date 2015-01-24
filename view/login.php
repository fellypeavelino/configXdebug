<!DOCTYPE html>
<html>
	<? include("/header.php") ?>
	<body>
		<form method="post" action="controller/maincontroller.php">
			<table align="center" >
				<tr>
					<td>
						Login:
					</td>
					<td>
						<input type="text" name="login" id="login" placeholder="Login" />
					</td>
				</tr>
				<tr>
					<td>
						Senha:
					</td>
					<td>
						<input type="password" name="senha" id="senha" placeholder="senha" />
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<button>Logar</button>
					</td>
				</tr>
			</table>
		</form>
		<dir id="myDiv"></dir>
	</body>
</html>