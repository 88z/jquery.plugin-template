//шаблон для jquery плагинов
(function($){ 
	
	var Plugin = function(options, elem){
		var defaults ={

		}
		var self = this;
		this.elem = elem;
		this.options = $.extend({},defaults, options);
		if (

		){
			return;
		}
		this.go();
		
	}
	$.extend(Plugin.prototype, {
		go: function(){

		}
	});	
	
	$.fn.plugin =function(options){
		this.each(function() {
			var elem = $(this);        	
			new Plugin(options,elem);	
	    });	
	}

})(jQuery);