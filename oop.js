function defineClass(classPackage, className, impl){
	assertUndefined(classPackage[className], 'The class ' + className + ' is already defined.');
	
	var def = function(){};
	if(impl.hasOwnProperty('initialize')){
		def = impl.initialize;
	} else{
		def = function(){};
	}
	
	for(var member in impl){
		if(member){
			def.prototype[member] = impl[member];
		}
	}
	
	classPackage[className] = def;
}