$(async () => {

    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        }
    });

    initAnimations(controller);
    await logoAnimation(controller);
})

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

const initAnimations = (controller) => {
    // content panel 1
    let wipeAnimation = new TimelineMax()
        .to("#content-1-fact-1", 0.5, {x: toPX('100vw')})
        // animate to second panel
        .to("#content-panel-1-container", 1,   {x: "-33.333%", delay: 2})
        .to("#content-1-fact-2", 0, {display: "flex"})
        .to("#content-1-fact-2", 0.5, {x: toPX('100vw')})
        // animate to third panel
        .to("#content-panel-1-container", 1,   {x: "-66.666%", delay: 2})
        .to("#content-1-fact-3", 0, {display: "flex"})
        .to("#content-1-fact-3", 0.5, {x: toPX('100vw')})

    new ScrollMagic.Scene({
        triggerElement: "#content-panel-1",
        triggerHook: "onLeave",
        duration: "300%"
    })
        .setPin("#content-panel-1")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
}



const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//converts viewport units to pixels (like "50vw" or "20vh" into pixels)
const toPX = (value) => {
    return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
}
