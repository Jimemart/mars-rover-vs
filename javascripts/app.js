// Rover Object Goes Here
// ======================
 var rover = {
   direction: "N",
   positionX: 0,
   positionY: 0,
   travelLog: []
 };
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:

  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:

  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  var currentPosition = [rover.positionX, rover.positionY];

  var length = rover.travelLog.length;

  rover.travelLog.push(currentPosition);

  switch (rover.direction) {
    case "N":
      if(rover.positionY > 0){
        rover.positionY -=1;
    }
      else{
        console.log("Sorry, you have reached the limit of the grid.");
      }
      break;
    case "W":
      if(rover.positionX > 0){
      rover.positionX -=1;
    }
      else{
        console.log("Sorry, you have reached the limit of the grid.");
      }
      break;
    case "S":
    if(rover.positionY <10){
      rover.positionY +=1;
    }
    else{
      console.log("Sorry, you have reached the limit of the grid.");
    }
      break;
    case "E":
      if(rover.positionX < 10 ){
      rover.positionX +=1;
    }
    else{
      console.log("Sorry, you have reached the limit of the grid.");
    }
      break;
    default:
  }
  console.log("moveForward was called");
}

function moveBackward(rover){
  var currentPosition = [rover.positionX, rover.positionY];

  var length = rover.travelLog.length;

  rover.travelLog.push(currentPosition);

  switch(rover.direction){
    case "N":
      if(rover.positionY < 10){
        rover.positionY += 1;
      }
      else{
        console.log("Sorry, you reached the limit of the grid");
      }
      break;
      case "E":
        if(rover.positionX > 0){
          rover.positionY -= 1;
        }
        else{
          console.log("Sorry, you reached the limit of the grid");
        }
        break;
      case "S":
        if(rover.positionY > 0){
            rover.positionY -= 1;
          }
        else{
            console.log("Sorry, you reached the limit of the grid");
          }
        break;
      case "W":
        if(rover.positionX < 10){
            rover.positionY += 1;
          }
        else{
            console.log("Sorry, you reached the limit of the grid");
          }
          break;
  }
  console.log("moveBackward was called");
}

function roverAttack(string){
  for(var i = 0; i<string.length; i++){
    switch (string[i]){
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
      break;
    }
  }
  console.log("Your rover is here: " + [rover.positionX, rover.positionY]);
  console.log("Your rover was here: " + rover.travelLog);
}
