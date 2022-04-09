var loadFile = function() {
  var index = 0;
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
  console.log("load");
  $.ajax({
    type: "GET",
    url: "https://1step621.github.io/head.html",
    dataType: "html"
  })
  .done(function(result){
    index = result;
    console.log(index);
    $.when(
      $("head").prepend(index)
    )
    .done(function(){
      $(".loading").remove()
      console.log("end");
    });
  });
};

$(function() {
  loadFile();
});
