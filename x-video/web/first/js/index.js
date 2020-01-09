$(function () {
	$(window).scroll(function(){
		start()
    	if ($(window).scrollTop() > 40) {
            $('.urlColor').css({'background':'rgba(0,0,0,0.8)','transition':'1s'})
            $('.div_top').show()
        }else{
            $('.div_top').hide()
            $('.urlColor').css('background','transparent')
        }
    })
    start()
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
})