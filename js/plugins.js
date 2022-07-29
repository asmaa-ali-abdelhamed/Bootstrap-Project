$(document).ready(function(){
	$('.carousel').carousel({
		interval:600
	});
	
	// show color option div when clic on color gear 
	$('.gear-check').click(function)() 
	{
		$('.color-option').toggle();
	});
	// change theme color on click 
	
	var colorli = $(".color-option ul li");
	
	colorli
		.eq(0).css("backgroundColor","#0895d1").end()
		.eq(1).css("backgroundColor","#e41b17").end()
		.eq(2).css("backgroundColor","#011680").end()
		.eq(3).css("backgroundColor","#6043a7");
	
	colorli.click(function()
	{
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
		
		//console.log( $(this).attr("data-value"))
	});
	var scrollbtn = $("#scroll-up");
	
});
// loding screen 
$(window).load(function()
{
	$("body").css("overflow","auto");
	
	
	$(".loading-overlay .indicator").fadeout(1000,
	function()
	{
		$(this).parent().fadeout(1000,
		function()
		{
			$(this).remove();
		});
	})
})

