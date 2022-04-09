var loadFile = function() {
  var content = 0;
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
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
      });
    },1000);
  });
};

$(function() {
  loadFile();
});
