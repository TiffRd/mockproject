// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000010607010106010101010101060101010202020202020202020202020202020203030303030303030303030303030303030303030603030303030303030303030303030307030303040303030303030303030303040303030403030303030303030303030403030306030303030303030303030304030303040303030303030303030303060303030403030303030303030303030503030303030303030303030303030304030303040303030303030303030303030303030503030303030303020202020202020204020202020202020101010107010106010101060101010100000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
