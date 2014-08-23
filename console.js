defineClass(RPS, 'Console', {
	consoleView : null,
	initialize : function(consoleView) {
		this.consoleView = consoleView;
	},
	println : function(message) {
		this.print(message + '\n');
	},
	print : function(message) {
		this.consoleView.val(this.getText() + message);
	},
	clear : function() {
		this.consoleView.val('');
	},
	getLine : function() {
		var text = this.consoleView.val();
		var newlineIndex = text.lastIndexOf('\n');
		if (newlineIndex != -1) {
			return text.substr(newlineIndex, text.length);
		} else {
			return '';
		}
	},
	getText : function() {
		return this.consoleView.val();
	}
});