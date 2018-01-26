// JavaScript

// If there's a `data-background-image` attribute, replace the block
// background image with the value, inside `url([path])`
(function ( $ ) {

  var setCustomBgImg = function(el) {
    el = $(el);
    var imgUrl = el.attr('data-background-image');
    imgUrl != "" && (imgUrl = "url(" + imgUrl + ")");
    el.css('background-image', imgUrl);
  };

  $("[data-background-image]").each(function(k, el) {
    setCustomBgImg(el);

    $(el).change(function() {
      setCustomBgImg(el);
    });
  });

  // Background color.
  var setCustomBgColor = function(el) {
    el = $(el);
    var color = el.data('background-color');
    color != "" && (color = "#" + color);
    el.css('background-color', color);
  }

  $("[data-background-color]").each(function(k, el) {
    setCustomBgColor(el);
  });

  // Pricing animate.
  var $tabs = $('.js-tabs'),
      $linkTabs = $('a', $tabs),
      switchedFlag = 'is-switched',
      visibleFlag = 'is-visible',
      hiddenFlag = 'is-hidden',
      selectedFlag = 'is-selected',
      activeFlag = 'active';

  $linkTabs.on('click', function(e) {
    e.preventDefault();
    var type = $(this).attr('data-type'),
        currentType = $(this).closest('.block-pricing').find('.pricing-inner[data-type=' + type + ']'),
        itemPricing = $(this).closest('.block-pricing').find('.pricing-item');

        $(this).closest('.js-tabs').find('a').removeClass(activeFlag);
        $(this).addClass(activeFlag);

    if (currentType.hasClass(hiddenFlag)) {
      currentType.addClass(selectedFlag);
      itemPricing.addClass(switchedFlag).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        $(this).closest('.block-pricing').find('.pricing-inner').each(function() {
          if ($(this).attr('data-type') != type) {
            $(this).removeClass(visibleFlag + ' ' +  selectedFlag).addClass(hiddenFlag);
          } else {
            $(this).addClass(visibleFlag).removeClass(hiddenFlag + ' ' +  selectedFlag);
          }
        });

        $(this).closest('.block-pricing').find('.pricing-item').removeClass(switchedFlag);
      })
    }
  });

}( jQuery ));
