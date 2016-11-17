$(function(){

	$('.cli-h1').click(function(){
		$('.ConRight1').css("display","block");
		$('.ConRight2').css("display","none");
		$('.ConRight3').css("display","none");

	});
	$('.cli-h2').click(function(){
		$('.ConRight1').css("display","none");
		$('.ConRight2').css("display","block");
		$('.ConRight3').css("display","none");

	})
	$('.cli-h3').click(function(){
		$('.ConRight1').css("display","none");
		$('.ConRight2').css("display","none");
		$('.ConRight3').css("display","block");

	})
});