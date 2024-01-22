// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000010506010105010101010101050101010202020702020202020202020202020202020202020202020202020202020202020202020502020202020202020702020202020206020202030202020202020202020202030202020302020202020202020702020302020205020202020202020202020203070202030202020202020202020202050202020302020202020202020202020402020202020202020202020207020203020202030202020202020207070207020202020402020202020202020202020202020203020202020202020101010106010105010101050101010100000000000000000000000000000000`, img`
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
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLight1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
