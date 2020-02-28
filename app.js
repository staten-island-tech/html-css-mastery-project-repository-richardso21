function wipes(){
  const controller = new ScrollMagic.Controller;

  var wipeAnimation = new TimelineMax()
  // animate to second panel
  // .to("#test", 0.5, {z: -150})		// move back in 3D space
  // .to("#test", 1,   {x: "-25%"})	// move in to first panel
  // .to("#test", 0.5, {z: 0})
  .fromTo("section.block-culture", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})

  new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.content-blocks',
    triggerHook: 'onLeave'
  })
  .setPin('.block-why')
  .setTween(wipeAnimation)
  .addIndicators()
  .addTo(controller)
}

wipes();
