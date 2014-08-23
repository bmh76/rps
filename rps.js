window.rps = {
	//member variables
	viewport : $('#game'),
	gameOver : true,
	console : {
		consoleView : null,
		init : function(consoleView) {
			this.consoleView = consoleView;
		},
		println : function(message) {
			this.print(message + '\n');
		},
		print : function(message) {
			this.consoleView.val(this.getText() + message);
		},
		clear: function(){
			this.consoleView.val('');
		},
		getLine: function(){
			var text = this.consoleView.val();
			var newlineIndex = text.lastIndexOf('\n');
			if(newlineIndex != -1){
				return text.substr(newlineIndex, text.length);
			} else{
				return '';
			}
		},
		getText: function(){
			return this.consoleView.val();
		}
	},

	
	//member functions
	init : function() {
		var consoleView = this.viewport.find('#console');
		this.console.init(consoleView);
	},
	
	dispose : function() {

	},

	isGameOver : function() {
		return this.gameOver;
	},

	run : function() {
		//the main function of this game starts from here
		//TODO : implement here
	},
};