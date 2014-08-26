defineClass(RPS, 'Game', {
	viewport : $('#game'),
	logic : null,
	player : new RPS.Player(),
	enemy : new RPS.Enemy(),
	console : null,

	initialize : function() {
		this.logic = new RPS.Logic(this);
		this.console = new RPS.Console($('#console'));
	},

	dispose : function() {

	},

	run : function() {
		// the main function of this game starts from here
		// TODO : implement here
	},

	getUI : function(uiname) {
		return this.viewport.find('[rps-ui="' + uiname + '"]');
	}
});

RPS.Game.getInstance = function() {
	if (this._instance == null) {
		this._instance = new RPS.Game();
	}

	return this._instance;
}