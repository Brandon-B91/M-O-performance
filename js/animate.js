// gsap.to(".left", {
//     scrollTrigger:
//      ".left", 
//      x: -100, x: 0, duration: .75,
//      opacity: 1,
//      stagger: {
//          amount: .05
//      }
// });

// gsap.to(".right", {
//     scrollTrigger:
//      ".right", 
//      x: 0, duration: 1,
//      opacity: 1,
//      stagger: {
//          grid: [1, 4],
//          amount: .05
//      }
// });

ScrollTrigger.batch(".left", {
  onEnter: batch => 
  gsap.to(batch, 
    {
        x:0, 
        opacity:1, 
        stagger: {each: 1, 
            overwrite: true}
    })    
})

ScrollTrigger.batch(".right", {
    onEnter: batch => 
    gsap.to(batch, 
      {
          x:0, 
          opacity:1, 
          stagger: {each: 1, 
            overwrite: true}
        })
})

ScrollTrigger.batch(".gallery-img", {
    onEnter: batch => 
    gsap.to(batch, 
      {
          y:0, 
          opacity:1, 
          stagger: {each: 1, 
            overwrite: true}
        })
  })
