$(document).ready(function(){
  $("#wordPuzzle").submit(function(event){
    event.preventDefault()

    const input = $("input#q1").val();
    let splitString = input.split("");

//Checks if inputted character is a vowel, returns Boolean
    function isVowel( chr ){ 
      return 'aeiou'.indexOf( chr[0].toLowerCase() ) !== -1;
    };

//Replaces Vowels with "-" in a string, returns String
    function vowelReplace(splitString){
      for(i=0;i <splitString.length; i++){
        if (isVowel(splitString[i])){
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