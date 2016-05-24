$(document).ready(function(){
  //$("#psych_description").css("display","none");
  //$("#percussion_description").css("display","none");
  //when you mouse over the psych image, make the psych_display visible
  // $("#psych").mouseover(function(){
  //   $("#percussion_description").css("display","none");
  //   $("#psych_description").css("display","inline-block");
  // });
  //when you mouse over the percussion image, make the percussion_display visible
  $("#percussion").mouseover(function(){
    $("#psych_description").css("display","none");
    $("#percussion_description").css("display","inline-block");
  });
  $("#psych").click(function(){
    $("#psych_description").fadeIn("slow", function() {
      $("#percussion").click(function(){
    $("#percussion_description").fadeIn("slow", function()
    });
  });
})
