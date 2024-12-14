var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 125 +"px"
    blur.style.top = dets.y - 125 +"px"
}
)

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3,
        crsr.style.border = "1px solid #fff",
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #95c11e",
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to("#nav",{
    backgroundColor : "black",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        //markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        //markers: true,
        start: "top 50%",
        end: "top 35%",
        scrub: 2
    }
})

gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 2,
    //stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        //markers: true,
        start: "top 75%",
        end: "top 60%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        markers: false,
        start: "top 40%",
        end: "top 15%",
        scrub: 2
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        markers: false,
        start: "top 40%",
        end: "top 15%",
        scrub: 2
    }
})

gsap.from("#page3b h1",{
    y:70,
    scrollTrigger:{
        trigger: "#page3b h1",
        scroller: "body",
        //markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 2
    }
})