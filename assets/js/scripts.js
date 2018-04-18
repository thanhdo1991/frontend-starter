// Find all elements that have a `data-background-image` attribute
// and set the image as `background-image` property
(function ( $ ) {

  var setCustomBgImg = function(el) {
    el = $(el);
    var imgUrl = el.data('background-image');
    imgUrl != "" && (imgUrl = "url(" + imgUrl + ")");
    el.css('background-image', imgUrl);
  }

  $("[data-background-image]").each(function(k, el) {
    setCustomBgImg(el);
  });

}( jQuery ));

// Find all elements with a `data-background-color` attribute
(function ( $ ) {

  var setCustomBgImg = function(el) {
    el = $(el);
    var color = el.data('background-color');
    color != "" && (color = "#" + color);
    el.css('background-color', color);
  }

  $("[data-background-color]").each(function(k, el) {
    setCustomBgImg(el);
  });

}( jQuery ));

// Backgroundify finds the nearest `img` element inside an element
// and steals its source as a `background-image` property
(function ( $ ) {

  var stealBgImg = function(el) {
    var el = $(el),
        img = el.find('img').first(),
        imgUrl = img.attr('src');

    imgUrl != "" && (imgUrl = "url(" + imgUrl + ")");
    el.css('background-image', imgUrl)
    img.hide();
  }

  $("[data-backgroundify]").each(function(k, el) {
    stealBgImg(el);
  });

}( jQuery ));
