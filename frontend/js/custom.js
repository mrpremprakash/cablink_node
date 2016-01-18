$('.search-i').click(function(){$('.search').slideToggle('200').addClass('active');});
$('.search .btn').click(function(){$('.search').slideUp('200').removeClass('active');});

$('.navbar-nav i').click(function(){
	if($(this).parent().hasClass('show'))
	{
		$(this).parent().removeClass('show').find('ul').slideUp(500);
	}
	else{
	$(this).parent('li').addClass('show').find('ul').slideDown(500);

	$(this).parent().siblings('li').removeClass('show').find('ul').slideUp(500);
	
	}
	
	});

$("#home-slider, .sale-collection, .sale-cate-slide").owlCarousel({
  autoPlay: true,
  slideSpeed : 300,
  pagination : true,
  singleItem:true,
  mouseDrag : false
});

$(".feature-slider").owlCarousel({
  autoPlay : true,  
  items : 4,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [991,3],
  itemsTablet:[768,3],
  itemsTablet: [767,2],
  mouseDrag : false
});

$(".feature-slider2").owlCarousel({
  autoPlay : true,  
  items : 4,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [991,2],
  itemsTablet:[768,2],
  itemsDesktopSmall : [767,2],
  mouseDrag : false
});

$(".clients").owlCarousel({
  autoPlay : true,
  slideShow : 1,
  items : 8,
  itemsDesktop : [1199,6],
  itemsDesktopSmall : [991,6],
  itemsTablet:[768,6],
  itemsDesktopSmall : [767,4],
  itemsMobile:[480,3],
  mouseDrag : false
});


$(".may-like").owlCarousel({
  autoPlay : false,  
  items : 6,
  itemsDesktop:[1199,4],
  itemsDesktopSmall:[991,3],
  itemsTablet:[768,3],
  itemsMobile:[480,1],
  mouseDrag : false
});

 
$('.rate').raty({
  score: function() {
    return $(this).attr('data-score');
  }
}); 

$('.pro-slider img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src'), 'data-other-src': $(this).attr('src') 
    });
 });	
 
 
$('.forgot-link').click(function(){
 $('.login').fadeOut(200);
});

$('.forgot-sect .close').click(function(){
 $('.modal-backdrop').fadeOut(200);
});


$(".cate-list ul li > a").click(function () {
	$(this).next(".cate-list ul li ul").slideToggle("slow").siblings(".cate-list ul li ul:visible").slideUp("slow");
	$(this).toggleClass("active");
	$(this).siblings("a").removeClass("active");
 });
 
 

// custom select
$(".custom-select").each(function(){
	$(this).wrap( "<span class='select-wrapper'></span>" );
	$(this).after("<span class='holder'></span>");
});

$(".custom-select").change(function(){
	var selectedOption = $(this).find(":selected").text();
	$(this).next(".holder").text(selectedOption);
}).trigger('change');



$('#write-review').click(function(){
	if($('.nav-tabs li').hasClass('active')){
		$('.nav-tabs li').removeClass('active')
		}
		
		if($('.tab-pane').hasClass('active')){
		$('.tab-pane').removeClass('active')
		}
	$('.wr').addClass('active in');
});
	
	
$('a.page-scroll').bind('click', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top - 65
	}, 1500, 'swing');
	event.preventDefault();
});	
	
  var sync1 = $(".sync1");
  var sync2 = $(".sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 7,
    itemsDesktop      : [1199,5],
    itemsDesktopSmall     : [979,4],
    itemsTablet       : [768,5],
	itemsDesktopSmall : [767,7],
    itemsMobile       : [479,4],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(".sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($(".sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(".sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }

$('.ex1').zoom();	

$('.cls-open').click(function(){
	
});