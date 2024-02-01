// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0105010101050101010101010501010101010107020c0101010801010102020201010202020c020c010201010c0c0202010202020502020c02020201020701010202020206020202030c02010c01010c0d02020c0302020203020202020c0a09020702020302020205020c020201010c020202020307020203020202020c0101020202020502020501010c020202020c0202020204020c08050108020c010c0202070202030201040605060c0c010c0207070207020201010101010c01010101020c0202020c060504010b0c01010104010101010601010501040405010101010e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`, img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 . . . 
2 2 . . . . . . 2 . 2 2 . . . . 
2 . . . 2 . . . . . . 2 . . 2 2 
. . . . 2 . . . 2 . . 2 . 2 2 . 
. . . . 2 . . . 2 . . . . . . . 
. . . . 2 . . . 2 . . . . 2 2 . 
. . . . 2 . . . 2 . . . . . 2 2 
. . . . 2 . . 2 2 2 . . . . . . 
. . . . 2 . . 2 2 2 2 . . 2 . . 
. . . . 2 . 2 2 2 2 2 . . 2 . . 
. . . . . . 2 2 2 2 2 . 2 2 2 2 
. . . . . . 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLight1,myTiles.tile1,sprites.dungeon.floorLight5,sprites.dungeon.doorClosedEast,sprites.dungeon.stairWest,sprites.dungeon.chestClosed,myTiles.tile2,sprites.dungeon.darkGroundNorthEast1,myTiles.tile3], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`100020000303030303030303030301080101040403030303060303030303010b0202090103050606080603030306060b0202020103050101050106010306010a0b02020103010b0202020c0603030101020b0204030102020202020103030304020b020103010202020b0204030306040202020103010101020201010303060102020a0103030301020201030306060802020204030303040a0201030306010102020b08030303010a0206030303010a020b010403030304020204030303010b020a010303030301020201040301010b02020103030304010202010404010202020101030303010102020201040a020202010303030304010b0202010502020202060303030301010b02020b08020b020108060303030401010b020201020b0b0106030303030304010202020102020b0501030303030504010202020202020b0103030301040501060102020202020a01030303040b0d0202010b02020b0201010303030102020a02050102020b020103030303010102020a02010a0202020103030303030102020a02050102020201030303030301020a0a020b010a020a0103030303030502020202020801020201070101010301020202020a0201020202020a020103010b0202020a0201020202020a0a070308020a02020a0a01020202020b02070301020a0a02020a020202020202020103010101010701070708010101010101`, img`
..........222222
..........2....2
..........2....2
.2222222..2....2
.2.....2..22...2
.2.....2...2...2
.2.....2...2...2
.222..22...2...2
...2..2....2...2
...2..2...22...2
...2..2...2...22
...2..2...2...2.
...2..2..22...2.
...2..2222...22.
...2...22....2..
...2...22....2..
...2....2...22..
...22...2...2...
....2...2...2...
....2.......2...
222222......2...
2....2.....22...
2....22....2....
22....2....2....
.2....22...2....
.2.....2...2....
.2.....22..22222
.2......2......2
.2......2......2
.2......2......2
.2.............2
.222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest0,myTiles.tile3,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight5,sprites.dungeon.floorLight2,sprites.dungeon.darkGroundNorthEast1,myTiles.tile1,myTiles.tile2,sprites.dungeon.doorClosedNorth,myTiles.tile7], TileScale.Sixteen);
            case "level0":
            case "level10":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
            case "final level":
            case "level7":return tiles.createTilemap(hex`200020000601010101010101010101010101010101010101010101010101010101010106060103030303030303030303030303030303030303030303030303030303010606010303030303030303030303030303030303030303030303050303030301060601010101010102010101010201010101010101010101010102010101010106060102020202010201080a01020202020202020202020202010201010101010606010201010201020108090102010101010101010101010101020202020201060601020101020102010101010201020202020202020202020202010101020106060102010102020202020202020102010101010101010101010202020102010606010201020201010101010102010202020102020202020202020102010201060601020102010a08080808010202010201020201010101010101010201020106060102010201080901010108010201020201020102020202020201020102010606010201020101080102010801020101020102020201010101010102010201060601020102020108010201090102020101010102010202020202020201020106060102010102020101020108080102010202010201020201010101020101010606010101080102010102010a0102020201010102010102020202010202020106060102010901020202020108010202020202020202010102010202010101010606010201080801020102010101010201010101010101010101010202020101060601020201090102010202020201020102020202020201020202010102010106060101020201010201010101020101010201020101010102010201020201010606010101020202020202020102020102020102020202020201020202020201060601020201020101010202020102010b01010101010101010101010101020106060102020201020202020102010201010102020202020202010d02020102010606010201020202010101010201020102020201010101010101010102010201060601020102010102020202020102010201010101010108080808010201020106060102010202020201010101010201040102020202010809080a0102010201060601020102010102010201020101010101010101020101010101010201020106060102020102020202020102020202020202020102020202020202020102010606010102020102020102010102010101010102010201010101010202010201060601010102020102010202020201020202010201020108080901010201020106060109010102020101010101010102070201020102010101010102020102010606010a09080102020202020202010c02020102010202020202020202020201060601010101010101010101010101010101010101010101010101010101010106`, img`
.222222222222222222222222222222.
.2............................2.
.2............................2.
.222222.2222.222222222222.22222.
.2....2.2..2............2.22222.
.2.22.2.2..2.222222222222.....2.
.2.22.2.2222.2............222.2.
.2.22........2.2222222222...2.2.
.2.2..222222.2...2........2.2.2.
.2.2.2.....2..2.2..22222222.2.2.
.2.2.2..222.2.2..2.2......2.2.2.
.2.2.22.2.2.2.22.2...222222.2.2.
.2.2..2.2.2.2..2222.2.......2.2.
.2.22..22.2..2.2..2.2..2222.222.
.222.2.22.2.2...222.22....2...2.
.2.2.2....2.2........22.2..2222.
.2.2..2.2.2222.22222222222...22.
.2..2.2.2....2.2......2...22.22.
.22..22.2222.222.2.2222.2.2..22.
.222.......2..2..2......2.....2.
.2..2.222...2.2.2222222222222.2.
.2...2....2.2.222.......2...2.2.
.2.2...2222.2.2...222222222.2.2.
.2.2.22.....2.2.222222....2.2.2.
.2.2....22222.2.2....2....2.2.2.
.2.2.22.2.2.22222222.222222.2.2.
.2..2.....2........2........2.2.
.22..2..2.22.22222.2.22222..2.2.
.222..2.2....2...2.2.2...22.2.2.
.2.22..2222222...2.2.22222..2.2.
.2...2.......2...2.2..........2.
.222222222222222222222222222222.
`, [myTiles.transparency16,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.doorClosedSouth,sprites.dungeon.darkGroundNorthWest1,myTiles.tile3,myTiles.tile10,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
            case "level":
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
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "button not":
            case "tile12":return tile12;
            case "orange button":
            case "tile13":return tile13;
            case "pink button":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
