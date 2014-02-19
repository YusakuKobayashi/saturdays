$(function(){

  // Backgrounds
  $('.masthead, .benefit, .item-image').each(function() {
    $b = $(this);
    if ($b.data('background')) {
      $b.backstretch($b.data('background'));
    }
  });
  
  $('.home-activity').imagefill();

  // collagePlus-ify it!
  function collage() {
    $('.collage').collagePlus();
  } collage();

  var resizeTimer = null;
  $(window).bind('resize', function() {
    // set a timer to re-apply the plugin
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(collage, 200);
  });

});