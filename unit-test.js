window.unitTest = {
		testUnitMap: {},
		testedUnits : [],
		addTest: function(testName, testFunction){
			if(this.testUnitMap[testName] != null){
					throw new Error('The unit test ' + testName + ' exists already.');
			}
			
			this.testUnitMap[testName] = testFunction;
		},
		run: function(){
			for(var key in this.testUnitMap){
				var test = this.testUnitMap[key];
				var tested = {
						name : key,
						success : true,
						extraInfo : {}
				};
				try{
					test();
				} catch(e){
					if(e.customlyDefined){
						tested.success = false;
						tested.extraInfo.stackMessage = e.stack;
					} else{
						throw e;
					}
				} finally{
					this.testedUnits.push(tested);
				}
			}
			

			//print tested units
			for(var i=0; i < this.testedUnits.length; ++i){
				var tested = this.testedUnits[i];
				var msg = '%c[' + tested.name + ']';
				var format = 'font-weight:bold;';
				
				if(tested.success){
					msg = msg + ' success.';
					format = 'color: #19BB33;' + format;
				} else{
					msg = msg + ' failed.';
					format = 'color: #F32222;' + format;
				}
				
				
				if(tested.success){
					console.log(msg, format);
				} else{
					console.groupCollapsed(msg, format);
					console.log('%c' + tested.extraInfo.stackMessage, 'color: red');
					console.groupEnd();
				}
			}
		},
}