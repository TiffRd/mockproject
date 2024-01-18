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
