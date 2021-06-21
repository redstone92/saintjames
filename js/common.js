$(function(){
  $("#gnb .inner .left .man").mouseover(function(){
    $("#submenu.dm1").css("visibility","hidden");
    $("#submenu.dm1").css("visibility","visible");
  }).mouseout(function(){
    $("#submenu.dm1").css("visibility","hidden");
  });

  $("#gnb .inner .left .woman").mouseover(function(){
    $("#submenu.dm2").css("visibility","hidden");
    $("#submenu.dm2").css("visibility","visible");
  }).mouseout(function(){
    $(".woman #submenu.dm2").css("visibility","hidden");
  });

  $("#gnb .inner .right .sale").mouseover(function(){
    $("#submenu.dm3").css("visibility","hidden");
    $("#submenu.dm3").css("visibility","visible");
  }).mouseout(function(){
    $(".sale #submenu.dm3").css("visibility","hidden");
  });
});

$(function(){
  $(".banBtn .button.btn_p1").click(function(){
    $(".product.p1").css("opacity","1");
    $(".button.btnbg").removeClass("btnbg");
    $(this).addClass("btnbg");
  })
  $(".banBtn .button.btn_p2").click(function(){
    $(".product.p1").css("opacity","0");
    $(".product.p2").css("opacity","1");
    $(".button.btnbg").removeClass("btnbg");
    $(this).addClass("btnbg");
  })
});

$(function(){
  $("#topmenu ul .search").click(function(){
    $("#search_area").slideToggle("fast");
  });
  $("#search_area .closebtn").click(function(){
    $("#search_area").css("display","none");
  });
});

$(function(){
  $(".page ul li").click(function(){
    $(".page ul li").removeClass("now");
    $(this).addClass("now");
  });
});

// $(function(){
//   let thisAfter = $("#separate ul li:after");
//   $("#separate ul li").click(function(){
//     $(thisAfter).css("background","#142652");
//   });
// });
