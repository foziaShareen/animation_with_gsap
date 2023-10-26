// gsap.to("h1",{
    
//     x:500,
//     delay:1,
//     duration:3,
//     color:"red",
//     rotate:360


// 
var t1 = gsap.timeline();
t1.from("#nav1 img,#nav2 h3,#nav3 button ,#nav3 h2",{
    y:-100,
    duration:2,
    opacity:0,
    stagger:0.5,
})
t1.from("#main h1",{
    y:100,
    
    opacity:0,
    stagger:.5,
})
t1.from("#main>img",{
    opacity:0,
    scale:0,
    stagger:.5

})
t1.from("h5",{
    opacity:0,
    scale:0,
    yoyo:true
    
})
t1.to("h5",{
    y:30,
    duration:1,
    repeat:-1

})