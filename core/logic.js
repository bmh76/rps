defineClass(RPS, 'Logic', {
	gameOver : true,

	initialie : function(game) {
		this.game = game;
	},
	startNewGame : function() {
		this.game.player.reset();
		this.game.enemy.reset();
		this.gameOver = false;
		
		this.println('The game started!');
		
//		this.activatePlayerDiceButton();
//		playerDiceButton has an event handler which throws player's dice when clicked.
//		player dice shown, then player turn is end.
//		the enemy do so as the player did.
//		show result & want more games?
//			
//		when player turn is end,
//		run to "show result & want more games?";

		this.waitForPlayerTurn(this.DEFAULT_WAIT_TURN);
	},
	isPlayerWin : function(dicePlayer, diceEnemy) {
		assertNotNull(dicePlayer);
		assertNotNull(diceEnemy);
		assert(dicePlayer > 0 && diceEnemy > 0);

		return dicePlayer < diceEnemy || (dicePlayer == 3 && diceEnemy == 1);
	},
	isGameOver : function() {
		return this.gameOver;
	}
});