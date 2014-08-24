(function includeRPS(){
	window.RPS = window.RPS || function(){};
})();

function extendRPS(impl){
	for(var key in impl){
		assertUndefined(window.RPS[key]);
		window.RPS.prototype[key] = impl[key];
	}
}
