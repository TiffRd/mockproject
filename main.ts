let stick = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . b b b b b b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . b b b . b . . . . . . . . 
    . . . . . b b b b b b b b b . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . b b . . b b . . . . . . 
    . . . . b . . . . b . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(stick)
controller.moveSprite(stick)
stick.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level1`)
let twif = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . 3 3 . . . 3 3 . . . . . . 
    . . . 3 3 . . . . . 3 3 . . . . 
    . . . 3 3 . . . . . . . 3 . . . 
    . . . 3 . . . . . . . . . 3 . . 
    . . 3 . . . . . . . . . . . 3 . 
    . . 3 . . . . . . . . . . . . 3 
    . . . 3 . . . . . . . . . . . 3 
    . . . . 3 . . . . . . . . . . 3 
    . . . . . 3 . . . . . . . . . 3 
    . . . . . . 3 3 . . . . . . . 3 
    . . . . . . . . 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(twif)
