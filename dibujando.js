var dibujo, canvas;

function inicio()
{
	dibujo = document.getElementById("dibujito");
	canvas = dibujo.getContext("2d");

	//dibujarGrilla(canvas);
	grillaDiagonal(canvas);

	canvas.beginPath();
	canvas.strokeStyle = "black";
	canvas.moveTo(0,0);
	canvas.lineTo(500,0);
	canvas.lineTo(500,500);
	canvas.lineTo(0,500);
	canvas.lineTo(0,0)
	canvas.stroke();
	canvas.closePath();

	canvas.beginPath();
	canvas.strokeStyle = "blue";
	canvas.arc(250,250,100,(Math.PI *2),false);
	canvas.fillStyle = "blue"; 
    canvas.fill(); 
	canvas.stroke();
	canvas.closePath();
}

/*function dibujarGrilla(c)
{
	var ancho = 500, alto = 500;
	var linea;
	var lineas = 50;
	var limiteX = ancho / lineas;
	var limiteY = alto / lineas;

	for(linea = 0; linea <= limiteX; linea++)
	{
		c.beginPath();
		c.strokeStyle = "black";
		c.moveTo(linea * 50, 0);
		c.lineTo(linea * 50, 500);
		c.stroke();
		c.closePath();
	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		c.beginPath();
		c.moveTo(0 , linea * 50);
		c.lineTo(500, linea * 50);
		c.stroke();
		c.closePath();
	}
}*/

function grillaDiagonal(c)
{
    var ancho = 500, alto = 500;
    var linea;
    var anchoLinea = 50;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;

for(linea = 0; linea <= limiteX; linea++)
{
    var puntoInicial = linea * anchoLinea;
    var puntoFinal = ancho - puntoInicial;

    c.beginPath();
    c.strokeStyle = "black";
    c.moveTo(puntoInicial, 0);
    c.lineTo(ancho, puntoFinal);
    c.stroke();
    c.closePath();
}

 for(linea = 1; linea <= limiteX; linea++)
{
    var puntoInicial = linea * anchoLinea;
    var puntoFinal = ancho - puntoInicial;

    c.beginPath();
    c.moveTo(0, puntoInicial);
    c.lineTo(puntoFinal, ancho);
    c.stroke();
    c.closePath();
}

 for(linea = 0; linea <= limiteY; linea++)
{
    var puntoInicial = linea * anchoLinea; 
    var puntoFinal = alto - puntoInicial;

    c.beginPath();
    c.moveTo(0, puntoFinal);
    c.lineTo(puntoFinal, 0);
    c.stroke();
    c.closePath();
}

for(linea = 1; linea <= limiteY; linea++)
{
    var punto = linea * anchoLinea; 
    
    c.beginPath();
    c.moveTo(punto, alto);
    c.lineTo(alto, punto);
    c.stroke();
    c.closePath();
}
}