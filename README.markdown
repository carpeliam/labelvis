labelvis.
=========

Alright, so this is yet another jquery plugin to stick labels _inside_ of form
elements, a la "labelify":http://www.kryogenix.org/code/browser/labelify/ etc.
Slightly different, though.

When you click on an labelvis-enabled textbox, a little box slides up with the
label so you know what field you're editing. (Ok so usually you don't forget
these kinds of things but I had a need for this in a project so that's what you
get.)

This plugin plays nicely with form elements that have already been populated. So
your input values won't get replaced with the label unless the input value is
blank. This also means that, if the value gets cleared, the label will be
displayed.

This plugin is also more friendly regarding forms where you might add textboxes
and the like dynamically, as it will clear the values of _all_ labelvis-enabled
textboxes before form submission, including ones that were added after the form
was added (because who knows, you might have an onsubmit() function for the form
that would get called before those dynamic elements).

configuration.
--------------

so, you can pass an object literal with some settings if that's what you're
into. Here are some defaults:

    var defaults = {
      infieldClass: 'labelHighlight',
      slidingClass: 'labelSlide',
      speed: 300
    };

The first two options are css classes for styling these puppies, because
presumably you'd like to make these things look good. If you're hurting for
inspiration or examples, just, er, look at the example. the last option is to
control how fast the label slides up. I imagine words like "fast" and "slow"
would also work, while "whoa there nelly" would not.

in the future.
--------------

In the future, I might add some more customization. But let me know what you
want, otherwise I'm probably happy.

requirements.
-------------

You're going to want jquery (not sure what the minimum version is) and jquery-ui
for the sliding business.
