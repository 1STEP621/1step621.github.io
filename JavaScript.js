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

const setTitle = function() {
  let title = $('meta[property="og:title"]').attr("content");
  $("head").append("<title>"+title+"</title>");
};

const setDesc = function() {
  let desc = $('meta[property="og:description"]').attr("content");
  $("head").append('<meta name="description" content="'+desc+'">');
};

const addDiaryBox = function() {
  let meta, title, date;
  $.ajax({
      type: "GET",
      url: "https://1step621.github.io/diary-data/index.html",
      dataType: "html"
    })
    .done(function(result) {
      meta = $(result).filter('meta[name="diary-start"]');
      length = meta.length;
      for (i = 0; i < length; i++) {
        title = $(meta[i]).data("title");
        date = $(meta[i]).data("date");
        content = '<a href=article?id=' + date + ' class="block-link"><div class="diary-box"><h1>' + title + '</h1><time>' + date + '</time></div></a>';
        $(".diary-boxes").append(content);
      }
    });
};

const addDiary = function() {
  let data, id, thisMeta, thisTitle, thisDate, startNum, endNum, thisContent;
  let i = 0;
  let isFind = true;
  $.ajax({
      type: "GET",
      url: "https://1step621.github.io/diary-data/index.html",
      dataType: "html"
    })
    .done(function(result) {
      data = $(result);
      id = $(location).attr("search").slice(4, 14);
      i = 0;
      while (isFind) {
        isFind = $(data[i]).data("date") != id;
        i++;
        if (i > 1000) {
          isFind = false;
        }
      }
      startNum = i - 1;
      thisMeta = data[startNum];
      thisTitle = $(data[startNum]).data("title");
      thisDate = $(data[startNum]).data("date");

      isFind = true;
      i = startNum;
      thisContent = $();
      while (isFind) {
        isFind = $(data[i]).attr("name") != "diary-end";
        thisContent = thisContent.add($(data[i]));
        i++;
        if (i > 1000) {
          isFind = false;
        }
      }
      endNum = i - startNum - 1;
      thisContent = thisContent.not("meta");

      $(".wrapper").html("<h1>"+thisTitle+"</h1>");
      $(".wrapper").append(thisContent);
      $(".wrapper").append("<time>"+thisDate+"</time>");
      $("head").append("<title>"+thisTitle+"</title>");
    });
}

$(function() {
  loadFile();
  const pathName = $(location).attr("pathname");
  if (pathName == "/diary/") {
    addDiaryBox();
  }
  if (pathName == "/diary/article") {
    addDiary();
  } else {
    setTitle();
  }
  setDesc();
});
