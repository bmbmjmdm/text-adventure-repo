
//globaldata DOES NOT contain classes and functions, unlike specific level data
//it does in fact recieve a copy of specific level data when a level is completed, but NONE of the properties relied on should be classes or functions
export var GlobalData = 
{Story2Unlocked:false, 
Story3Unlocked:false,
Story5Unlocked:false,
Story6Unlocked:false,
TownRuinsUnlocked:false,
DesertUnlocked:false,
CityUnlocked:false,
ForestUnlocked:false,
VolcanoUnlocked:false,
LastARoomData:{},
LastTheWayData:{},
LastYourWorldData:{},
LastSettlingInData:{},
};


export var ARoomData;
export var TheWayData;
export var YourWorldData;
export var SettlingInData;

export function setARoomData(data){
	ARoomData = data;
}
export function setTheWayData(data){
	TheWayData = data;
}  
export function setYourWorldData(data){
	YourWorldData = data;
}

export function setGlobalData(data){
	GlobalData = data;
}

export function setSettlingInData(data){
	SettlingInData = data;
}



//hack to start at level 2
/*{GlobalData.Story2Unlocked = true; 
ResetARoomData(); 
GlobalData.LastARoomData = ARoomData;
GlobalData.LastARoomData.Health = 13; 
GlobalData.LastARoomData.ThrewGlass = true;}*/

//hack to start at level 3
/*{GlobalData.Story3Unlocked = true; 
ResetARoomData(); 
GlobalData.LastARoomData = ARoomData;
ResetTheWayData(); 
GlobalData.LastTheWayData = TheWayData;
GlobalData.LastTheWayData.PrisonersEscaped = 5; 
GlobalData.LastTheWayData.Health = 6; 
GlobalData.LastTheWayData.Prisoner1BFree =true, 
GlobalData.LastTheWayData.Prisoner3AFree = true,
GlobalData.LastTheWayData.Prisoner5CFree = true,
GlobalData.LastTheWayData.Prisoner6BFree = true,
GlobalData.LastTheWayData.HasWeapon.Axe = true
}*/


export function ResetARoomData(){
	ARoomData = {
		//When health reaches 0 or less, game over
		Health: 20, 
		//the first step required in ARoom is to break the lantern
		BrokeLantern: false, 
		//the second step required in ARoom is to drag a broken piece of lantern glass 
		DraggedGlass:false, 
		//next step is to cut bindings with dragged glass
		CutBindings:false, 
		//indicates that, when throwing the glass out the window, the blanket was thrown on top of it so it won't injure the user when they land
		GlassSafe: false, 
		//indicates the glass was thrown after the blankey, which will hurt the user but result in fuller piece of glass for use in the next level
		FullGlass:false, 
		//indicates the glass was thrown through the window so it can be used on the next level (and landed on when jumping through window)
		ThrewGlass:false, 
		//indicates the blanket was thrown through window to cushion fall
		ThrewBlanket:false, 
		//indicates the user can now leave the room
		ThrewRope:false, 
		//indicates the user destroyed the blanket in the fire, burning themselves
		BurntBlanket: false, 
		//indicates the user cut the blanket and wrapped their hands and feet, offering some protection
		WrappedHandsFeet:false, 
		//the user refused the deal by their cellmate, leading to consequences in level 2
		RefusedDeal:false, 
		//the user agreed to help their cellmate
		MadeDeal:false, 
		//the user found out their cellmate has gold they can offer in exchange for help
		MadeBetterDeal:false};
}



export function ResetTheWayData(){
	TheWayData = {
		//health carries over
		Health: GlobalData.LastARoomData.Health, 
		//hostility determines if a guard will attack after diplomacy. positive numbers are hostile, negative are passive, and 0 is random
		//neutralized means they were talked down with diplomacy
		//0 or less health means they were killed
		//pickpocket indicates if the user attempted to steal their keys or not after neutralizing them
		GuardOne:{Name:"GuardOne", Health:6, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardTwo:{Name:"GuardTwo", Health:8, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardThree:{Name:"GuardThree", Health:8, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardFour:{Name:"GuardFour", Health:12, Hostility:0, Neutralized:false, Pickpocket:false}, 
		//gold is used for bribing guards and the next level
		Gold:0, 
		//glass can be used to try and free prisoner at 1b, but will fail and can get stuck inside the lock
		GlassJammed:false, 
		GlassSnapped:false, 
		FullGlass:GlobalData.LastARoomData.FullGlass, 
		//the user gets a sword from killing GuardOne or visiting node 2C
		HasWeapon:{Glass:GlobalData.LastARoomData.ThrewGlass, Sword: false, Bandages:GlobalData.LastARoomData.WrappedHandsFeet, Axe: false}, 
		//indicates if the prisoner is free at the given cell, changing the options there
		Prisoner1BFree: false, 
		Prisoner3AFree: false, 
		Prisoner5CFree: false, 
		Prisoner6BFree: false, 
		//used at the end of the level to modify the health of GuardFour 
		PrisonersFreed: 0,
		//carried over to determine prisoner 1B's attitude 
		RefusedDeal : GlobalData.LastARoomData.RefusedDeal,
		MadeBetterDeal : GlobalData.LastARoomData.MadeBetterDeal,
		//prisoner 1B can be extorted to bribe GuardOne if the user knows about the gold
		Extorted : false,
		//once the user kills or pickpockets a guard, they will have keys to open a variety of doors
		HasKeys:false,
		//used to indicate which direction the user is coming from when moving across nodes
		LastNode: '1B',
		//used to explain sword fight system the first time the user gets in one
		SwordFightExplained: false,
		//meta data for sword fighting, target is the guard object (GuardOne, GuardTwo, etc), After is the node they end in (Node2C, etc), LastChoice is the guard's last decision (parry, strike, grapple, see SwordFightCalculator)
		SwordFightTarget: {}, 
		SwordFightAfter: {},
		SwordFightLastChoice: -1,
		//list of all nodes searched in the form of 'Node2A':true
		Searched: {},
		//prisoners escaped at the end
		PrisonersEscaped: 0,
		SwordFightRandomness: {},
		HasBag: false
		};
}

export function ResetYourWorldData(){
	YourWorldData = {
		//health carries over
		Health: GlobalData.LastTheWayData.Health, 
		//axe can be used to cut wood as well as attack
		HasAxe: GlobalData.LastTheWayData.HasWeapon.Axe,
		//gold is used for ?
		Gold: GlobalData.LastTheWayData.Gold,
		//number of allies with the player, can die off 
		Allies: GlobalData.LastTheWayData.PrisonersEscaped,
		//the individual allies the player has
		//the "beginning" part is so we can see if the character died for later level stuff 
		Mother: GlobalData.LastTheWayData.PrisonersEscaped>0,
		MotherBeginning: GlobalData.LastTheWayData.PrisonersEscaped>0,
		Son: GlobalData.LastTheWayData.PrisonersEscaped>0,
		SonBeginning: GlobalData.LastTheWayData.PrisonersEscaped>0,
		OldGuy: GlobalData.LastTheWayData.Prisoner1BFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		OldGuyBeginning: GlobalData.LastTheWayData.Prisoner1BFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		SadGal: GlobalData.LastTheWayData.Prisoner3AFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		SadGalBeginning: GlobalData.LastTheWayData.Prisoner3AFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		FoulGuy: GlobalData.LastTheWayData.Prisoner5CFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		FoulGuyBeginning: GlobalData.LastTheWayData.Prisoner5CFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		BadassGal: GlobalData.LastTheWayData.Prisoner6BFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		BadassGalBeginning: GlobalData.LastTheWayData.Prisoner6BFree && GlobalData.LastTheWayData.PrisonersEscaped>0,
		//kindling found which will make fire. 10 energy on its own, 20 with flint, 50 with wood 
		Kindling: 0,
		//berries found which can be eaten at camp for 10 energy each
		Berries: 0,       
		//water found which can be drunk at camp for 10 energy each
		Water: 0,
		//meat and wood can only be aquired when setting up camp
		//meat found which can be eaten at camp, 20 energy each or 30 if cooked
		Meat: 0,
		//wood found which will help make fire. Cannot use without kindling and flint 
		Wood: 0,
		//sharp rocks found which will allow party to help fight
		SharpRocks: 0,
		//flint found which will help make fire. Cannot use without kindling 
		Flint: 0,
		//vines found which will help with tasks like climbing 
		Vines: 0,
		//energy which is required/depletes for tasks and regenerates with fire or food or water (base 10 restored when resting) 
		//tasks can be done at 0 energy but run a chance of killing a party member or hurting player
		Energy: 40,
		//Almost every section can be searched
		//search first area 
		SearchedPrison: false,
		//Searched the RockyPath area
		SearchedRockyPath: false,
		//Hunted and foraged RockyFlat
		HuntedRockyFlat: false,
		ForagedRockyFlat: false,
		//used for after camping 
		CampContinue: {},
		//indicates if a campfire has been started or not
		Campfire: false,
		//indicates what the player is eating on the given "feedX" 
		//can be "berries", "meat", or "water"
		Eating: "",
		//can be "eat" or "drink"
		EatDrink: "",
		//true if player used a vine on the climbing wall
		ClimbVine: false,
		//needs 2 correct choices out of 3 in order to pass 
		ClimbCorrect: 0,
		//checked bush while climbing
		SearchedClimb: false,
		//did they try to shimmy across the ledge at the rocky flats
		TriedLedge: false,
		//searched forest path area
		SearchedForestPath: false,
		//hunted forest clearing area
		HuntedForestClearing: false,
		//chopped wood forest clearing area 
		ChoppedForestClearing: false,
		//bear's health for fight in forest
		BearHealth: 10,
		//searched grassy ledge or around cave 
		SearchedGrassyLedge: false,
		//lit a torch in the cave so they can see the bats+pit 
		CaveTorch: false,
		//feeding allies makes them "safe" from dying for the night 
		Safe: [],
		//talked to allies by the prison
		TalkedAllies: false,
		//tell user to eat and drink a lot and make fires
		CampInstructions: false,
		//when user sleeps with cumulative -50 or more energy over 1+ night(s), an ally will die 
		AllyDamage: 0,
		//set to true for the ridge camp 
		FinalCamp: false,
	}
	
}



export function ResetSettlingInData(){
	SettlingInData = {
		//health carries over
		Health: GlobalData.LastYourWorldData.Health, 
		//axe as weapon
		Axe: GlobalData.LastYourWorldData.HasAxe,
		//gold is used for buying
		Gold: GlobalData.LastYourWorldData.Gold,
		//number of allies with the player, can die off 
		Allies: GlobalData.LastYourWorldData.Allies,
		//the individual allies the player has
		Mother: GlobalData.LastYourWorldData.Mother,
		Son: GlobalData.LastYourWorldData.Son,
		OldGuy: GlobalData.LastYourWorldData.OldGuy,
		SadGal: GlobalData.LastYourWorldData.SadGal,
		FoulGuy: GlobalData.LastYourWorldData.FoulGuy,
		BadassGal: GlobalData.LastYourWorldData.BadassGal,
		//things that can be bought at in level 1
		Shield: false,
		Bow: false,
		Disguise: false,
		Poison: false,
		Blessing: false,
		Bribe: false,
		//stealth determines if the player gets jumped in a few scenarios 
		Stealth: 0,
		//took son into city if hes there
		TookSon: false,
		//things done in level 1
		Bar: false,
		Stable: false,
		Blacksmith: false,
		Market: false,
		Apothecary: false,
		Church: false,
		//how many places we went in the city. at 4 we stop exploring 
		CityExplored: 0,
		//how many times player visited the outskirts or center 
		Outskirts: 0,
		Center: 0,
		//determines if Riffraff is an ally or not 
		RRAlly: false,
		//determines ending node after ambush
		AfterAmbush: {},
		AmbushHealth: 18,
		AmbushFoes: 3,
		AmbushLastChoices: [0,0,0],
		AmbushRandomness: {}
	}
}