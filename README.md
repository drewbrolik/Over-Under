Over-Under
==========

### Hide and show elements with media queries using class names

#### Add the class *over[Number]* or *under[Number]* to an element to only show it *over* or *under* a browser width.

This plugin saves the time of creating a new media query in the stylesheet just for hiding or showing an element at a certain window size.

It works by finding all classes *over* or *under* a number and creating a dymanic stylesheet with media queries to hide or show elements based on the browser width.

Since it uses a stylesheet to hide and show elements, there is no need to continually read the DOM as the window is resized.

### Example

To show an element only when the browser is over 500 pixels wide...

```html
<div class="over500">This only shows up when the window is over 500 pixels wide.</div>
```

To only show an element when the browser is over 500 pixels and under 800 pixels...

```html
<div class="over500 under800">This only shows up when the window is over 500 pixels and under 800.</div>
```

### How To

First, include the plugin in the head of your document (or at the end if you prefer).
```html
<script type="text/javascript" src="js/overUnder.js"></script>
```

Then, call the plugin on $("body"). To ensure the plugin fires as early as possible, call it in a script block at the very end of your file, just before closing the body tag. You don't need to wrap this in a DOM ready function, as long as you put it at the very end of your html.
```javascript
$("body").overUnder();
```
