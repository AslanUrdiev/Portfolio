


$(document).ready(function() {
   $('a[href^="#1"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     if($.browser){
       $('body').animate( { scrollTop: destination }, 1100 );
     }else{
       $('html').animate( { scrollTop: destination }, 1100 );
     }
     return false;
   });
 });
 


$('.offer-but, .offer-but1').click(function (){
  $('.form-shadow').show();
  $('.form-window').show();
   $('.form-wrap').show();
  $('form').show();
  });

$('.form-shadow').click(function (){
  $('.form-shadow').hide();
  $('.form-window').hide();
  $('.form-wrap').hide();
  $('form').hide();
  });

$('.btn').click(function(){
  $('.thank').css('display', 'block');
   $('.thank').fadeOut(4000);
  $('.form-shadow').hide();
  $('.form-window').hide();
  $('.form-wrap').hide();
  $('form').hide();
}); 






var formName = $('.form-name-area > input').click(function(){
  $('.form-name-area > label').css({
                                "margin-top": "-25px",
                                "color" : "#fff"});
  return false;
});
var formPhone = $('.form-phone > input').click(function(){
  $('.form-phone > label').css({
                                "margin-top": "-25px",
                                "color" : "#fff"});
});
var formMail = $('.form-mail > input').click(function(){
  $('.form-mail > label').css({
                                "margin-top": "-25px",
                                "color" : "#fff"});
});






 

$(document).ready(function(){
    $("form").submit(function() {
      var form_data = $(this).serialize();
      $.ajax({
            type: "POST",
            url: "mail.php",
            data: form_data,
            success: function() {
               alert("Ваше сообщение отпрвлено!");
          }});
          return false;
    });
});











