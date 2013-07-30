/*
Over Under jQuery Plugin
Version 1.0.0
Jan 21st, 2013

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
*/

(function($) {

	$.fn.overUnder = function(additionalOptions) {
		
		var options = { //- set default options
			
		}
		options = $.extend(options, additionalOptions ); //- override default options with user-supplied options
		
		// Under
		$(this).find("[class^='under']").each(function() {
			
			var $this = $(this); //- get this variable for later
			var breakpoint = $this.attr("class").replace("under","");

			$(window).bind("ready load resize",function() {

				var browserWidth = $(window).width();
				if (browserWidth < breakpoint) {
					$this.show();
				} else {
					$this.hide();
				}

			});
								
		});

		// Over
		$(this).find("[class^='over']").each(function() {
			
			var $this = $(this); //- get this variable for later
			var breakpoint = $this.attr("class").replace("over","");

			$(window).bind("ready load resize",function() {

				var browserWidth = $(window).width();
				if (browserWidth > breakpoint) {
					$this.show();
				} else {
					$this.hide();
				}

			});
								
		});
		
		return this;
	};
	
})(jQuery);