/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
jQuery(function($){
	$.datepicker.regional['en'] = {
		changeYear: true,
		dateFormat: 'dd/mm/yy',
		yearRange: '-50:+0',
	};
	$.datepicker.setDefaults($.datepicker.regional['en']);
});
