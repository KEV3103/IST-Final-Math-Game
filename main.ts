let Ans = 0
let Number_1 = 0
let Number_2 = 0
input.onButtonPressed(Button.A, function () {
    Ans = 0
    Number_1 = randint(0, 5)
    Number_2 = randint(0, 5)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(Number_1)
    basic.pause(100)
    basic.showString("+")
    basic.pause(100)
    basic.showNumber(Number_2)
    basic.pause(100)
    basic.showString("=")
    while (!(input.buttonIsPressed(Button.B))) {
        if (input.buttonIsPressed(Button.A)) {
            Ans += 1
            basic.showNumber(Ans)
        }
    }
    if (Ans == Number_1 + Number_2) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.pause(3000)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        game.gameOver()
    }
    basic.pause(1000)
})
