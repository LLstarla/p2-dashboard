function RSSWidget (url){

  rss              = this;
  rss.FEED_URL     = url; 
  
  rss.JSON     = new Array(); //create a new array
  rss.widgetHolder = $('.rss-widget ul');
  rss.storiesLimit = 5;

  $.ajax({
    url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(rss.FEED_URL),
    dataType : 'json',
    success  : function (data) {
      if (data.responseData.feed && data.responseData.feed.entries) {
        $.each(data.responseData.feed.entries, function (i, e) {
          rss.JSON.push({ //add objects to the array
            title: e.title,
            author: e.author,
            content: e.content || "",
            link: e.link
          });
        });

        if(rss.storiesLimit > rss.JSON.length) 
          rss.storiesLimit = rss.JSON.length;

        for(var i=0; i<rss.storiesLimit; i++){
          rss.renderBlogItem(rss.JSON[i]); 
        }
        
        $('.rss-widget li').each(function () {
          var delay = ($(this).index()/rss.storiesLimit) + 's';
          $(this).css({
              webkitAnimationDelay: delay,
              mozAnimationDelay: delay,
              animationDelay: delay
          });
        });
        
        
      }
    }
  });

  rss.renderBlogItem = function (object){
    var item  = '<li class="blog-item">';
        item += '<a href="'+ object.link +'">';
        item += '<div class="blog-item-title">' + object.title + '</div>';
        item += '<div class="blog-item-author">' + object.author + '</div>';
        // item += '<div class="blog-item-content">' + object.content + '</div>';
        item += '</a>'
        item += '</li>';

    rss.widgetHolder.append(item);
  }

}

//awake the function
RSSWidget("http://www.ewu.edu/about/ewu-news?rss=true");