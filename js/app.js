$(function() {
  var container = $('.hearts');
  var heart = $('.heart');
  var startWidth = $(window).height() + 'px';
  heart.css('fontSize',startWidth);
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
  fontSize = $(this).css('fontSize');
  fontSize = parseInt(fontSize, 10);
  console.log(fontSize);
  newSize = (fontSize / 2) + 'px';
  newWidth = (fontSize / 2) * .75 + 'px';
  console.log(newSize);
  heartObject = $(heartTemplate);
  heartObject.find('.heart').each(function(){
    $(this).css('fontSize', newSize);
    $(this).css('color', pickColor());
    $(this).css('width', newWidth);
  });
  // $(this).clone().appendTo($('.hearts'));
  $(this).replaceWith(heartObject);
  console.log($('.heart').css('fontSize'));
};
function makeHeart() {
  var heartNode = '<div class="heart lsf">heart</div>';
  heartTemplate = '<div class="hearts">' + '<div class="row">' + heartNode + heartNode + '</div><div class="row">' + heartNode + heartNode + '</div></div>';
  return heartTemplate;
}

function pickColor() {
  var colors = [ '#facade', '#f9bad4', '#f7abcb', '#f69bc1', '#f48cb7']
  var random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  return colors[random];
}