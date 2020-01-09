$(function () {
	document.documentElement.style.fontSize = document.body.clientWidth / 7.5 + 'px';
	$(window).scroll(function(){
		// start()
    	if ($(window).scrollTop() > 40) {
            $('.urlColor').css({'background':'rgba(0,0,0,0.8)','transition':'1s'})
            $('.div_top_img').show()
            if (($(document).scrollTop()) >= ($(document).height() - $(window).height())){
				$('.div_top_img').css('bottom','1.8rem')
			}else{
				$('.div_top_img').css('bottom','.6rem')
			}
        }else{
            $('.div_top_img').hide()
            $('.urlColor').css('background','transparent')
        }
    })
    // start()
	function start(){
		console.log(14)
	 	$('.src_img').not('[data-isLoaded]').each(function(){
		   	var $node = $(this)
		   	if(isShow($node,'.scroll_src') ){
		     	loadImg($node)
		   	}
	 	})
	}
    function isShow($node,liImg){
	    // return $node.offset().top <= $('li.li_acth2')[0].offsetHeight + $('li.li_acth2').scrollTop()
	    return $node.offset().top <= $(liImg)[0].offsetHeight*3 + $(window).scrollTop()
	}
	//加载图片
	function loadImg($img){
	    $img.attr('src', $img.attr('data-src')) //把data-src的值 赋值给src
	    $img.attr('data-isLoaded', 1)//已加载的图片做标记
	}

	var lastTouchEnd = 0;
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener('touchend', function(event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 阻止双指放大
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });
})