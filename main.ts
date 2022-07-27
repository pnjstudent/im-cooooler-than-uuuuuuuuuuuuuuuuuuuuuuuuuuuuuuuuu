input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
