$(document).ready(function(){

  $("button").click(function(event){
    if ($(event.target).attr("id") === "roll_button1") {
      var button_value = "roll1";
    }
      else if ($(event.target).attr("id") === "roll_button2") {
      var button_value  = "roll2";
    }
    else if ($(event.target).attr("id") === "hold_button1"){
      var button_value = "hold1";
    }
    else {
      var button_value = "hold2";
    }

    play(player1, player2, button_value);

    // var die = player1.dice(1, 7);
    // console.log(die);
    // var total_score = player1.cal_score(die, player1.VirtualPoints, button_value);
    // console.log(total_score);
    // console.log(button_value);
  });

});



//Constructors
function player(name, score) {
  this.Name = name;
  this.Score = score;
  this.ActualPoints = [];
  this.VirtualPoints = [];
}

var player1 = new player("kimlan", "score");
var player2 = new player("David", "score");
// var turn = {[player1, player2]};

function play(player1, player2, button_value){
    if (button_value === "roll1"){
      var die = player1.dice(1,7);
      $(".display_die").text(die);
      player1.Score = player1.cal_score(die, player1.ActualPoints, player1.VirtualPoints, button_value);
      $("#result1").text(player1.Score);
      console.log(player1);
    }
    else if (button_value === "hold1"){
      //show player 1 total score, player 2 plays next
      player1.Score = player1.cal_score(die, player1.ActualPoints ,player1.VirtualPoints, button_value);
      $("#result1").text(player1.Score);
    }
    else if (button_value === "roll2"){
      var die = player2.dice(1,7);
      $(".display_die").text(die);
      player2.Score = player2.cal_score(die, player2.ActualPoints ,player2.VirtualPoints, button_value);
      $("#result2").text(player2.Score);
      console.log(player2);
    }
    else{
      //show player 2 total score, player 1 plays next
      player2.Score = player2.cal_score(die, player2.ActualPoints ,player2.VirtualPoints, button_value);
      $("#result2").text(player2.Score);
    }

  }
//Roll the die, value 1 to 6
player.prototype.dice = function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}

//function to calculate score after each roll, virtual_points is an array
player.prototype.cal_score = function(die, actual_points, virtual_points, button_value){
  // debugger;
  var actual_total_score = 0;
  var virtual_total_score = 0;

  if ((button_value === "hold1") || (button_value === "hold2")){
    if(button_value === "hold1"){
      for(i=0; i<virtual_points.length; i++){
        actual_points.push(virtual_points[i]);
      }
      virtual_points.splice(0, virtual_points.length);
      console.log(actual_points);
      console.log(actual_points.length);
      for(i=0; i<actual_points.length; i++){
        actual_total_score = actual_total_score + actual_points[i];
      }
    }
    else if(button_value === "hold2"){
      for(i=0; i<virtual_points.length; i++){
        actual_points.push(virtual_points[i]);
      }
      virtual_points.splice(0, virtual_points.length);
      for(i=0; i<actual_points.length; i++){
        actual_total_score = actual_total_score + actual_points[i];
      }
    }
  }
  else if(die === 1){
    if(button_value === "roll1"){
      virtual_points.splice(0, virtual_points.length);
      // for(i=0; i<virtual_points.length; i++){
      //   actual_total_score = actual_total_score + virtual_points[i];
      // }
    }
    else if(button_value === "roll2"){
        virtual_points.splice(0, virtual_points.length);
    }
  }
  else{
    virtual_points.push(die);
    console.log(virtual_points);
    for(i=0; i<virtual_points.length; i++){
      virtual_total_score = virtual_total_score + virtual_points[i];

    }
    actual_total_score = virtual_total_score;
  }

  return actual_total_score;
}
