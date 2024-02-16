$(async () => {

    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        }
    });

    let slideController = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        },
        vertical: false
    });

    initAnimations(controller, slideController);
    await logoAnimation(controller);
});

$(window).on('resize', () => {
    location.reload();
});

const logoAnimation = async (controller) => {
    let tween;

    tween = TweenMax.to('#main-bar-background', 0.8, {
        opacity: 1
    });

    new ScrollMagic.Scene({
        duration: 0
    })
        .setTween(tween)
        .addTo(controller)

    await sleep(1000);

    if ($(window).width() <= 700) {
        tween = TweenMax.to('#main-bar-text', 0.5, {
            opacity: 1
        });
    } else {
        tween = TweenMax.to('#main-bar-text', 0.5, {
            x: toPX('100vw')
        });
    }

    new ScrollMagic.Scene({
        duration: 0
    })
        .setTween(tween)
        .addTo(controller)
}

const initAnimations = (controller, slideController) => {
    // content panel 1
    const delay = 1;

    let wipeAnimation = new TimelineMax({easing: "easeInOut"})
        .to("#content-1-fact-1", 1, {x: toPX('100vw'), delay: delay})
        .to("#c1-1", 1, {opacity: 1})
        .to("#c1-2", 1, {opacity: 1})
        .to("#c1-3", 1, {opacity: 1})
        // animate to second panel
        .to("#content-panel-1-container", 1, {x: "-25%"})
        .to("#content-1-fact-2", 0, {display: "flex"})
        .to("#content-1-fact-2", 1, {x: toPX('100vw'), delay: delay})
        .to("#c2-1", 1, {opacity: 1})
        .to("#c2-2", 1, {opacity: 1})
        // animate to third panel
        .to("#content-panel-1-container", 1, {x: "-50%"})
        .to("#content-1-fact-3", 0, {display: "flex"})
        .to("#content-1-fact-3", 1, {x: toPX('100vw'), delay: delay})
        .to("#c3-1", 1, {opacity: 1})
        .to("#c3-2", 1, {opacity: 1})
        // animate to fourth panel
        .to("#content-panel-1-container", 1,   {x: "-75%"})
        .to("#content-1-fact-4", 1, {opacity: 1});

    let newsAnimations;

    if ($(window).width() <= 700) {
        newsAnimations = new TimelineMax()
            .to("#solutions-panel", 0.5, {x: toPX("-100vw")})
            .to("#costs-panel", 0.5, {x: toPX("-100vw")})
            .to("#news-panel", 0.5, {x: toPX("-100vw")})
    } else {
        newsAnimations = new TimelineMax()
            .to("#solutions-panel", 0.5, {y: toPX("-100vh")})
            .to("#costs-panel", 0.5, {y: toPX("-100vh")})
            .to("#news-panel", 0.5, {y: toPX("-100vh")})
    }

    new ScrollMagic.Scene({
        triggerElement: "#content-panel-2"
    })
        .setTween(newsAnimations)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#content-panel-1",
        triggerHook: "onLeave",
        duration: "400%",
    })
        .setPin("#content-panel-1")
        .setTween(wipeAnimation)
        .addTo(controller);
}



const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//converts viewport units to pixels (like "50vw" or "20vh" into pixels)
const toPX = (value) => {
    return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
}
