var loadFile = function() {
  var content = 0;
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
  $("#projects").load("https://1step621.github.io/projects/list.html");
  console.log("load");
  $.ajax({
      type: "GET",
      url: "https://1step621.github.io/head.html",
      dataType: "html"
    })
    .done(function(result) {
      content = result;
      console.log(content);
      $.when(
          $("head").prepend(content)
        )
        .done(function() {
          console.log("end");
        });
    });
};

var setOgp = function() {
  var title = $("title").text();
  var url = $(location).attr("href");
  var desc = $(".wrapper").text().slice(0, 80);
  var head = $(head).text();
  if (head.match("(?!/og:type/)") != null) {
    $("head").append("<meta property=\"og:type\" content=\"artile\">");
  }
  if (head.match("(?!/og:description/)") != null) {
    $("head").append("<meta property=\"og:description\" content=\"" + desc + "...\">");
  }
  $("head").append("<meta property=\"og:title\" content=\"" + title + "\">");
  $("head").append("<meta property=\"og:url\" content=\"" + url + "\">");
  $("head").append("<meta property=\"og:site_name\" content=\"1step621.github.io\">");
  $("head").append("<meta property=\"og:image\" content=\"https://1step621.github.io/assets/1step621_icon.png\">");
};

$(function() {
  loadFile();
  setOgp();
});
