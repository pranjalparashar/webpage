function startvoicerecognition(event) {
    if (working) {
      console.log("stop recognition");
      working = false;
      document.getElementById("start_stop_button").innerHTML = "Start"
      recognition.stop();
    }
    
    else {
      console.log("start recognition");
      working = true;
      document.getElementById("start_stop_button").innerHTML = "Stop"
      recognition.start();
    }
}