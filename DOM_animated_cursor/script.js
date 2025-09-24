let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");

let mouseX, mouseY;
let animationId = null;
let timer = null;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";

  if (!animationId) {
    animateShadowCursor();
  }
  
clearTimeout(timer);
  timer = setTimeout(() => {
    cancelAnimationFrame(animationId);
    animationId = null;
  }, 2000);


});

function animateShadowCursor() {
  let currentX = parseFloat(shadowCursor.style.left) || "0";
  let currentY = parseFloat(shadowCursor.style.top) || "0";

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  shadowCursor.style.left = distanceX * 0.1 + currentX + "px";
  shadowCursor.style.top = distanceY * 0.1 + currentY + "px";
  animationId = requestAnimationFrame(animateShadowCursor);
  console.log(animationId);
}
