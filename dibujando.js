var dibujo, canvas, t, b;

function inicio()
{
	t = document.getElementById("texto");
	b = document.getElementById("boton");
	dibujo = document.getElementById("dibujito");
	canvas = dibujo.getContext("2d");

	b.addEventListener("click", grillaDiagonal);
	b.addEventListener("click", dibujarGrilla);

	//dibujarGrilla(canvas);
	//grillaDiagonal(canvas);

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
	canvas.fillStyle = "green"; 
	canvas.arc(250,250,100,(Math.PI * 2), false);
    canvas.fill(); 
	canvas.stroke();
	canvas.closePath();
}

function dibujarGrilla()
{
	c = canvas;
	var rayas = Number(t.value);
	var ancho = 500, alto = 500;
	var linea;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

	for(linea = 0; linea <= limiteX; linea++)
	{
		c.beginPath();
		c.strokeStyle = "black";
		c.moveTo(linea * anchoLinea, 0);
		c.lineTo(linea * anchoLinea, 500);
		c.stroke();
		c.closePath();
	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		c.beginPath();
		c.moveTo(0 , linea * anchoLinea);
		c.lineTo(500, linea * anchoLinea);
		c.stroke();
		c.closePath();
	}
}

function grillaDiagonal(c)
{
	var c = canvas;
	var rayas = Number(t.value);
    var ancho = 500, alto = 500;
    var linea;
    var anchoLinea = ancho / rayas;
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