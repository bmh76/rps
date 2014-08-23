window.unitTest = {
	testUnitMap : {},
	addTest : function(testName, testFunction) {
		if (this.testUnitMap[testName] != null) {
			throw new Error('The unit test ' + testName + ' exists already.');
		}

		this.testUnitMap[testName] = testFunction;
	},
	run : function(times) {
		console.log('------------START UNIT TEST------------\n');
		times = times ? times : 1;

		var testedUnits = [];
		for ( var key in this.testUnitMap) {
			var testFunction = this.testUnitMap[key];
			var testedUnit = {
					name : key,
					success : 0,
					extraInfo : {},
				};
			testedUnits.push(testedUnit);
			
			for (var i = 0; i < times; ++i) {
				var success = true;
				try {
					testFunction();
				} catch (e) {
					if (e.customlyDefined) {
						if(testedUnit.extraInfo.stackMessages == null){
							testedUnit.extraInfo.stackMessages = [];
						}
						if(testedUnit.extraInfo.stackMessages.indexOf(e.stack) == -1){
							testedUnit.extraInfo.stackMessages.push(e.stack);
						}
						
						success = false;
					} else {
						throw e;
					}
				} finally {
					if (success) {
						++testedUnit.success;
					}
				}
			}
		}

		this.printResult(testedUnits, times);
	},

	printResult : function(units, tryTimes) {
		for ( var i=0; i < units.length; ++i){
			var unit = units[i];
			var msg = '%c[' + unit.name + ']';
			var format = 'font-weight:bold;';

			if (unit.success == tryTimes) {
				msg = msg + ' success.';
				format = 'color: #19BB33;' + format;
			} else {
				msg = msg + ' failed (' + (tryTimes - unit.success) + ') times.';
				format = 'color: #F32222;' + format;
			}

			if (unit.success) {
				console.log(msg, format);
			} else {
				console.groupCollapsed(msg, format);
				console.log('%c' + unit.extraInfo.stackMessages.join('\n'), 'color: red');
				console.groupEnd();
			}
		}
	}
}