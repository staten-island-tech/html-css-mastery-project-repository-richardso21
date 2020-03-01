if (window.innerWidth >= 900) { //check if it's mobile

  var controller = new ScrollMagic.Controller()

  dynamicTitle(".why-dynamic path", "why-dynamic");
  dynamicTitle(".culture-dynamic path", ".culture-dynamic");
  dynamicTitle(".food-dynamic path", ".food-dynamic")
  dynamicTitle(".conv-dynamic path", ".conv-dynamic")

  function dynamicTitle(cssItem, triggerItem) {
    // set stroke dash length for all letters first
    // removes need to input values to style sheet manually
    const elems = document.querySelectorAll(cssItem);
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.strokeDashoffset = `${elems[i].getTotalLength()}px`;
      elems[i].style.strokeDasharray = `${elems[i].getTotalLength()}px`;
    }

    // add gsap timeline animation
    const tween = new TimelineMax()
      .add(TweenMax.to(cssItem, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))
      .add(TweenMax.to(cssItem, .25, { fill: 'white' }), 0.75)

    // hookup to scrollmagic controller
    var scene = new ScrollMagic.Scene({
      triggerElement: triggerItem,
      duration: "60%",
      tweenChanges: true,
      triggerHook: 1
    })
      .setTween(tween)
      .addTo(controller);
  }

  setParallax(".parallax1");
  setParallax(".parallax3");
  setParallax(".parallax4");
  setParallax(".parallax5");
  // setParallax(".parallax2");

  function setParallax(elem) {
    new ScrollMagic.Scene({ triggerElement: elem, triggerHook: 'onEnter', duration: '200%' })
      .setTween(elem + " > div", { y: "50%", ease: Linear.easeNone })
      // .addIndicators()
      .addTo(controller);

  };

  new ScrollMagic.Scene({ triggerElement: ".parallax2", triggerHook: 'onEnter', duration: '250%' })
    .setTween(".parallax2 > div", { y: "30%", ease: Linear.easeNone })
    // .addIndicators()
    .addTo(controller);
}

