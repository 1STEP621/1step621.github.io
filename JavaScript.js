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
      url: "https://scratch.mit.edu/site-api/comments/gallery/31762993/",
      dataType: "html"
    })
    .done(function(result) {
      console.log(result);
    });
};

$(function() {
  setForSeo();
  loadFile();
  addDiary();
});
