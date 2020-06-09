$(document).ready(function(){
  $("#wordPuzzle").submit(function(event){
    event.preventDefault()

    const input = $("input#q1").val(); //User input
    let splitString = input.split(""); //splits user input into an array of characters
    
//Replaces Vowels with "-" in a string, returns String
    function vowelReplace(splitString){
      let vowels = ["a","e","i","o","u"];
      for(i=0;i <splitString.length; i++){
        let vowelMatch = false
        for(v=0; v <vowels.length; v++){  
          if (vowels[v] === splitString[i]){
            vowelMatch = true;
            break;
          };
        };
        if (vowelMatch){
          splitString[i] = "-";
        };
      };
      return splitString.join("");
    };

//Output
    $("p.outputTxt").text(vowelReplace(splitString));
    $("form#wordPuzzle").hide();
    $("div.output").show();
  });

//Button click Refreshes page
  $(".startOver").click(function() {
    location.reload();
  })

  //Checks if the submitted answers was correct
  $("#answerVal").submit(function(event){
    event.preventDefault()
    const input = $("input#q1").val().toLowerCase();
    const answer = $("input#q2").val().toLowerCase();

    if (answer === input) {
      $("form#wordPuzzle").hide();
      $("div.output").hide();
      $("div.answerSuccess").show();
    } else {
      $("form#wordPuzzle").hide();
      $("div.output").hide();
      $("div.answerFail").show();
      $(".correctAnswer").text(input)
    }
  });
});