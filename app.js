function wipes(){
  const controller = new ScrollMagic.Controller;

  var wipeAnimation = new TimelineMax()
  // animate to second panel
  // .to("#test", 0.5, {z: -150})		// move back in 3D space
  // .to("#test", 1,   {x: "-25%"})	// move in to first panel
  // .to("#test", 0.5, {z: 0})

  new ScrollMagic.Scene({
    duration: 500,
    triggerElement: '.block-why',
    triggerHook: 0
  })
  // .setPin('#test')
  .addIndicators()
  .addTo(controller)
}

wipes();
