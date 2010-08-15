/*!
 * jQuery.labelvis - Display labels and stuff.
 * Copyright 2010, Liam Morley, http://www.carpeliam.com
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * @author Liam Morley
 * @version 0.0.2
 */
(function($) {
  $.fn.labelvis = function(options) {
    var defaults = {
      infieldClass: 'labelHighlight',
      slidingClass: 'sliding',
      speed: 300
    };
    
    options = $.extend(defaults, options);
    
    return this.each(function() {
      var labelText = $("label[for=" + this.id +"]").text();
      // labels will be collapsed to a single line, unless it's a text area
      if (!(this instanceof HTMLTextAreaElement))
        labelText = labelText.replace(/\n/g, '');

      $(this).data("labelvis", labelText);
      
      var clearInput = function(elem) {
        if ($(elem).hasClass(options.infieldClass)) {
          elem.value = "";
          $(elem).removeClass(options.infieldClass);
        }
      };
      
      var showLabel = function(elem) {
        if (elem.value == "") {
          elem.value = $(elem).data("labelvis");
          $(elem).addClass(options.infieldClass);
        }
      };
      
      var slideLabelIn = function(elem) {
        var div = $('<div class="' + options.slidingClass + '">' + $(elem).data("labelvis") + '</div>').
          addClass(options.slidingClass).css('position', 'absolute').css('display', 'none').
          insertBefore(elem);
        div.css('top', $(elem).offset().top - div.outerHeight()).show("slide", { direction: "down" }, options.speed);
      };
      
      var slideLabelOut = function(elem) {
        $(elem).prev('.' + options.slidingClass).remove();
      }
      
      var element = this;      
      $(element).focus(function() {
        clearInput(element);
        slideLabelIn(element);
      }).blur(function() {
        showLabel(element);
        slideLabelOut(element);
      });
      
      $(window).unload(function() {
        // otherwise hitting 'refresh' will keep the label values
        clearInput(element);
      });
      
      $(this).parents("form").submit(function() {
        $(this).find('.' + options.infieldClass).each(function() {
          clearInput(this);
        });
      });
      
      if (this.value === this.defaultValue) {
        // show label only if they haven't already started typing
        showLabel(this);
      }
    });
  };
})(jQuery);
