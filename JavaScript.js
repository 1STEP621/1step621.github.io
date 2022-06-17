const loadFile = function() {
  let content = 0;
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

const setForSeo = function() {
  let title = $('meta[property="og:title"]').attr("content");
  let desc = $('meta[property="og:description"]').attr("content");
  $("head").append("<title>"+title+"</title>")
  $("head").append('<meta name="description" content="'+desc+'">')
};

const addDiaryBox = function() {
  let titles, dates, length;
  let title, date, content;
  $.ajax({
      type: "GET",
      url: "https://1step621.github.io/diary-data/index.html",
      dataType: "html"
    })
    .done(function(result) {
      titles = $(result).filter(".title");
      dates = $(result).filter(".date");
      length = $(result).filter(".title").length;
      for (i = 0; i < length; i++) {
        title = titles[i].outerText;
        date = dates[i].outerText;
        content = '<a href=article?id=' + date + ' class="block-link"><div class="diary-box"><h1>' + title + '</h1><time>' + date + '</time></div></a>';
        $(".test").append(content);
      }
    });
};

$(function() {
  loadFile();
  const url = $(location).attr("href");
  const pathName = $(location).attr("pathname");
  if (url.match(/^.*diary$/) != null) {
    addDiaryBox();
  }
  if (pathName == article) {
    /*addDiary();*/
  } else {
    setForSeo();
  }
});
