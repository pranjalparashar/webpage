var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-IN";
var working = false; 

var dataTypes = ["int", "char", "float", "double", "void", "bool", "long"];

var identifiers = { int: "d", long: "ld", float: "f", double: "lf", char: "c", bool: "b"};
var passArray = ["pass"];

var translationDictionary = {
  integer: "int",
  long:"long",
  boolean: "bool",
  mean: "main",
  character: "char",
  "=": "equals",
  percent: "%",
  backslash: "\\",
  percentage: "%",
  next: "\\n",
  cal : "call",
};
var programTextArea; 
var includeStatements;
var variables = {}; 
var splitWords = []; 
var indent = 0;

recognition.onresult = function (event) {
  for (var i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[event.results.length - 1].isFinal) {
      splitWords = event.results[event.results.length - 1][0].transcript
        .trim()
        .split(" ");
      console.log(splitWords);
    }
  }

  for (var i = 0; i < splitWords.length; i++) {
    if (translationDictionary[splitWords[i]] != undefined) {
      splitWords[i] = translationDictionary[splitWords[i]];
    }
  }

  //call function according to command (first word(s) spoken)
  if (splitWords[0] === "include") {
    includeLibrary();
  }
  if (splitWords[0] == "function") {
    newFunction();
  }
  if (arrayContains(dataTypes, splitWords[0])) {
    newVariable();
  }
  if (splitWords[0] === "print") {
    printf();
  }
  if (splitWords[0] === "if") {
    ifStatement();
  }
  if (splitWords[0] === "else" && splitWords[1] !== "if") {
    elseStatement();
  }
  if (splitWords[0] === "else" && splitWords[1] === "if") {
    elseIfStatement();
  }
  if(splitWords[0]==='call'){
      call_function();
  }

  transcript = "";
  splitWords = [];
};
