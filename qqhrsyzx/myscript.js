$(function(){
$('.wrapper-more .news-detail .module-title').text($('.nsy-setfont').text());

//tab
$(".tabs li").hover(function() {
	var _this=$(this),
		s=_this.index(),
		$pane=_this.parents('.module').find('.tab_pane').eq(s);
	a_s_r(_this,'cur');
	a_s_r($pane,'cur');
});
$('.tabs li a:first,.tpgd a').click(function(){
	return false;
});
//----------


//菜单选中
var id=window.location.search.split("kId=")[1];
	a_s_r($('.nav a[href$="\='+id+'"]').parents('li'),'active');
//----------


//多级菜单
$('.nav ul > li').hover(function(){
	$(this).addClass('cur');
},function(){
	$(this).removeClass('cur');
})
$('.nav').find('li').each(function(){
	if($(this).find('ul').length > 0) {
		$(this).hover(function(){
			$(this).find('>ul').stop(true,true).slideDown();
		},function(){
			$(this).find('>ul').stop(true,true).hide();
		});
	}
});
//----------

/*//新闻翻动
function news(i){
	var $tab_pane=$('#xwzx .bd .tab_pane:eq('+i+')'),
		$li=$tab_pane.find('li'),
		li_len=$li.length,
		liNum=a=0,
		html='';
	for(;a<li_len;a++){
		html+='<a>'+(a+1)+'</a>';	
	}
	$tab_pane.append('<div class="news_num">'+html+'</div>');
	var $num=$('.news_num a');
	$num.eq(0).addClass('current').siblings().removeClass('current'); 
	setInterval(function(){
				liNum++;
				liNum=liNum/li_len;
				a_s_r($num.eq(liNum),'current');
				$li.eq(liNum).show().siblings().hide();
				
		},10000)
	$num.hover(function(){
		var index=$(this).index();
		a_s_r($num.eq(index),'current');
		$li.eq(index).show().siblings().hide();
		liNum=index;
	})
}
news(0);
news(1);
news(2);
//---------*/

})
function nsyname(o,n){
	o.text(function(){return $(this).parents('.module').find(n).data('nsyname')});
}

function a_s_r(o,c){
	o.addClass(c).siblings().removeClass(c);	
}
