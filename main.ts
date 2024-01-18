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
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . . 3 3 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(twif)
scene.cameraFollowSprite(twif)
controller.moveSprite(twif)
stick.setStayInScreen(true)
