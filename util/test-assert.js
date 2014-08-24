function assertNotUndefined(testObject, message){
	this.assert(testObject !== undefined, message, UndefinedError);
}
function assertUndefined(testObject, message){
	this.assert(testObject === undefined, message, NotUndefinedError);
}
function assertNotEqual(testObjectLhs, testObjectRhs, message){
	this.assert(testObjectLhs != testObjectRhs, message, EqualError);
}
function assertEqual(testObjectLhs, testObjectRhs, message){
	this.assert(testObjectLhs == testObjectRhs, message, NotEqualError);
}
function assertNotNull(testObject, message){
	this.assert(testObject != null, message, NullError);
}
function assertNull(testObject, message){
	this.assert(testObject == null, message, NotNullError);
}
function assert(expression, message, exception){
	if(expression == false){
		throw exception ? new exception(message) : new AssertError(message);
	}
}


//exception classes
function defineError(errorName){
	if(window[errorName] === undefined){
		var error = function(message){
			this.name = errorName;
			this.message = message;
			this.customlyDefined = true;
			Error.captureStackTrace(this, error);
		};
		error.prototype = Error.prototype;
		window[errorName] = error; 
	}
}

defineError('AssertError');
defineError('UndefinedError');
defineError('NotUndefinedError');
defineError('EqualError');
defineError('NotEqualError');
defineError('NullError');
defineError('NotNullError');