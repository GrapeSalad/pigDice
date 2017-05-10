$(document).ready(function(){

  $("button").click(function(event){
    if (($(event.target).attr("id") === "roll_button1") || ($(event.target).attr("id") === "roll_button2")){
      var button_value = "roll";
    }
    else{
      var button_value = "hold"
    }
    var die = player1.dice(1, 7);
    console.log(die);
    var total_score = player1.cal_score(die, player1.VirtualPoints, button_value);
    console.log(total_score);
    console.log(button_value);
  });

});




function player(name, score) {
  this.Name = name;
  this.Score = score;
  this.ActualPoints = [];
  this.VirtualPoints = [];
}

var player1 = new player("kimlan", "score");
// var player2 = new player(name, score);

player.prototype.dice = function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min))+min;
}

// actual_points and virtual_points are arrays
player.prototype.cal_score = function(die, virtual_points, button){
  debugger;
  var actual_total_score = 0;
  var virtual_total_score = 0;

  if (button === "hold"){
    for(i=0; i<virtual_points.length; i++){
      actual_total_score = actual_total_score + virtual_points[i];
    }
  }
  else if(die === 1){
    actual_total_score = virtual_total_score - (virtual_total_score - actual_total_score);
  }
  else{
    virtual_points.push(die);
    for(i=0; i<virtual_points.length; i++){
      virtual_total_score = virtual_total_score + virtual_points[i];
      
    }
    // if(player1 === true){
    //   player2();
    // }
    // else{
    //   player1();
    // }
  }

  return actual_total_score;
}
