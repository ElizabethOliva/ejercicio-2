
window.onload = function()
{
    var precioradio= 0;
var ensaladaw= 0;
var papasfritasw= 0;
var pollograndew= 0;
var pollomedianow= 0;
var pollopequeñow= 0;
var bebidagrandew= 0;
var bebidapequeñaw= 0;
var bebidamedianaw= 0;
var cafew= 0;
var total= 0;
var postrew= 0;


	var boton_calcular = document.getElementById("botonresolver");
	boton_calcular.onclick = function()
	{                 
		var imput_radio = document.formularioregistro.combobox;
		for (x = 0; x < imput_radio.length; x++) 
		{
		     if (imput_radio[x].checked)
		   {
               if (x==0)
                {
                  precioradio= 7.25;
                
                }
                else
                { 

                  if (x==1) 
                  {
                     precioradio= 5.75;

                  }
                  else
                  {
                    precioradio= 3.50;
                  }

                }
             }
           }


if (document.formularioregistro.ensalada.checked == false )
 {

 }
 else
 {
                ensaladaw= 1.50;
 }

 if (document.formularioregistro.papasfritas.checked == false )
 {

 }
 else
 {
                papasfritasw= 1.25;
 }
 if (document.formularioregistro.piezadepollogrande.checked == false )
 {

 }
 else
 {
                pollograndew= 1.75;
 }
 if (document.formularioregistro.piezadepollomediana.checked == false )
 {

 }
 else
 {
                pollomedianow= 1.50;
 }
 if (document.formularioregistro.pollopequeño.checked == false )
 {

 }
 else
 {
                pollopequeñow= 1.25;
 }
 if (document.formularioregistro.bebidagrande.checked == false )
 {

 }
 else
 {
                bebidagrandew= 1.50;
 }
 if (document.formularioregistro.bebidamediana.checked == false )
 {

 }
 else
 {
                bebidamedianaw= 1.25;
 }
 if (document.formularioregistro.bebidapequeña.checked == false )
 {

 }
 else
 {
                bebidapequeñaw= 1;
 }
 if (document.formularioregistro.cafe.checked == false )
 {

 }
 else
 {
                cafew= 0.5;
 }
  if (document.formularioregistro.postre.checked == false )
 {

 }
 else
 {
                postrew= 1.25;
 }


              document.formularioregistro.resultado.value = ensaladaw+precioradio+papasfritasw+pollopequeñow+pollomedianow+pollograndew+bebidapequeñaw+bebidamedianaw+bebidagrandew+cafew+postrew;
              

var boton_calcular = document.getElementById("botonresolver2");
  boton_calcular.onclick = function()
  {       
  with(document){
 write("<br> EL CLIENTE COMENTO QUE: <br> sugerencia: <br>" + document.formularioregistro.txtsugerencia.value + "<br><br> EL COSTO TOTAL FUE DE: <br> $" + document.formularioregistro.resultado.value  );
}


       
  }   

   }
 }
 

 function ocultar(){
 document.all['txtsugerencia'].style.visibility="hidden";
 }
                    
 function mostrar(){
  document.all['txtsugerencia'].style.visibility="visible";
  }
           
                





