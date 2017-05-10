$(document).ready(function(){

  $("button").click(function(){
    var die = player1.dice(1, 7);
    console.log(die);
    var total_score = player1.cal_score(die, player1.Sum);
    console.log(total_score);
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
player.prototype.cal_score = function(die, virtual_points){
  debugger;
  var actual_total_score = 0;
  var virtual_total_score = 0;
  
  if ($("button#hold_button1").val() === "hold"){
    actual_total_score = virtual_total_score;
  }
  else if(die!= 1){
    virtual_points.push(die);
    for(i=0; i<virtual_points.length; i++){
      virtual_total_score = virtual_total_score + virtual_points[i];
    }
  }
  else{
    actual_total_score = virtual_total_score + actual_total_score;
    // if(player1 === true){
    //   player2();
    // }
    // else{
    //   player1();
    // }
  }

  return sum;
}
