//导航栏高亮控制
if($("body").attr("data") == "home") {
	$(".nav .frist-nav>li").eq(0).addClass('li-active');
} else if($("body").attr("data") == "open") {
	$(".nav .frist-nav>li").eq(1).addClass('li-active');
} else if($("body").attr("data") == "build") {
	$(".nav .frist-nav>li").eq(3).addClass('li-active');
} else if($("body").attr("data") == "skill") {
	$(".nav .frist-nav>li").eq(4).addClass('li-active');
} else if($("body").attr("data") == "education") {
	$(".nav .frist-nav>li").eq(5).addClass('li-active');
} else if($("body").attr("data") == "district") {
	$(".nav .frist-nav>li").eq(6).addClass('li-active');
} else if($("body").attr("data") == "interaction") {
	$(".nav .frist-nav>li").eq(7).addClass('li-active');
}
//鼠标悬停导航栏效果
$(".nav .frist-nav>li").mouseenter(function() {
	$(this).siblings().removeClass('li-active')
	$(this).addClass('li-active')
})
$(".nav .frist-nav>li").mouseleave(function() {
	$(this).removeClass('li-active')
	if($("body").attr("data") == "home") {
		$(".nav .frist-nav>li").eq(0).addClass('li-active');
	} else if($("body").attr("data") == "open") {
		$(".nav .frist-nav>li").eq(1).addClass('li-active');
	} else if($("body").attr("data") == "build") {
		$(".nav .frist-nav>li").eq(3).addClass('li-active');
	} else if($("body").attr("data") == "skill") {
		$(".nav .frist-nav>li").eq(4).addClass('li-active');
	} else if($("body").attr("data") == "education") {
		$(".nav .frist-nav>li").eq(5).addClass('li-active');
	} else if($("body").attr("data") == "district") {
		$(".nav .frist-nav>li").eq(6).addClass('li-active');
	} else if($("body").attr("data") == "interaction") {
		$(".nav .frist-nav>li").eq(7).addClass('li-active');
	}
})

//		top高亮控制
$(".top .email").mouseenter(function() {
	$(this).siblings().removeClass("top-active")
	$(this).addClass("top-active")
	$(this).mouseleave(function() {
		$(this).removeClass("top-active")
	})
})
$(".top .link").mouseenter(function() {
	$(this).siblings().removeClass("top-active")
	$(this).addClass("top-active")
	$(this).mouseleave(function() {
		$(this).removeClass("top-active")
	})
})
//换皮肤
var cSwiper = new Swiper('.change-swiper', {
	slidesPerView: 5,
	spaceBetween: 10,
	mousewheel: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
$(".change-swiper .swiper-wrapper .swiper-slide").click(function() {
	var src = $(this).children("img").attr("src")
	console.log(src)
	$("body").css("background-image", "url(" + src + ")")
})
$(".tab").click(function() {
	$(".bg-change").addClass("bg-change-active")
})
$(".tog").click(function() {
	$(".bg-change").removeClass("bg-change-active")
})
//友情链接
$(".footer select").change(function() {
	window.location.href = $(this).val()
})
//添加收藏

function shoucang(sTitle, sURL) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch(e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch(e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}

// 设置为主页 
function SetHome(obj, vrl) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(vrl);
	} catch(e) {
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch(e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		} else {
			alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
		}
	}
}
//返回顶部
$(".re").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 100);
	return false;
});

//日期
var topDate = new Date()
var y = topDate.getFullYear()+'年'
var m = topDate.getMonth()+1+'月'
var d = topDate.getDate()+'日'
var a = new Array("日", "一", "二", "三", "四", "五", "六");  
var week = topDate.getDay();  
var str = " 星期"+ a[week];  


var td = y+m+d+str

$(".top-date").text(td)

