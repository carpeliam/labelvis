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
      slidingClass: 'sliding'
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
        $(elem).before('<div class="' + options.slidingClass + '">' + $(elem).data("labelvis") + '</div>');
      };
      
      var slideLabelOut = function(elem) {
        $(elem).prev('.' + options.slidingClass).remove();
      }
      
      $(this).focus(function() {
        clearInput(this);
        slideLabelIn(this);
      }).blur(function() {
        showLabel(this);
        slideLabelOut(this);
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
