gsap.from("#container #navs ",{
  opacity:0,
  y:-15,
  duration:1
})

gsap.from("#title h1 ",{
  opacity:0,
  y:15,
  duration:1
})




gsap.from("#container2 h1",{
    opacity:0,
    y:15,
    duration:1,
    scrollTrigger:{
        trigger:"#container2",
    }
} )


gsap.from("#artists #img1",{
    opacity:0,
    y:15,
    duration:1,
    scrollTrigger:{
        trigger:"#artists",
    }
} )

gsap.from("#artists #img2",{
    opacity:0,
    y:15,
    duration:1,
    scrollTrigger:{
        trigger:"#artists",
        scrub:1
    }
} )


gsap.from("#artists #img3",{
    opacity:0,
    y:15,
    duration:1,
    scrollTrigger:{
        trigger:"#artists",
        start:"top 60%"
    }
} )

gsap.from("#artists #img4",{
    opacity:0,
    y:15,
    duration:1,
    scrollTrigger:{
        trigger:"#artists",
    }
} )
// Container 3

gsap.from("#conatiner3 #titleSchedule ",{
  opacity:0,
  y:15,
  duration:0.1,
  scrollTrigger:{
    trigger:"#wrapper",
    start:"top 70%",
    scrub:2,
  }
})


gsap.from("#conatiner3 #eventstoSchedule ",{
  opacity:0,
  x:150,
  duration:0.1,
  scrollTrigger:{
    trigger:"#wrapper",
    start:"top 200%",
    scrub:2,
  }
})
