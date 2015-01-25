var listItem = $('#menu-selector > li');
  
$(listItem).click(function() {
  $(listItem).removeClass('js-is-active');
  $(this).toggleClass('js-is-active');
});