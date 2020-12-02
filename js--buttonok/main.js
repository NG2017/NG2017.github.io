window.onload = function () {
  // write your code here




  document.getElementById("flip-flop").onclick = function() {leftRight()};

  function leftRight() {
    if (document.getElementById("flip-flop").classList == "") {
      document.getElementById("flip-flop").classList.add("rightSide");
      document.getElementById("flip-flop").innerHTML = "Go Left!";
    }
    else {
      document.getElementById("flip-flop").classList.remove("rightSide");
      document.getElementById("flip-flop").innerHTML = "Go Right!";
    }
  }
   
  
  document.getElementById("change-color").onclick = function() {selfColor()};
  
  function selfColor() {
    if (document.getElementById("change-color").classList == "") {
      document.getElementById("change-color").classList.add("redButton");
    }
    else {
      document.getElementById("change-color").classList.remove("redButton");
    }
  }
   
  document.getElementById("change-neighbour-color").onclick = function() {neighbourColor()};
  function neighbourColor()
  {
  let hash = "#";
  let a = Math.floor(Math.random() * 16).toString(16); 
  let b = Math.floor(Math.random() * 16).toString(16); 
  let c = Math.floor(Math.random() * 16).toString(16);
  let d = Math.floor(Math.random() * 16).toString(16);
  let e = Math.floor(Math.random() * 16).toString(16);
  let f = Math.floor(Math.random() * 16).toString(16);
  
  let randColor = hash.concat(a, b, c, d, e, f);
  
  document.getElementById("neighbour").style.background = randColor;  
  }
  
  
  
  document.getElementById("count").onclick = function() {counterBtn()};
  
  function counterBtn() {
    let actualCount = document.getElementById("count").innerHTML;
    let tonumber = parseInt(actualCount);
    let total = tonumber + 1;
    document.getElementById("count").innerHTML = total;
  }


















};



