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

var setForSeo = function() {
  var title = $('meta[property="og:title"]').attr("content");
  var desc = $('meta[property="og:description"]').attr("content");
  $("head").append("<title>"+title+"</title>")
  $("head").append('<meta name="description" content="'+desc+'">')
};

var addDiary = function() {
  $.ajax({
      type: "GET",
      url: "https://api.scratch.mit.edu/studios/31762993/comments/?offset=0&limit=40",
      dataType: "json"
    })
    .done(function(result) {
      length = Object.keys(result).length;
      for (var i = 0; i < length; i++) {
        var content = result[i]["content"];
        var date = result[i]["datetime_created"].slice(0, 10);
        var id = result[i]["id"];
        var html = '<a href="article?id=' + id + '" class="block-link"><div class="diary-box"><h1>' + content + '</h1><time>' + date + '</time></div></a>';
        $(".diary-boxes .test").append(html);
      }
    });
};

$(function() {
  setForSeo();
  loadFile();
  addDiary();
});
