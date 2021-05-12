input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("E D G F B A C5 B ", 120)
})
input.onGesture(Gesture.LogoDown, function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onGesture(Gesture.ScreenUp, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onGesture(Gesture.LogoUp, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
