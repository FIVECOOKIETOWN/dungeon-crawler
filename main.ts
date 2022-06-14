controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f 6 6 6 f f 6 6 6 f . . . 
        . . . f f f f 9 9 f f f f . . . 
        . . f f 6 9 6 9 9 6 9 6 f f . . 
        . . f 6 9 f 9 f f f 9 f 6 f . . 
        . . f f f 9 f 6 6 9 9 f f f . . 
        . . f 6 9 f f 6 6 9 f 6 6 f . . 
        . f f 6 f f 6 6 6 f 6 6 6 f f . 
        . f f 6 6 6 6 6 6 6 6 6 6 f f . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . 6 f f f f f f f f 4 6 . . 
        . . . 4 f 9 9 9 9 9 6 d d 4 . . 
        . . . 6 f f f f f f 6 6 4 . . . 
        . . . . f f f . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 6 6 6 6 6 6 f f . . . . 
        . . f 6 6 6 6 6 6 6 6 f f . . . 
        . . f f f f f 6 6 6 6 6 f . . . 
        . f 6 9 9 9 9 f f f f f f . . . 
        . f 9 6 f f f f 9 9 9 6 f . . . 
        . f f f 6 6 6 f f f f f f f . . 
        . f 6 6 4 4 f b 6 4 4 6 f f . . 
        . . f 6 4 4 f 1 4 d 4 6 6 f . . 
        . . f 6 f f 4 6 6 6 6 6 f . . . 
        . . . f 6 4 6 d d 4 f . . . . . 
        . . . f 9 9 6 d d 6 f . . . . . 
        . . f f 5 5 f 6 6 f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`PlayerRight`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 6 6 6 6 f f . . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f f f f f f f f f f f . . 
        . . f 6 6 9 9 9 9 9 9 6 f f . . 
        . f f 6 9 f f f f f f 9 6 f f . 
        . f f f f f 6 6 6 6 f f f f f . 
        . . f 6 f b f 4 4 f b f 6 f . . 
        . . f 6 4 1 f 4 4 f 1 4 6 f . . 
        . . 6 f 6 4 4 f f 4 4 6 f . . . 
        . . 6 4 d d 6 6 6 6 6 f 6 f . . 
        . . . 6 d d 6 6 6 6 6 f 4 6 . . 
        . . . . 6 6 f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`PathToPurpleRoom`)
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("C D F D F D F G ", 120)
})
