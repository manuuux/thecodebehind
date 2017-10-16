function sigueme()
{
//Capto las coordenads del puntero.
var x = window.event.x - 100;
var y = window.event.y - 100;

//Y se las coloco al div.
document.getElementById("siguelo").style.left = x + "px";
document.getElementById("siguelo").style.top = y + "px";
}
