$(function() {
  var container = $('.hearts');
  var heart = $('.heart');
  var startWidth = $(window).height() /2 + 'px';
  // if (startWidth > $(window).width()) { startWidth = $(window).width();}
  // heart.css({'width' : startWidth, 'height' : startWidth});
  // console.log(startWidth);
  // container.width($(window).height());
  $(container).on('mouseenter', '.heart', splitHeart);

});
// var heartTemplate = '<div class="hearts"><div class="row"><img class="heart" src="img/heart.svg" /><img class="heart" src="img/heart.svg" /></div><div class="row"><img class="heart" src="img/heart.svg" /><img class="heart" src="img/heart.svg" /></div></div>';

// function splitHeart() {
//   width = $(this).width();
//   height = $(this).height();
//   newWidth = width / 2;
//   newHeight = height / 2;
//   $(this).width(newWidth + 1);
//   $(this).height(newWidth + 1);
//   console.log(heartTemplate);
//   heartObject = $(heartTemplate);
//   heartObject.find('img').each(function(){
//     this.width = newWidth;
//     this.height = newWidth;
//     $(this).css('color', pickColor());
//   });

//   console.log(heartObject.width(width));
//   console.log(heartObject);
//   // $(this).clone().appendTo($('.hearts'));
//   $(this).replaceWith(heartObject);
// };

/* Font Version */
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
    $(this).css({'width': newSize + 'px', 'height' : newSize + 'px'}); //frame
    $(this).children().css({'width': heartSize + 'px', 'height': heartSize + 'px',  'backgroundColor' : pickColor()}); //heart
    // console.log($(this).filter('.heart').css('width'));
    // console.log($(this).parents());
    // $(this).css('color', pickColor());
    // $(this).css('width', newWidth);
  });
  // $(this).clone().appendTo($('.hearts'));
  $(tempHeart).fadeOut(300);
  $(this).replaceWith($(heartObject).fadeIn(300));
}

function makeHeart() {
  var heartNode = '<div class="heart-frame"><div class="heart"></div></div>';
  heartTemplate = '<div class="hearts">' + '<div class="row">' + heartNode + heartNode + '</div><div class="row">' + heartNode + heartNode + '</div></div>';
    // heartTemplate = '<div class="hearts">' + heartNode + heartNode + '</div>';
  return heartTemplate;
}

function pickColor() {
  var colors = [ '#facade', '#f9bad4', '#f7abcb', '#f69bc1', '#f48cb7', '#333'];
  var random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  return colors[random];
}