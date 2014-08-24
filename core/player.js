defineClass(RPS, 'Player', {
	dice : -1,
	reset: function(){
		this.dice = -1;
	},
	throwDice : function() {
		var game = RPS.Game.getInstance();
		this.dice = Math.ceil(Math.random() * 3);
	},
	getDice : function() {
		return this.dice;
	}
});