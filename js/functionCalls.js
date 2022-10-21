
function call_function() {
    
    var functionStatement = splitWords[1]
    for (var i = 2; i < splitWords.length && splitWords[i] != 'pass'; i++) {
        functionStatement += splitWords[i].replace(/^./, splitWords[i][0].toUpperCase());
    }
    functionStatement += '(';
    for (var j = i; j < splitWords.length; ++j) {
        if (splitWords[j] == 'pass' && j != splitWords.length - 1) {
            functionStatement += takeParameter(j);
        }
    }
    functionStatement += ')';
    functionStatement += ';'
    programTextArea.executeEdits("", [{
        range: {
            startLineNumber: programTextArea.getPosition().lineNumber,
            startColumn: programTextArea.getPosition().column,
            endLineNumber: programTextArea.getPosition().lineNumber,
            endColumn: programTextArea.getPosition().column
        },
        text: functionStatement + '\n',
        forceMoveMarkers: true
    }]);
    autoIndent();
}

function takeParameter(pos) {
    
    var paramName = splitWords[pos + 1];
    for (var k = pos + 2; k < splitWords.length && splitWords[k] != 'pass' ; ++k) {
        paramName += splitWords[k].replace(/^./, splitWords[k][0].toUpperCase()); 
    }
    if(k !== splitWords.length){
        paramName += ' ,';}
    
    return paramName;
}