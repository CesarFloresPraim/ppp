(function ($) {
	var obj = $("#instafeed");
	if(!obj.length && !obj.hasClass('activation')) return false;
	var initEvent = obj.attr('data-init');
	$(window).on(initEvent, function(){
		if(!obj.hasClass('activation')){
			obj.addClass('activation')
			$("#instafeed").each(function(){
				var totalItem =  $(this).attr('data-totalitem');
				$.instagramFeed({
					'username': "vipclubiodemo",
					'container': "#instafeed",
					'display_profile': false,
					'display_biography': false,
					'display_gallery': true,
					'styling': false,
					'items': totalItem,
					'margin': 0
				});
			});
		};
	});
})(jQuery);
