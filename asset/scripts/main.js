//click vao icon bar
$('#btn_bars').click(function(){
  $('.right').toggleClass('active-right');
});

//xem them san pham
$('#moreDetails').click(function(){
  $('.addMore').css('display','flex');
  $('.pagination').css('display','flex');
  $('.pagination').css('margin','15px auto');
  $('#removeBtn').remove();
});

//click vao nut search
$('#search').click(function(){
  $('.search').toggleClass('active-search');
});

//click vao nut xem truoc
$('.fas.fa-eye').click(function(){
  $('.quickview').toggleClass('quickview-active');
});

//click vao nut xoa xem truoc
$('#deletequickview').click(function(){
  $('.quickview-active').removeClass('quickview-active');
});


//go to top
window.addEventListener("scroll", function(){
  var showGoToTop = 700;
  if ($(this).scrollTop() >= showGoToTop) 
      $(".go-to-top").fadeIn();       
  else
      $(".go-to-top").fadeOut();               
});

$(".go-to-top").click(function(){
  $('html, body').animate({ scrollTop: 0 });
});


