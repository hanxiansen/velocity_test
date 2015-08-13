(function($) {
	/* 序列动画
	$('#div1').velocity({
		width: '300px',
		height: '300px'
	}, {
		duration: 1000,
		complete: function() {
			$('#div2').velocity({
				width: '300px',
				background: '#009ee2'
			}, {
				duration: 3000,
				delay: 3000
			});
		}
	});
 	*/
	
	var seq = [
	{
		elements: $("#div1"),
		properties: {width: '300px'},
		options: {duration: 1000}
	},
	{
		elements: $("#div2"),
		properties: {width: '200px'},
		options: {duration: 1000}
	},
	{
		elements: $("#div3"),
		properties: {width: '300px'},
		options: {duration: 1000}
	}
	];

	$.Velocity.RunSequence(seq);

})(jQuery);