var robot = require('robotjs');

var prevPos = robot.getMousePos();

var momentum = {x: 0, y: 0}

var dampen = 10;

var logposition = function(){
  var pos = robot.getMousePos();
  var dif = {x: prevPos.x - pos.x,y:prevPos.y - pos.y}
  momentum.x -= dif.x/dampen;
  momentum.y -= dif.y/dampen;
  robot.moveMouse(pos.x + momentum.x,pos.y + momentum.y);
  prevPos = robot.getMousePos();
}

setInterval(logposition,1)
