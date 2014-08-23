unitTest.addTest('testConsolePrintln', function(){
	var textBefore = rps.console.getText();
	var msg = 'hello';
	rps.console.println(msg);
	var textAfter = rps.console.getText();
	
	assertEqual(textAfter, textBefore + msg + '\n');
});