$(document).ready(function(){

	// $("#menu-sinopse").hide();

   // jQuery methods go here...
   $("#fechar-sinopse").click(function() {
   		$("#menu-sinopse").fadeOut("slow");
   });

   $(".capa").click(function() {
   		$("#menu-sinopse").hide();
   		var titulo = $(this).find('h2').text();
   		var conteudo = $(this).find('p').text();
   		$("#menu-sinopse").find('h2').html(titulo);
   		$("#menu-sinopse").find('p').html(conteudo);
   		$("#menu-sinopse").fadeIn("slow");
   });

});