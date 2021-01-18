


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


// ScrollTrigger.batch(".left", {
//   onEnter: batch => 
//   gsap.to(batch, 
//     {
//         x:0, 
//         opacity:1, 
//         stagger: {each: 2, 
//             overwrite: true,
//             duration: 1
//         },
//     })    
// })


// ScrollTrigger.batch(".right", {
//     onEnter: batch => 
//     gsap.to(batch, 
//       {
//           x:0, 
//           opacity:1, 
//           stagger: {each: 1, 
//             overwrite: true},
//         })
// })

// ScrollTrigger.batch(".gallery-img", {
//     onEnter: batch => 
//     gsap.to(batch, 
//       {
//           y:0, 
//           opacity:1, 
//           stagger: {each: 1, 
//             overwrite: true}
//         })
//   })


