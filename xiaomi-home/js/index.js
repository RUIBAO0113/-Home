$(function(){
	// ($(".nav-x .nav-contanier .nav-right .right-shopping").hover(function(){
	// 	$(".nav-x .nav-contanier .nav-right .right-shopping .divbox ").stop().slideDown();
		
	// }
	// ,function(){
	// 	$(".nav-x .nav-contanier .nav-right .right-shopping .divbox ").stop().slideUp();
	// 	// $(".nav-x .nav-contanier .nav-right .right-shopping .divbox ").style.zIndex=999
	// }
	// )
	// ),
	
	($(".main-nav-center .can").hover(
	function(){
		var index=$(this).index();
		$(".main-nav-slide").stop().slideDown(200);
		$(".main-nav-slide ul").eq(index).show().siblings().hide();
	},function(){
		$(".main-nav-slide").stop().slideUp();
	})
	),
	($(".main-nav-slide").hover(
		function(){
			$(this).stop().show()
		},
		function(){
			$(this).stop().slideUp(300);
		}
	)),
	
	
	
	
	
	
	$(function(){
		$("#banner .swiper-menu ul li").hover(
		function(){
			var index=$(this).index();
			$("#banner .menu-sum ").show()
			$("#banner .menu-sum ul").eq(index).show().siblings().hide()
			},
			function(){
				$("#banner .menu-sum ").hide()
			},
			function(){
				$("#banner .swiper-button-p").hide()
			}
			
		)
	}),
	($("#banner .menu-sum").hover(
		function(){
			$(this).stop().show()
		},
		function(){
			$(this).stop().slideUp(300);
		}
	)),
	
	
	
	
	
	
	
	$(function(){
		  var mySwiper = new Swiper ('#banner', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: true, // 循环模式选项
		
		    autoplay:{
				autoplay:true,
				delay:4000
			},
			
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-n',
		      prevEl: '.swiper-button-p',
		    },
		    
		    // 如果需要滚动条
		    scrollbar: {
		      el: '.swiper-scrollbar',
		    },
		  })      
	}),
	
	$(function(){
		  var flashSwiper = new Swiper ('#flashSwiper', {
		    direction: 'horizontal', // 垂直切换选项
		    loop: false, // 循环模式选项
		    slidesPerView :4,
		  spaceBetween : 15,
		  autoplay:{
		  	autoplay:true,
		  	delay:2000
		  },
		  navigation: {
		        nextEl: '.swiper-flash .swiper-button-next',
		        prevEl: '.swiper-flash .swiper-button-prev',
				disabledClass: 'my-button-disabled',
		      },
		  })      
		
	})
	
	

})

	

