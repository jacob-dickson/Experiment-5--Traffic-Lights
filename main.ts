basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . # # . .
            . # . # .
            `)
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # # . .
            . # . # .
            `)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    basic.pause(500)
    basic.showLeds(`
        . . # . #
        . # # # .
        # . # . .
        . # # . .
        . # . # .
        `)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
