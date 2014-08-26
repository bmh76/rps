{
	var game = RPS.Game.getInstance();

	unitTest.addTest('Game.consolePrintln', function() {
		var textBefore = game.console.getText();
		var msg = 'hello';
		game.console.println(msg);
		var textAfter = game.console.getText();

		assertEqual(textAfter, textBefore + msg + '\n');
	});

	unitTest.addTest('Logic.winDecision', function() {
		game.player.throwDice();
		game.enemy.throwDice();
		
		var dicePlayer = game.player.getDice();
		var diceEnemy = game.enemy.getDice();
		
		assertEqual(game.logic.isPlayerWin(dicePlayer, diceEnemy), dicePlayer < diceEnemy || (dicePlayer == 3 && diceEnemy == 1));  
	});
	
	unitTest.addTest('Game.getUI', function(){
		var ui = game.getUI('testui');

		assert(ui.length != 0);
	});
	

	unitTest.addTest('Logic.disablePlayerDiceButton', function(){
		var logic = game.logic;
		logic.disablePlayerDiceButton();
		
		var btn = game.getUI('btn-player-dice');
		assert(btn.length != 0);
		assert(btn.is(':disabled'));
	});
	
	unitTest.addTest('Logic.enablePlayerDiceButton', function(){
		var logic = game.logic;
		logic.enablePlayerDiceButton();
		
		var btn = game.getUI('btn-player-dice');
		assert(btn.length != 0);
		assert(btn.is(':disabled') == false);
	});
	
	unitTest.addTest('GUI.bindEventTree', function(){
		RPS.GUI.bindEventTree({
			'game-view' : {
				click : function(e) {
					console.debug('hello');
				},
				
				'btn-player-dice' : {
					click: function(e){
						alert('btn-player-dice');
					}
				}
			}
		});
		
		game.getUI('btn-player-dice').trigger('click');
	});

	game.dispose();
}