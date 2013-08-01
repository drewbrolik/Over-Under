/*
Over Under jQuery Plugin
Version 2.0.0
Aug 1st, 2013

Documentation: http://drewtotango.com/hideUnder
Repository: https://github.com/drewbrolik/Hide-Under

Copyright 2013 Drew Thomas and Brolik for Leverage CMS

Dual licensed under the MIT and GPL licenses:
https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://www.gnu.org/licenses/gpl.txt

This file is part of Over Under.

Over Under is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Over Under is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Over Under.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
Changelog
1/21/13 Initial plugin (1)
8/1/13 Modifed core functionality to insert a  stylesheet into head instead of using javascript to read window size constantly (2.0.0)
*/

(function($) {

	$.fn.overUnder = function(additionalOptions) {
		
		var options = { //- set default options
			
		}
		options = $.extend(options, additionalOptions ); //- override default options with user-supplied options
		
		//- create a stylesheet for these styles (so we don't have to worry about reading the DOM constantly)
		
		var style = document.createElement("style");

		// Add a media (and/or media query) here if you'd like!
		style.setAttribute("media", "screen, projection");
		// style.setAttribute("media", "@media only screen and (max-width : 1024px)");
		style.type = 'text/css';

		// WebKit hack :(
		style.appendChild(document.createTextNode(".overUnder { }"));

		// Add the <style> element to the page
		document.head.appendChild(style);

		var sheet = style.sheet;

		// Under
		$(this).find("[class*='under']").each(function() {
			
			var $this = $(this); //- get this variable for later
			
			var classAttribute = $this.attr("class");
			$(classAttribute.split(" ")).each(function() {
				var breakpoint = this.replace("under","");
				
				if (breakpoint == parseInt(this.match(/(\d+)$/)[0])) {
					//- add rule to the newly created stylesheet with a media query based on the breakpoint
					if(sheet.insertRule) {
						sheet.insertRule("@media only screen and (min-width : "+breakpoint+"px) { .under"+breakpoint+" { display: none; } }", 1);
						//sheet.insertRule("@media only screen and (max-width : "+breakpoint+"px) { .under"+breakpoint+" { display: block; } }", 1);
					} else {
						//sheet.addRule(selector, rules, index); // TODO: figure this out... it's for IE to work
					}
				}
			});
								
		});

		// Over
		$(this).find("[class*='over']").each(function() {
			
			var $this = $(this); //- get this variable for later
			
			var classAttribute = $this.attr("class");
			$(classAttribute.split(" ")).each(function() {
				var breakpoint = this.replace("over","");

				if (breakpoint == parseInt(this.match(/(\d+)$/)[0])) {
					//- add rule to the newly created stylesheet with a media query based on the breakpoint
					if(sheet.insertRule) {
						sheet.insertRule("@media only screen and (max-width : "+breakpoint+"px) { .over"+breakpoint+" { display: none; } }", 1);
						//sheet.insertRule("@media only screen and (min-width : "+breakpoint+"px) { .over"+breakpoint+" { display: block; } }", 1);
					} else {
						//sheet.addRule(selector, rules, index); // TODO: figure this out... it's for IE to work
					}
				}
			});
								
		});
		
		return this;
	};
	
})(jQuery);