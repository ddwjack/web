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
		// console.log(14)
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
	function AaltObj(type) {
		$('#video_alert_hd').show()
		$('#video_alert_hd a.vid_ale_gb').attr('this-v',type)
	}
	function altShow() {
		$('.gongAlt').show()
		$('#video_alert_hd').hide()
	}
	function playVid() {
		var thisV = $('#video_alert_hd a.vid_ale_gb').attr('this-v')
		$('#video_alert_hd').hide()
		window.location.href = 'videoplay.html?='+thisV
	}
	// 显示二维码
	function altSh(re,type) {
		console.log(re)
			$('.gongAlt').show()
		if (re == '1') {
			$('#img_guanbi_ind').attr({'data-l':'1','data-t':type})
		}else if(re == '2'){
			$('#img_guanbi_ind').attr({'data-l':'2','data-t':type})
		}else if(re == '3'){
			$('#img_guanbi_ind').attr({'data-l':'3','data-t':type})
		}else if(re == '4'){
			$('#img_guanbi_ind').attr({'data-l':'4','data-t':type})
		}else{
			$('#img_guanbi_ind').attr('data-l','0')
		}
	}
	// 关闭二维码
	function altNo() {
		console.log()
		// console.log($('#img_guanbi_ind').attr('data-l'))
		var thisL = $('#img_guanbi_ind').attr('data-l')
		var thisT = $('#img_guanbi_ind').attr('data-t')
		if (thisL == '1') {
			window.location.href = 'videomore.html?='+thisT
		}else if(thisL == '2'){
			window.location.href = 'imagemore.html?='+thisT
		}else if(thisL == '3'){
			window.location.href = 'audiomore.html?='+thisT
		}else if(thisL == '4'){
			window.location.href = 'bookmore.html?='+thisT
		}else{
			$('.gongAlt').hide()
		}
	}
	// 获取分页页数
	function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }