defineClass(RPS, 'Logic', {
	initialie: function(game){
		this.game = game;
	},
	startNewGame: function(){
		this.game.player.reset();
		this.game.enemy.reset();
		
	},
	isPlayerWin: function(dicePlayer, diceEnemy){
		assertNotNull(dicePlayer);
		assertNotNull(diceEnemy);
		assert(dicePlayer > 0 && diceEnemy > 0);
		
		return dicePlayer < diceEnemy || (dicePlayer == 3 && diceEnemy == 1);
	}	
});