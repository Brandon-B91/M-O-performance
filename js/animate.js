


gsap.utils.toArray(".left").forEach(box => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        // toggleActions: "play none none none",
        start: "top 90%",
        markers: false
      }
    });
  
    tl.to(box, {
      duration: .7,
      opacity: 1,
      x: 0
    });
  });

  gsap.utils.toArray(".right").forEach(box => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        // toggleActions: "play none none none",
        start: "top 90%",
        markers: false
      }
    });
  
    tl.to(box, {
      duration: .7,
      opacity: 1,
      x: 0
    });
  });

  gsap.utils.toArray(".gallery-img").forEach(box => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        // toggleActions: "play none none none",
        start: "top 80%",
        markers: false
      }
    });
  
    tl.to(box, {
      duration: 1,
      opacity: 1,
      y: 0
    });
  });



