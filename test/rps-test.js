{
	var game = RPS.Game.getInstance();

	unitTest.addTest('testConsolePrintln', function() {

		var textBefore = game.console.getText();
		var msg = 'hello';
		game.console.println(msg);
		var textAfter = game.console.getText();

		assertEqual(textAfter, textBefore + msg + '\n');
	});

	unitTest.addTest('testWinDecision', function() {
		game.player.throwDice();
		game.enemy.throwDice();
		
		var dicePlayer = game.player.getDice();
		var diceEnemy = game.enemy.getDice();
		
		
		assertEqual(game.logic.isPlayerWin(dicePlayer, diceEnemy), dicePlayer < diceEnemy || (dicePlayer == 3 && diceEnemy == 1));  
	});
	
	
	unitTest.addTest('testFailure', function(){
		assertEqual('a', 'b');
	});

	game.dispose();
}