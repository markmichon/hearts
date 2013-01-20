$(function() {
  var container = $('.hearts');
  var heart = $('.heart');
  container.width($(window).height());
  $(container).on('mouseenter', '.heart', splitHeart);

});
var heartTemplate = '<div class="hearts"><div class="row"><img class="heart" src="img/heart.svg" /><img class="heart" src="img/heart.svg" /></div><div class="row"><img class="heart" src="img/heart.svg" /><img class="heart" src="img/heart.svg" /></div></div>';
function splitHeart() {
  width = $(this).width();
  height = $(this).height();
  newWidth = width / 2;
  newHeight = height / 2;
  $(this).width(newWidth + 1);
  $(this).height(newWidth + 1);
  console.log(heartTemplate);
  heartObject = $(heartTemplate);
  heartObject.find('img').each(function(){
    this.width = newWidth;
    this.height = newWidth;
    $(this).css('color', pickColor());
  });

  console.log(heartObject.width(width));
  console.log(heartObject);
  // $(this).clone().appendTo($('.hearts'));
  $(this).replaceWith(heartObject);
};

function makeHeart(elem) {
  elem.appendTo($('.hearts'));
}

function pickColor() {
  var colors = [ '#facade', '#f9bad4', '#f7abcb', '#f69bc1', '#f48cb7']
  var random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  return colors[random];
}