$(document).ready(function(){
   	$('.links a').click(function() {
		var target = $(this).attr('href');
		
		$('html, body').animate({
		scrollTop : $(target).offset().top
		}, 800);
			
		
		return false;
	});
	
	$('.scrollup').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
		
	//modal
	var modal = document.getElementById('myModal');

	var btn = document.getElementById("myBtn");
	
	var span = document.getElementsByClassName("close")[0];

	var links1 = document.getElementsByClassName("scroll");
	
	btn.onclick = function() {
    modal.style.display = "block";
	}
	
	span.onclick = function() {
    modal.style.display = "none";
	}
	
	window.onclick = function(event) {
    	if (event.target == modal) {
        modal.style.display = "none";
    	}
	}	 


});