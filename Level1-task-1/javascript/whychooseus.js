
// locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// gsap animation
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:3,
    ease:"power4",
    opacity:0
})
