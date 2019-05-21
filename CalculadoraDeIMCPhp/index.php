<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Calculadora de IMC</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="card text-center"><img class="card-img w-100 d-block" src="assets/img/Penguins.jpg">
        <div class="card-img-overlay">
            <h4 class="text-white" style="margin-top: 60px;">Calculadora de IMC</h4>
            <p class="text-white">Calcule aqui seu IMC! É fácil e rápido!</p>
			<?php
				if(isset($_POST['submit']) && !empty($_POST['peso']) && !empty($_POST['altura'])){
					$foiPostado = true;
					$peso = $_POST['peso'];
					$altura = $_POST['altura'];
					$resultado = $peso/($altura*$altura);
				}
			?>
            <form enctype="multipart/form-data" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input class="form-group form-control d-md-flex mx-auto" type="text" id="altura" name="altura" placeholder="Digite aqui sua altura" minlength="4" maxlength="4" style="width: 180px;">
                <input class="form-group form-control mx-auto" type="text" id="peso" name="peso" placeholder="Digite aqui seu peso" minlength="2" maxlength="3" pattern="[0-9]{2,3}" style="width: 180px;">
                <button class="btn btn-primary" id="button" type="button"><input class="btn btn-primary" type="submit" value="Calcular" name="submit" /></button>
            </form>
			<?php
				if(!empty($foiPostado)){
					?><h1 class='text-white'>Seu IMC é de <?php echo number_format($resultado, 2, '.', "");?></h1><?php
					$grau ="";
					if($resultado >= 40 ){
						$grau = "Obesidade grau 3";
					}
					else if($resultado>=35 && $resultado <40){
						$grau = "Obesidade grau 2";
					}
					else if($resultado>=30 && $resultado<35){
						$grau = "Obesidade grau 1";
					}
					else if($resultado>=25 && $resultado<30){
						$grau = "Sobrepeso";
					}
					else if($resultado>18.5 && $resultado<25){
						$grau = "Normal";
					}
					else{
						$grau = "Desnutrido";
					}
					?><h1 class='text-white'><?php echo $grau;?></h1><?php
				}
			?>
		</div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>