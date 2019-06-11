/* VirtuaVenture Server (Alpha 1) c. 2019/05/31 by VirtuaDev */

/* PreReqs */
var fs= require('fs');	// For Save Writing
var express= require('express');
var path= require('path');
var app= express()
var http= require('http').Server(app)
var io= require('socket.io')(http);
var pub= path.join(__dirname, '/client')
app.use(express.static(pub))
app.get('/', function(req,res) {res.sendFile(path.join(pub,'index.html'))})
http.listen(80)


/* Global Server STD */
var SV_TPS= 2
var SV_TICKRATE= 1000/SV_TPS
var SV_MAX_PLAYERS= 2048
var SV_ALL_XP_DIV = 0
var SV_XP_TABLE = []
var SV_XP = 80
var SV_PREV = 0
var SV_MAX_LVL= 99

// Change

/* TODO: Make it Duplicable, etc. Generate Experience Table */
while (SV_ALL_XP_DIV++ < SV_MAX_LVL) {
	SV_XP_TABLE.push("LVL " +SV_ALL_XP_DIV +" | START XP: " +SV_PREV +" | XP NEXT LVL: " +SV_XP)
	SV_PREV += SV_XP
	SV_XP *= 1.11
	SV_XP = Math.floor(SV_XP)
}

/* MOST, if not ALL, the Netcode relies on Beaming Clicks to Context Menus, but there are some differences
	* The Client tells the server what Item it interacted with at From What Table and What Position
	* For example, a Click on [1, 20, 4] means Inventory, Slot 20, Option 4

	* The NetPacket in Order is:
	* NameSpace: 1 Char, up to 256 Values
	* 

	* Following Namespaces in Order:
	00 -> BeamCTX Menu	=> [Target Table, Target ID, CTX ID]
	01 -> UseItemOn		=> [Slot, Target Table, Target ID]
	02 -> MovePlayerTo	=> [RelX, RelY]
	03 -> SwapInventory	=> [First Slot, Other Slot]
	04 -> SendPubChat	=> [MSG]
	05 -> SendPrivChat	=> [PlayerName, MSG]
	06 -> SendGroupChat	=> [MSG]
	07 -> CombineItems	=> [Slot1, Slot2]
	08 -> LogMeIn		=> [Keys]
	09 -> SetNetFlags	=> [Value 16Bit]
	0A -> LogMeOut		=> []

	FF -> Do Nothing 

	==============================
	* Following Ent Tables are tied to Player and "View Distance"
	00 -> Personal Inventory
	01 -> Personal Equipment Menu
	02 -> Other Players
	03 -> NPCs
	04 -> Scenary
	05 -> Dropped Items
	06 -> Player Interfaces
	===============================

*/


/* Single Player Object: Constructed from Player Login */
class virtuaPlayer {

	// Imports Compressed Data
	constructor(cmpData) {
		this.decompress(vKey)
	}
	
	// Scans Serialised Data Order
	decompress() {
		
	}

	decompress() {
		test
	}


	recompress() {
		
	}
}


/* Equip Regions, each area is occupied; on Equipping, server overrides appearance of reg clothes */
var virtuaEquipable= {
	0: 'right_hand',	// Equipped Wep
	1: 'left_hand',	// For Shields & Off-Hands
	2: 'hair',		// For Helms, Hoods, etc.
	3: 'body',		// For Chest-Plates, etc.
	4: 'legs',		// For Plate-Legs
	5: 'feet',		// For Boots
	6: 'hands',		// For Gloves
	7: 'neck',		// For Amulets
	8: 'ammo',		// For Ammo in Ranging, etc
	9: 'back',		// For Capes
	10: 'ring',		// For .... Rings.
	11: 'beard',	// For Beard and Internal Systems, DOES NOT appear on client side, Beaming To does nothing
	12: 'arms',		// For Wrists for gear
}
