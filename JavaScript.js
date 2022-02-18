$(function() {
  var $head = 0;
  $($head).on("load","https://1step621.github.io/head.html");
  $("head").append($head);
  $("#header").on("load","https://1step621.github.io/header.html");
  $("#footer").on("load","https://1step621.github.io/footer.html");
});
