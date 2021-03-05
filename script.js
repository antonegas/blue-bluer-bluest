let blue = 100;
let blue1;
let blue2;
let left;
let totalTime = 0;
let time;
let i = 0;
let start;
let end;
let wrongs = 0;
function takeTest (side) {
  if (blue1 > blue2 && side == 1) {
    wrongs++;
  }
  if (blue2 > blue1 && side == 2) {
    wrongs++;
  }
  if (i >= 5) {
    document.getElementById("outputtime").innerHTML = "Your average time was " + totalTime/5 + "ms";
    if (wrongs == 1) {
      document.getElementById("outputpoints").innerHTML = "You picked the wrong anwser " + wrongs + " time";
    } else {
      document.getElementById("outputpoints").innerHTML = "You picked the wrong anwser " + wrongs + " times";
    }
    document.getElementById("start").style.display = "block";
    document.getElementById("test").style.display = "none";
    i = 0;
    totalTime = 0;
    wrongs = 0;
  } else {
    document.getElementById("test").style.display = "block";
    document.getElementById("start").style.display = "none";
    blue = Math.floor(Math.random()*(155+i*13))+120-13*i;
    left = Math.random() < 0.5 ? - 1 : 1;
    blue1 = blue + left*13*(5-i);
    blue2 = blue - left*13*(5-i);
    document.getElementById("box1").style.backgroundColor = "rgb(0,0," + blue1 + ")";
    document.getElementById("box2").style.backgroundColor = "rgb(0,0," + blue2 + ")";
    if (i > 0) {
      end = new Date;
      totalTime = totalTime + end.getTime() - start.getTime();
    }
    if (i < 5) {
      start = new Date;
    }
    i++;
  }
}
