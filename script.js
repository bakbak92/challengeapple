$(document).ready(function(){
  $("#menugliss").hide();
  $(".openmenu").click(function(){
    $("#menugliss").toggle("blind", 500);
  });
  $(".openmenu").click(function(){
    $("#menugliss").hide();
  });
});
