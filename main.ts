let stick = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a a . . . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . . a a a . . . . . . . 
    . . . . . . . a . . . . . . . . 
    . . . a a a . a . . . . . . . . 
    . . . . . a a a a a a a a a . . 
    . . . . . . . a . . . . . . . . 
    . . . . . . a a . . . . . . . . 
    . . . . . a a a a . . . . . . . 
    . . . . a a . . a a . . . . . . 
    . . . . a . . . . a . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(stick)
controller.moveSprite(stick)
stick.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level1`)
let twif = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 3 3 3 3 3 . . . . . . . .
    . f f f f 3 3 3 3 3 3 . . . . .
    f f f f f f 3 3 f f 3 3 . . . .
    f f f f 1 f 3 f f f f 3 3 . . .
    f 1 f f 1 f f 1 1 1 1 f 3 3 . .
    f 1 1 1 1 f f 1 1 1 1 1 f 3 . .
    f f 1 1 1 f 1 1 1 1 1 1 f 3 3 .
    . f f f f f f 1 1 1 f f f 3 3 3
    . . 3 3 3 3 f 1 1 f f f f 3 3 3
    . . 3 3 1 3 f f 1 f f f 3 3 3 3
    . . 3 3 3 3 3 f f f f f 3 3 3 3
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 3
    . . . . . 3 3 3 3 3 3 3 3 3 3 .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.player2.moveSprite(twif)
scene.cameraFollowSprite(twif)
controller.moveSprite(twif)
stick.setStayInScreen(true)
