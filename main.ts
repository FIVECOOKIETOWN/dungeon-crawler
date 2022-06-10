tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 9 9 f f f . . . . 
    . . . f f f 9 9 9 9 f f f . . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . f f 6 9 9 9 9 9 9 6 6 f . . 
    . . f 6 9 f f f f f f 9 6 f . . 
    . . f f f f 6 6 6 6 f f f f . . 
    . f f 6 f b f 4 4 f b f 6 f f . 
    . f 6 6 4 1 f d d f 1 4 6 6 f . 
    . . f 6 6 d d d d d d 6 6 f . . 
    . . . f 6 6 4 4 4 4 6 6 f . . . 
    . . 6 4 f 9 9 9 9 9 9 f 4 6 . . 
    . . 4 d f 9 9 9 9 9 9 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
