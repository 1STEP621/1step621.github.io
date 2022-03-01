var loadFile = function() {
  $("body").prepend('<div id="loading" style="background-color: var(--white); width: 100%; height: 100vh; position: fixed; z-index: 9999;"></div>');
  $.ajax({
    type: "GET",
    url: "https://1step621.github.io/head.html",
    dataType: "html"
  })
  .done(function(contents) {
    $.when(
      $("head").prepend(contents),
      $("#header").load("https://1step621.github.io/header.html"),
      $("#footer").load("https://1step621.github.io/footer.html"),
      console.log("load")
    )
    .done(function() {
      $("#loading").remove();
      console.log("end");
    });
  })
};

$(function() {
  loadFile();
});
