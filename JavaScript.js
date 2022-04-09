var loadFile = function() {
  var content = 0;
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
  $("head").prepend('<div id="loading" id="width: 100%; height: 100vh; background-color: #ffffff; position: fixed; z-index: 1000;">');
  console.log("load");
  $.ajax({
    type: "GET",
    url: "https://1step621.github.io/head.html",
    dataType: "html"
  })
  .done(function(result){
    setTimeout(function(){
      content = result;
      console.log(content);
      $.when(
        $("head").prepend(content)
      )
      .done(function(){
        console.log("end");
        $("#loading").remove();
      });
    },1000);
  });
};

$(function() {
  loadFile();
});
