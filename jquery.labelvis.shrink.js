(function($){$.fn.labelvis=function(i){var j={infieldClass:'labelHighlight',slidingClass:'labelSlide',speed:300};i=$.extend(j,i);return this.each(function(){var c=$("label[for="+this.id+"]").text();if(!(this instanceof HTMLTextAreaElement))c=c.replace(/\n/g,'');$(this).data("labelvis",c);var d=function(a){if($(a).hasClass(i.infieldClass)){a.value="";$(a).removeClass(i.infieldClass)}};var e=function(a){if(a.value==""){a.value=$(a).data("labelvis");$(a).addClass(i.infieldClass)}};var f=function(a){var b=$('<div>'+$(a).data("labelvis")+'</div>').addClass(i.slidingClass).css('position','absolute').appendTo($(a).parents('form'));b.css('top',$(a).position().top-b.outerHeight()).css('left',$(a).position().left).show("slide",{direction:"down"},i.speed)};var g=function(a){$(a).parents('form').children('div.'+i.slidingClass+':contains('+$(a).data("labelvis")+')').remove()};var h=this;$(h).focus(function(){d(h);f(h)}).blur(function(){e(h);g(h)});$(window).unload(function(){d(h)});$(this).parents("form").submit(function(){$(this).find('.'+i.infieldClass).each(function(){d(this)})});if(this.value===this.defaultValue){e(this)}})}})(jQuery);
