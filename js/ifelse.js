function ifStatement() {
	var statement = 'if (';
	statement += getCondition(1);  
	statement += ') {\n\n'; 
	programTextArea.executeEdits("", [{
		range: {
			startLineNumber: programTextArea.getPosition().lineNumber,
			startColumn: programTextArea.getPosition().column,
			endLineNumber: programTextArea.getPosition().lineNumber,
			endColumn: programTextArea.getPosition().column
		},
		text: statement,
		forceMoveMarkers: true
	}]);

	autoIndent() 

	programTextArea.executeEdits("", [{
		range: {
			startLineNumber: programTextArea.getPosition().lineNumber,
			startColumn: programTextArea.getPosition().column,
			endLineNumber: programTextArea.getPosition().lineNumber,
			endColumn: programTextArea.getPosition().column
		},
		text: '}',
		forceMoveMarkers: true
	}]);

	programTextArea.setPosition({lineNumber: programTextArea.getPosition().lineNumber - 1, column: programTextArea.getPosition().columnNumber + 2})
	indent++; 
	autoIndent();
	programTextArea.focus();

}
function elseStatement(){
	var statement = 'else {\n\n'; 
	programTextArea.executeEdits("", [{
		range: {
			startLineNumber: programTextArea.getPosition().lineNumber,
			startColumn: programTextArea.getPosition().column,
			endLineNumber: programTextArea.getPosition().lineNumber,
			endColumn: programTextArea.getPosition().column
		},
		text: statement,
		forceMoveMarkers: true
	}]);
	autoIndent() 
	programTextArea.executeEdits("", [{
		range: {
			startLineNumber: programTextArea.getPosition().lineNumber,
			startColumn: programTextArea.getPosition().column,
			endLineNumber: programTextArea.getPosition().lineNumber,
			endColumn: programTextArea.getPosition().column
		},
		text: '}',
		forceMoveMarkers: true
	}]);
	programTextArea.setPosition({lineNumber: programTextArea.getPosition().lineNumber - 1, column: programTextArea.getPosition().columnNumber + 2})
	indent++; 
	autoIndent(); 
	programTextArea.focus();
}

function elseIfStatement(){
	var statement = 'else if ('; 
	statement += getCondition(2);  
	statement += ') {\n\n';
	programTextArea.executeEdits("", [{
		range: {
			startLineNumber: programTextArea.getPosition().lineNumber,
			startColumn: programTextArea.getPosition().column,
			endLineNumber: programTextArea.getPosition().lineNumber,
			endColumn: programTextArea.getPosition().column
		},
		text: statement,
		forceMoveMarkers: true
	}]);
	autoIndent()
	programTextArea.executeEdits("", [{
		range: {
			startLineNumber: programTextArea.getPosition().lineNumber,
			startColumn: programTextArea.getPosition().column,
			endLineNumber: programTextArea.getPosition().lineNumber,
			endColumn: programTextArea.getPosition().column
		},
		text: '}',
		forceMoveMarkers: true
	}]);
	programTextArea.setPosition({lineNumber: programTextArea.getPosition().lineNumber - 1, column: programTextArea.getPosition().columnNumber + 2})
	indent++; 
	autoIndent();
	programTextArea.focus(); 
}