document.addEventListener("DOMContentLoaded", function(event) { 

let constrain = 500;
let constrain2 = 700;
let mouseOverContainer = document.getElementById("ex0");
let ex1Layer = document.getElementById("ex1-layer");
let ex2Layer = document.getElementById("ex2-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);
  let xy2 = [e.clientX, e.clientY];
  let position2 = xy2.concat([ex2Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
    transformElement2(ex2Layer, position2);
  });
};

function transforms2(x2, y2, el2) {
    let box2 = el2.getBoundingClientRect();
    let calcX2 = -(y2 - box2.y - (box2.height / 2)) / constrain2;
    let calcY2 = (x2 - box2.x - (box2.width / 2)) / constrain2;
    
    return "perspective(100px) "
      + "   rotateX("+ calcX2 +"deg) "
      + "   rotateY("+ calcY2 +"deg) ";
  };

  function transformElement2(el2, xyE2) {
    el2.style.transform  = transforms2.apply(null, xyE2);
  }


});