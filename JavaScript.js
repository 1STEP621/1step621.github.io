var loadFile = function() {
  $.ajax({
      type: "GET",
      url: "https://1step621.github.io/head.html",
      dataType: "html"
    })
    .done(function(contents) {
      $("head").prepend(contents);
    });
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
  console.log("test")
});

var loadStart = function() {
  $("body").prepend('<div id="loading" style="background-color: var(--white); width: 100%; height: 100vh; position: fixed;"></div>');
  $("#loading").css("display", "block");
}

var loadEnd = function() {
  $("#loading").css("display", "none");
});

$(function() {
  loadStart();
  loadFile()
  .then(loadEnd);
});
