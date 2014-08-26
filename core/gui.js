defineClass(RPS, 'GUI', {
	bindEventListener: function(target, a, b, c, d, e){
		target.on(a, b, c, d, e);
	}
});