$( document  ).ready(function(){
$(  "#colourchanger" ).on( "click" , function(){
	var color  = '#'+Math.floor( Math.random()*16777215   ).toString( 16 );
$( "body"  ).css( {"background-color" : color } );})});
