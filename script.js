gsap.to(".dotparent", {
    x: -50,
    y: -50,
    duration: 0
})

var t1 = gsap.timeline({ repeat: Infinity });
var t2 = gsap.timeline({ repeat: Infinity });
var t3 = gsap.timeline({ repeat: Infinity });
var t4 = gsap.timeline({ repeat: Infinity });
var t5 = gsap.timeline({ repeat: Infinity });

t1.to("#dotparent1", {
    delay: 0
}).to("#dotparent1", {
    rotate: 90,
    opacity: 1,
    duration: 1
}).to("#dotparent1", {
    rotate: 450,
    duration: 1.5
}).to("#dotparent1", {
    rotate: 570,
    duration: 0.5,
    opacity: 0
}).to("#dotparent1", {
    delay: 1.0
})

t2.to("#dotparent2", {
    delay: 0.1
}).to("#dotparent2", {
    rotate: 60,
    opacity: 1,
    duration: 1
}).to("#dotparent2", {
    rotate: 420,
    duration: 1.5
}).to("#dotparent2", {
    rotate: 570,
    duration: 0.6,
    opacity: 0
}).to("#dotparent2", {
    delay: 0.8
})

t3.to("#dotparent3", {
    delay: 0.2
}).to("#dotparent3", {
    rotate: 30,
    opacity: 1,
    duration: 1
}).to("#dotparent3", {
    rotate: 390,
    duration: 1.5
}).to("#dotparent3", {
    rotate: 570,
    duration: 0.7,
    opacity: 0
}).to("#dotparent3", {
    delay: 0.6
})

t4.to("#dotparent4", {
    delay: 0.3
}).to("#dotparent4", {
    rotate: 0,
    opacity: 1,
    duration: 1
}).to("#dotparent4", {
    rotate: 360,
    duration: 1.5
}).to("#dotparent4", {
    rotate: 570,
    duration: 0.8,
    opacity: 0
}).to("#dotparent4", {
    delay: 0.4
})

t5.to("#dotparent5", {
    delay: 0.4
}).to("#dotparent5", {
    rotate: -30,
    opacity: 1,
    duration: 1
}).to("#dotparent5", {
    rotate: 330,
    duration: 1.5
}).to("#dotparent5", {
    rotate: 570,
    duration: 0.9,
    opacity: 0
}).to("#dotparent5", {
    delay: 0.2
})







// Old way
const loadAnimation = () => {
    // Animation chain starts here
    // Phase 1
    gsap.to("#dotparent1", {
        delay: 0,
        opacity: 1
    })
    gsap.to("#dotparent1", {
        delay: 0,
        rotate: 90,
        duration: 1.5
    })
    gsap.to("#dotparent2", {
        delay: 0.1,
        opacity: 1
    })
    gsap.to("#dotparent2", {
        delay: 0.1,
        rotate: 60,
        duration: 1.4
    })
    gsap.to("#dotparent3", {
        delay: 0.2,
        opacity: 1
    })
    gsap.to("#dotparent3", {
        delay: 0.2,
        rotate: 30,
        duration: 1.3
    })
    gsap.to("#dotparent4", {
        delay: 0.3,
        rotate: 0,
        duration: 1.2
    })
    gsap.to("#dotparent4", {
        delay: 0.3,
        opacity: 1
    })
    gsap.to("#dotparent5", {
        delay: 0.4,
        rotate: -30,
        duration: 1.1
    })
    gsap.to("#dotparent5", {
        delay: 0.4,
        opacity: 1
    })

    // Phase 2
    gsap.to("#dotparent1", {
        delay: 1,
        rotate: 450,
        duration: 1.5
    })
    gsap.to("#dotparent2", {
        delay: 1.1,
        rotate: 420,
        duration: 1.5
    })
    gsap.to("#dotparent3", {
        delay: 1.2,
        rotate: 390,
        duration: 1.5
    })
    gsap.to("#dotparent4", {
        delay: 1.3,
        rotate: 360,
        duration: 1.5
    })
    gsap.to("#dotparent5", {
        delay: 1.4,
        rotate: 330,
        duration: 1.5
    })
    // Phase 3
    gsap.to("#dotparent1", {
        delay: 2.4,
        rotate: 570,
        duration: 0.5,
        opacity: 0
    })
    gsap.to("#dotparent2", {
        delay: 2.5,
        rotate: 570,
        duration: 0.6,
        opacity: 0
    })
    gsap.to("#dotparent3", {
        delay: 2.6,
        rotate: 570,
        duration: 0.7,
        opacity: 0
    })
    gsap.to("#dotparent4", {
        delay: 2.7,
        rotate: 570,
        duration: 0.8,
        opacity: 0
    })
    gsap.to("#dotparent5", {
        delay: 2.8,
        rotate: 570,
        duration: 0.9,
        opacity: 0
    })
    // Phase 4
    gsap.to(".dotparent", {
        rotate: -135,
        delay: 3.69,
        duration: 0
    })
    // Animation chain ends here
}

// Play the animation every 4.7 seconds  
// setInterval(loadAnimation, 3700);

// Initial call to start the animation immediately  
// loadAnimation();
