namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
    export const Backround = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    controller.moveSprite(sprite, 10, 20)
})
function show_character_picker () {
    scene.centerCameraAt(80, 60)
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        let gravity = 0
        value.ay = gravity
        value.setFlag(SpriteFlag.Invisible, false)
    }
    showCharacterScreen = true
    Huge_stick = sprites.create(assets.image`huge stick`, SpriteKind.SelectableCharacter)
    Huge_stick.z = 101
    Huge_stick.setPosition(45, 67)
    sprites.setDataSprite(Huge_stick, "player", stick)
    textSprite = textsprite.create("Choose Your Character", 11, 15)
    textSprite.z = 101
    textSprite.setPosition(80, 29)
    Big_twif = sprites.create(assets.image`BIG TWIF`, SpriteKind.SelectableCharacter)
    Big_twif.z = 101
    Big_twif.setPosition(90, 67)
    sprites.setDataSprite(Big_twif, "player", twif)
    ourCharacters = [Huge_stick, Big_twif]
    current_character_index = 1
    character_selector_box = sprites.create(img`
        cccccccccccccccccccccccccccccccccccc
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        c..................................c
        cccccccccccccccccccccccccccccccccccc
        `, SpriteKind.Backround)
    character_selector_box.z = 101
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast1, function (sprite, location) {
    controller.moveSprite(sprite, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(sprite, 30, 30)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`level1`)
    if (showCharacterScreen) {
        if (current_character_index == 0) {
            thePlayer = stick
            sprites.destroy(twif)
        } else {
            thePlayer = twif
            sprites.destroy(stick)
        }
        tiles.placeOnRandomTile(thePlayer, sprites.dungeon.darkGroundNorthEast1)
        scene.cameraFollowSprite(thePlayer)
        for (let value of sprites.allOfKind(SpriteKind.SelectableCharacter)) {
            sprites.destroy(value)
        }
        for (let value of sprites.allOfKind(SpriteKind.Backround)) {
            sprites.destroy(value)
        }
        for (let value of sprites.allOfKind(SpriteKind.Text)) {
            sprites.destroy(value)
        }
        controller.moveSprite(thePlayer, 100, 0)
        showCharacterScreen = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`maybe final`)
    info.setLife(5)
    tiles.placeOnTile(sprite, tiles.getTileLocation(14, 1))
    sprite.setVelocity(100, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + 1) % ourCharacters.length % ourCharacters.length
    }
})
function Enemy_respawn () {
    for (let index = 0; index < 1; index++) {
        enemy_sprite = sprites.create(Enemy_images._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemy_sprite, Spawn_location.removeAt(randint(0, Spawn_location.length - 0)))
        enemy_sprite.setBounceOnWall(true)
        enemy_sprite.setVelocity(randint(-50, 50), randint(-50, 50))
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    controller.moveSprite(sprite, 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(15, 6), assets.tile`myTile2`)
    tiles.setTileAt(tiles.getTileLocation(10, 13), assets.tile`myTile3`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + 1) % ourCharacters.length
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.darkGroundSouthWest0)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 21), assets.tile`myTile7`)
    tiles.setTileAt(tiles.getTileLocation(14, 28), assets.tile`myTile9`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(14, 1))
    info.setLife(5)
    Spawn_location = tiles.getTilesByType(sprites.dungeon.darkGroundSouthWest0)
    Enemy_images = [assets.image`Twif`, assets.image`Stick`, assets.image`myImage1`]
    for (let index = 0; index < 5; index++) {
        enemy_sprite = sprites.create(Enemy_images._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemy_sprite, Spawn_location.removeAt(randint(0, Spawn_location.length - 0)))
        enemy_sprite.setBounceOnWall(true)
        enemy_sprite.setVelocity(randint(-50, 50), randint(-50, 50))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`myTile4`)
    tiles.setTileAt(tiles.getTileLocation(2, 21), assets.tile`myTile6`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthEast1, function (sprite, location) {
    controller.moveSprite(sprite, 100, 100)
})
spriteutils.createRenderable(100, function (screen2) {
    if (showCharacterScreen) {
        screen2.fill(11)
        currently_selected_character = ourCharacters[current_character_index]
        character_selector_box.setPosition(currently_selected_character.x, currently_selected_character.y)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest0, function (sprite, location) {
    controller.moveSprite(sprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    Enemy_respawn()
})
let currently_selected_character: Sprite = null
let Spawn_location: tiles.Location[] = []
let Enemy_images: Image[] = []
let enemy_sprite: Sprite = null
let thePlayer: Sprite = null
let character_selector_box: Sprite = null
let current_character_index = 0
let ourCharacters: Sprite[] = []
let Big_twif: Sprite = null
let textSprite: TextSprite = null
let Huge_stick: Sprite = null
let showCharacterScreen = false
let twif: Sprite = null
let stick: Sprite = null
scene.setBackgroundImage(assets.image`DUNGEON MAZE`)
pauseUntil(() => controller.A.isPressed())
stick = sprites.create(assets.image`myImage`, SpriteKind.Player)
twif = sprites.create(assets.image`myImage0`, SpriteKind.Player)
show_character_picker()
