function loader(){
  var tl = gsap.timeline()
  
  tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
  })
  
  tl.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1.5,
    stagger:0.1
  })
  
  tl.to("#loader",{
    opacity:0,
  })
  
  tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay: -0.5
  })
  
  tl.to("#loader",{
    display:"none",
  })
  }
  loader();