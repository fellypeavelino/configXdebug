jQuery(document).ready(function ($) {
	$("#dm-header-icons ul li").hover(function() {
		$(this).stop().animate({ backgroundColor: "#bfd630" }, 600);
	},function() {
		$(this).stop().animate({ backgroundColor: "#f6f6f6" }, 400);
	});
	
	$(".dm-container.books .dm-container-body ul li").hover(function() {
		$(this).stop().animate({ backgroundColor: "#f6f6f6" }, 600);
	},function() {
		$(this).stop().animate({ backgroundColor: "#ffffff" }, 400);
	});
	
	$("#dm-footer ul li.header a").click(function(){
		$('html, body, .content').animate({scrollTop: '0px'}, 300);
		return false;
	});
});

