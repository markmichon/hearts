$(function() {
  var container = $('.hearts');
  var heart = $('.heart');
  var startWidth = $(window).height() /2 + 'px';
  $(container).on('mouseenter', '.heart', splitHeart);
});

heartTemplate = makeHeart();
function splitHeart() {
  tempHeart = $(this);
  console.log(tempHeart);
  size = $(this).css('width');
  size = parseInt(size, 10);
  // console.log(fontSize);
  newSize = size;
  heartSize = Math.floor(newSize / 2);
  // newWidth = (size / 2) + 'px';
  // console.log(newSize);
  heartObject = $(heartTemplate);
  heartObject.find('.heart-frame').each(function(){
    $(this).css({'width': newSize + 'px', 'height' : newSize + 'px'});
    $(this).children().css({'width': heartSize + 'px', 'height': heartSize + 'px',  'backgroundColor' : pickColor()});
  });

  $(tempHeart).fadeOut(300);
  $(this).replaceWith($(heartObject).fadeIn(300));
}

function makeHeart() {
  var heartNode = '<div class="heart-frame"><div class="heart"></div></div>';
  heartTemplate = '<div class="hearts">' + '<div class="row">' + heartNode + heartNode + '</div><div class="row">' + heartNode + heartNode + '</div></div>';
  return heartTemplate;
}

function pickColor() {
  var colors = [ '#facade', '#f9bad4', '#f7abcb', '#f69bc1', '#f48cb7', '#333'];
  var random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  return colors[random];
}