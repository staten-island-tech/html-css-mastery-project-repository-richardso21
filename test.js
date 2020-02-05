// welcome-intro
window.onload = function(){
    welcomefunction();
}

function welcomefunction() {
  const welcome = document.querySelectorAll(".welcome-intro path");
  // console.log(welcome);
  for (let i = 0; i < welcome.length; i++) {
    console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`);
  }
}