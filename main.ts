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
    Huge_stick = sprites.create(assets.image`He is right`, SpriteKind.SelectableCharacter)
    Huge_stick.z = 101
    Huge_stick.setPosition(32, 67)
    sprites.setDataSprite(Huge_stick, "player", stick)
    textSprite = textsprite.create("Choose Your Character", 11, 15)
    textSprite.z = 101
    textSprite.setPosition(80, 29)
    Big_twif = sprites.create(assets.image`myImage`, SpriteKind.SelectableCharacter)
    Big_twif.z = 101
    Big_twif.setPosition(73, 67)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(sprite, 30, 30)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + 1) % ourCharacters.length % ourCharacters.length
    }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    thePlayer.setPosition(24, 102)
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
let currently_selected_character: Sprite = null
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
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
    fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
    fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
    ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
    fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
    fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
    fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
    fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
    fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
    fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
    ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
    fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
    ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
    fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
    ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
    ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
    fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
    fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
    ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
    cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
    ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
    ffcfffbdb1111111111111111111111111ccccccccccccccc11111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
    fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
    fffffbdddd11111fff1111111f11111f11ffcc1cc1fcc1cfffffff1ccccffffffffc11fffff1111ff111ddddfdddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
    ffffcbddddd1111f1ffff1111f11111f11ffccccccfcccff11111ff1cccfccccccc11f11111f111ff111d1ddfdddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
    fffccddddd11111f1111ff111f11111f11f1fcccccfcccfc111111111ccfccccccc1f1111111f11f1f11ddddfdddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
    ffdcbddddd11111f11111f111f11111f11f1fcccccfcccfc111111111ccfcccccc11f1111111f11f1f11ddddfdddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
    ffccddddddd1111f111111f11f11111f11f11fccccfcccf1111111111ccfcccccc11f1111111f11f11f11dddfdddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
    ffcbdddddd11111f111111f11f11111f11f11fccccfcccf1b11111111ccfcccccc11f1111111f1bf11f1ddddfdddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
    ffcbddddd111111f1111111f1f11111f11f111fcccfcccfccccccc111ccfcccccc11f1111111f11f111fddddfddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
    fcbbdddddd11111f1111cccf1fcc111fccfc11fcccfcccfccccccccc1ccfcccccc11f1111111f11f111fddddfddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
    fcddddddd111111f111ccccf1fccc11fccfc11fcccfcccfcbbccbbbccccfffffcc11f1111111f11f111dfdddfddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
    ccddddddd111111f111ccccfbfccc11fccfc111fccfcccfcbbccffffffcfcccccc11f1111111f11f1111dfddfddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
    ddddddddd111111f111ccc1fcfcccccf1cfc111fccfcccfccccccccccfcfcccccc11f1111111f11f111bdfddfddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
    dddddddd1111111f111cc11fcf11cccf1cfc111cfcfcccff1111cccfcfcfcccccc11f1111111f11f111bddf1fddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
    dddddddd1111111f111cccfccfbccccfccfcc11cfcfccccf111111cfcfcfcccccc11f1111111f11f111bddf1fddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
    dddddddd1111111f111cfffccfcccccfccfc111ccffccc1ff1b111ffcfcfcccccc11f1111111f11f1dbb1ddffddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
    dddddddddd11111ff11ffcccccfcccfcccf1bb1ccffccc11fffb1ffccfcfcccccc111f1b111f111f1dbbdddffddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
    dddddddddd111111ffffcccccccfffccccfcccccccfccc1111ffff1ccfcfffffffbb11fffff1111f1db1ddddfddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
    dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
    ddddddddd1d11111111111cccccccccccccccccccccccc111111cc1ccccccccccccc1111111111bbbbddddddddddddddddbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
    ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
    ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
    dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
    dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
    dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
    ddddddddddddddddbb1bbdccccccccccccccccccfcccccccccccccfccccccccffcb1111ffffffffffddfffffffffddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
    ddddddddddddddddbb1bbdccccccccccccccccccffcccccccccccffccccccccffcb1b11d1111bbbdfddfdddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
    ddddddddddddddddbb1b11ccccccccccccccccccfcfcccccccccfcfccccccccffccbbb111111bbbfdddfdddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
    ddddddddddddddddbddbd1ccccccccccccccccccfcfcccccccccfcfccccccccfcfbbb111d111bbbfdddfddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
    ddddddddddddddddbbb111ccccccccccccccccccfccfcccccccfccfcccccccfccf1bb1111111bbfbdddfddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
    ddddddddddddddddbbd111ccccccccccccccccccfccfcccccccfccfcccccccfccfd1bbb11111bfbbdddfdddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
    ddddddddddddddddbbdd1dccccccccccccccccccfcccfcccccfcccfcccccccfcccf11bb11111bfbbdddf1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
    dddddddbbdddddbbbbddddccccccccccccccccccfcccfcccccfcccfcccccccfcccf11bb1111bfbbbdddfdddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
    dbddddddddbbbbbbbbbbbbccccccccccccccccccfcccfcccccfcccfcccccbfccccf11bb1111fbbbbdddfdddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
    ddbddbddbbbbbbbbbbbbbbccccccccccccccccccfccccfcccfcbccfccccccfccccdf1b11111fbbbbbddfffffdbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccfccccfcccfccccfccccccfcccc1f1bb111fbbbbbbbdfdddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccfcccccfcfcccccfcccccfcffffff1bb1bfbbbbbbbbbfdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccfcccccfcfcccccfcccccfcccccbbfbbbbfbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccfcccccfffcccccfcccccfcccccbbfbbbfbbbbbbbbbbfbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
    bbbbbbbbddbbbbbbbbbbbbccccccccccccccccccfccccccfccccccfcccccfccccccbfbbfbbbbbbbbbbbfbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
    bbbbbbbdddddbbbbbbbbbbccccccccccccccccccfccccccfccccccfccccfcccccccbbfbffffffffffbbfffffffffdbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
    bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
    bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
    bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
    bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
    ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
    dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
    ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
    ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
    dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
    ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
    bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
    dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
    dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
    ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
    dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
    bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
    ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
    dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
    dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
    bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
    dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
    dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
    bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
    cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
    ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
    ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
    ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
    cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
    ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
    cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
    cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
    ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
    cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
    fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
    fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
    ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
    fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
pauseUntil(() => controller.A.isPressed())
stick = sprites.create(img`
    . . . . . . c c c c c c . . . . 
    . . . . . c 6 7 7 7 7 6 c . . . 
    . . . . c 7 7 7 7 7 7 7 7 c . . 
    . . . c 6 7 7 7 7 7 7 7 7 6 c . 
    . . . c 7 7 7 c 6 6 6 6 c 7 c . 
    . . . f 7 7 7 6 f 6 6 f 6 7 f . 
    . . . f 7 7 7 7 7 7 7 7 7 7 f . 
    . . c f 6 7 7 c 6 7 7 7 7 f . . 
    . c 7 7 f 6 7 7 c c c c f . . . 
    c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
    c c 6 7 7 6 c f c 7 7 2 7 7 c . 
    . . c 6 6 6 c c f 6 7 1 1 1 1 c 
    . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
    . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
    . . . f 6 6 6 1 1 1 1 1 1 6 f . 
    . . . . f c c c c c c c c c . . 
    `, SpriteKind.Player)
twif = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    1 1 1 1 3 3 3 3 3 3 3 . . . . . 
    1 1 1 1 1 3 3 3 3 3 3 3 . . . . 
    1 1 1 1 1 1 3 3 3 3 3 3 3 . . . 
    1 f f f 1 1 3 3 3 f f f 3 . . . 
    1 f f f f 1 3 3 1 f f f 1 1 . . 
    . 3 f f f 3 3 1 1 f f 1 1 1 3 . 
    . 3 3 3 3 3 3 1 1 1 1 1 1 1 3 3 
    . 3 3 3 3 3 3 3 1 1 1 1 1 1 3 3 
    . . 3 3 3 3 3 3 3 1 1 1 1 3 3 3 
    . . 3 3 3 3 3 3 3 3 1 1 1 3 3 3 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
show_character_picker()
