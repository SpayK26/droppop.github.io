


$(document).ready(function() {
	
	
	$('.nav-icon').on('click', function(e){
		$(this).toggleClass('open');
		if ($(window).width() <= 1000) {
			if ($('.nav-icon').hasClass('open')) {   
				$('.navigations').slideDown(300).css('display', 'flex');
			} else{    
				$('.navigations').slideUp(300).css('display', 'flex');

			}
		}
		else {
			$('.nav-icon').removeClass('open');
		}
	});

	
	
	
	
	
	
	/* Content show */
	$('#main .content-wrap').addClass('on');
	
	/*  Scrolling  */
	
	// Add smooth scrolling to all links
	$(".navigations a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
      	scrollTop: $(hash).offset().top
      }, 800, function(){
      	
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
	
  // SCROLL TO BLOCK
  var waypoints = $('#descr').waypoint(function(direction) {
  	
  	if($('.collumn').hasClass('show')){
  		$('.collumn').removeClass('show');
  	}
  	else{
  		$('.collumn').addClass('show');};
  	}, {
  		offset: '65%'
  	});


//List scroll
$(document).scroll(function() {
	var doc_h = $(window).height();
	var $target = $('.adv-list li');
	$.each($target,function(){
		var el_top = $(this).offset().top - $(window).scrollTop();
		var half_h = doc_h/2;
		// console.log(half_h+","+ el_top );
		if (el_top>=(doc_h*0.35) && el_top<=(doc_h*0.52)){
			$(this).addClass('act');
		}
		else{
			
			$(this).removeClass('act');
			
		};
	});
	

	
});




/* STEPS SHOWING */
setInterval(function(){
	var $target = $('.steps li');
	var hold = 200;
	if ($('.steps li:last-child').css('display') == 'none' ){ 
		$.each($target,function(i,t){
			var $this = $(t);
			setTimeout(function(){ $this.show('normal'); },i*hold);
		// $('.steps li').delay(100).hide();
	});
	}
	else{
		setTimeout(function(){
			$('.steps li').hide();
		},4000);
	};
	
}, 4000);


check = true; 




$(document).scroll(function() {

	var lastLi = $('.adv-list li').last().offset().top;
	var scroll = $(window).scrollTop()
	var menuHeight = $('.navi-wrapper').height();
	var height = scroll + menuHeight;
	
	
	if (scroll  <= lastLi-120) {
		console.log('da');
		

			$('.stick').removeClass('full-width').removeClass('anim-slide').trigger("sticky_kit:detach").stick_in_parent();
			$('.background > *').removeAttr('style');
			position = jQuery('.parallax').position();
		


	} else{
		var waypoints1 = $('#prlx-s').waypoint(function(direction) { 
			
			
			if (check == true){
				$(".stick").trigger("sticky_kit:detach");
				
				position = jQuery('.parallax').position();
				// jQuery('.parallax').css({'vertical-align':'bottom','display':'block','margin-left':'auto','margin-top':'-6%'});
				$('.parallax').addClass('full-width');
				$('.workplace').css({'width':'90%','left':'5%'});
				$('.chair').css({'opacity': '0'});
				$('.table-legs').css({'opacity': '0'});
				$('.wall-layer').css({'display': 'none'});
				$('.workplace').css({'bottom': '0','top': 'auto','position': 'relative'});
				$('.adv-list').css({'margin-bottom': '0'})
				
				// setTimeout(function(){
				// 	jQuery('.parallax').addClass('anim-slide').css({'position':'relative','width': '100%', 'top': '0'});/*!!!write top for different window-width!!!*/
				// },100);
				setTimeout(function(){
					
					$('.content-wrap').css({'height': 'auto'})
					$('.wall').css({'bottom': '0','top': 'auto','opacity':'1'});
					$('div#wrksps-title').css({'opacity': '1'});
					$('[class^=smoke]').css({'opacity': '1'});
				},1000);
				// check = false;
			};


		}, {
			offset: '20%'
		});

	}
});









$( ".adv-el" ).mouseover(function() {
	var speedy = $(this).find(".adv-emblem-wrapper");
	$(speedy).addClass('speedy');
});

$( ".adv-el" ).mouseleave(function() {
	var speedy = $(this).find(".adv-emblem-wrapper");
	$(speedy).removeClass('speedy');
});

});



