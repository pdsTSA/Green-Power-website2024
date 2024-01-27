$(async () => {
    await sleep(1000);

    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    await logoAnimation(controller);
})

const logoAnimation = async (controller) => {
    let tween;

    tween = TweenMax.to('#main-bar-background', 1, {
        opacity: 1
    });

    new ScrollMagic.Scene({
        duration: 0
    })
        .setTween(tween)
        .addTo(controller)

    await sleep(1000);

    tween = TweenMax.to('#main-bar-text', 1, {
        x: toPX('50vw')
    });

    new ScrollMagic.Scene({
        duration: 0
    })
        .setTween(tween)
        .addTo(controller)
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//converts viewport units to pixels (like "50vw" or "20vh" into pixels)
const toPX = (value) => {
    return parseFloat(value) / 100 * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
}
