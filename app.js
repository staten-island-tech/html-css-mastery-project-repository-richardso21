// function wipes(){
//   const controller = new ScrollMagic.Controller;
//   var wipeAnimation = new TimelineMax()
//   // animate to second panel
//   // .to("#test", 0.5, {z: -150})		// move back in 3D space
//   // .to("#test", 1,   {x: "-25%"})	// move in to first panel
//   // .to("#test", 0.5, {z: 0})
//   .fromTo("section.block-culture", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
//   new ScrollMagic.Scene({
//     duration: '100%',
//     triggerHook: 'onLeave',
//     triggerElement: '.content-blocks'
//   })
//   .setPin('.content-blocks')
//   .setTween(wipeAnimation)
//   .addIndicators()
//   .addTo(controller)
// }
// wipes();
// =======================================

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

// Letter 0 is 2000.1795654296875
// Letter 1 is 3178.713134765625

// ===========================================

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
  .add(TweenMax.to(".why-path1", 1, {strokeDashoffset: 0, ease:Linear.easeNone}));

var scene = new ScrollMagic.Scene({triggerElement: ".content-blocks", duration: 100, tweenChanges: true, triggerHook: 'onLeave'})
          .setTween(tween)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);

