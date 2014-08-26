defineClass(RPS, 'Game', {
	// member variables
	viewport : $('#game'),
	logic : null,
	player : new RPS.Player(),
	enemy : new RPS.Enemy(),
	console : null,

	// member functions
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
	startNewGame : function() {
		this.player.reset();
		this.enemy.reset();
	},
});

RPS.Game.getInstance = function() {
	if (this._instance == null) {
		this._instance = new RPS.Game();
	}

	return this._instance;
}