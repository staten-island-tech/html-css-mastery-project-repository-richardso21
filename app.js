// window.onload = function(){
//   this.welcomefunction();
// }
// function welcomefunction() {
//   // const welcome = document.querySelectorAll(".welcome-intro path");
//   // // console.log(welcome);
//   const welcome = document.querySelectorAll(".why-dynamic path");
//   console.log(welcome);
//   for (let i = 0; i < welcome.length; i++) {
//     console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`);
//   }}

// Letter 0 is 422.51px
// Letter 1 is 293.90px
// Letter 2 is 216.07px
// Letter 3 is 183.45px
// Letter 4 is 254.51px
// Letter 5 is 225.63px
// Letter 6 is 254.51px
// Letter 7 is 307.03px
// Letter 8 is 220.42px

// ===========================================

var controller = new ScrollMagic.Controller();

const tween = new TimelineMax()
.add(TweenMax.to('.why-dynamic path', 1, {strokeDashoffset:0, ease:Linear.easeNone}))
.add(TweenMax.to('.why-dynamic path', .25,{fill:'white'}),0.75);

var scene = new ScrollMagic.Scene({triggerElement: ".why-dynamic", duration: "60%", tweenChanges: true, triggerHook: 1})
          .setTween(tween)
          .addIndicators() 
          .addTo(controller);

// ==========================================

