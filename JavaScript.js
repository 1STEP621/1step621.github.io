$(function(){
  $(".loading").css("display","block");
  $.ajax({
    type: "GET",
    url: "https://1step621.github.io/head.html",
    dataType: "html"
  })
  .done(function(contents){
    $("head").prepend(contents);
    $(".loading").css("display","none");
  });
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
});
