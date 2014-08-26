defineClass(RPS, 'GUI', {
});

RPS.GUI.getUI = function(uiname) {
	return $(document).find('[rps-ui="' + uiname + '"]');
}

RPS.GUI.callbackNames = [ 'click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover',
		'mouseout', 'mouseup', 'keydown', 'keypress', 'keyup', 'abort', 'error', 'load', 'resize', 'scroll', 'unload',
		'blur', 'change', 'focus', 'reset', 'select', 'submit' ];

RPS.GUI.bindEventTree = function(tree, parentPath) {
	parentPath = parentPath ? parentPath : '';
	for ( var key in tree) {
		var delegatePath = parentPath;
		if (this.callbackNames.indexOf(key) == -1) {
			delegatePath = parentPath.length == 0 ? '[rps-ui="' + key + '"]' : delegatePath + ' [rps-ui="' + key + '"]';
			this.bindEventTree(tree[key], delegatePath);
		} else {
			$(document).on(key, delegatePath, tree[key]);
		}
	}
};