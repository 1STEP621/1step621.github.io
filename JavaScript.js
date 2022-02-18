$(function() {
  var $head = 0;
  $($head).on("load","https://1step621.github.io/head.html");
  $("head").append($head);
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
});
