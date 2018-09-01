
//game data records decisions in a single game as well as the current state (paragraph) the user is in 
export var GlobalData = {Story2Unlocked:false, Story3Unlocked:false};


export var ARoomData;
export var TheWayData;
export var YourWorldData;

export function setARoomData(data){
	ARoomData = data;
}
export function setTheWayData(data){
	TheWayData = data;
}
export function setYourWorldData(data){
	YourWorldData = data;
}



//hack to start at level 2
//{GlobalData.Story2Unlocked = true; ResetARoomData(); ARoomData.Health = 13; ARoomData.ThrewGlass = true;}

//hack to start at level 3
{GlobalData.Story3Unlocked = true; 
ResetARoomData(); 
ResetTheWayData(); 
TheWayData.PrisonersEscaped = 5; 
TheWayData.Health = 6; 
TheWayData.Prisoner1BFree =true, 
TheWayData.Prisoner3AFree = true,
TheWayData.Prisoner5CFree = true,
TheWayData.Prisoner6BFree = true,
TheWayData.HasWeapon.Axe = true
}


export function ResetARoomData(){
	ARoomData = {
		//When health reaches 0 or less, game over
		Health: 15, 
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
	
	//if they start at level 1, level 2 must be reset for continuity
	ResetTheWayData();
}



export function ResetTheWayData(){
	TheWayData = {
		//health carries over
		Health: ARoomData.Health, 
		//hostility determines if a guard will attack after diplomacy. positive numbers are hostile, negative are passive, and 0 is random
		//neutralized means they were talked down with diplomacy
		//0 or less health means they were killed
		//pickpocket indicates if the user attempted to steal their keys or not after neutralizing them
		GuardOne:{Health:5, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardTwo:{Health:8, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardThree:{Health:8, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardFour:{Health:14, Hostility:0, Neutralized:false, Pickpocket:false}, 
		//gold is used for bribing guards and the next level
		Gold:0, 
		//glass can be used to try and free prisoner at 1b, but will fail and can get stuck inside the lock
		GlassJammed:false, 
		GlassSnapped:false, 
		FullGlass:ARoomData.FullGlass, 
		//the user gets a sword from killing GuardOne or visiting node 2C
		HasWeapon:{Glass:ARoomData.ThrewGlass, Sword: false, Bandages:ARoomData.CutBindings, Axe: false}, 
		//indicates if the prisoner is free at the given cell, changing the options there
		Prisoner1BFree: false, 
		Prisoner3AFree: false, 
		Prisoner5CFree: false, 
		Prisoner6BFree: false, 
		//used at the end of the level to modify the health of GuardFour 
		PrisonersFreed: 0,
		//carried over to determine prisoner 1B's attitude 
		RefusedDeal : ARoomData.RefusedDeal,
		MadeBetterDeal : ARoomData.MadeBetterDeal,
		//prisoner 1B can be extorted to bribe GuardOne if the user knows about the gold
		Extorted : false,
		//once the user kills or pickpockets a guard, they will have keys to open a variety of doors
		HasKeys:false,
		//used to indicate which direction the user is coming from when moving across nodes
		LastNode: '1B',
		//used to explain sword fight system the first time the user gets in one
		SwordFightExplained: false,
		//meta data for sword fighting, target is the guard object (GuardOne, GuardTwo, etc), After is the node they end in (Node2C, etc), LastChoice is the guard's last decision (parry, strike, grapple, see SwordFightCalculator)
		SwordFight:{Target: {}, After: {}, LastChoice:-1},
		//list of all nodes searched in the form of 'Node2A':true
		Searched: {},
		//prisoners escaped at the end
		PrisonersEscaped: 0
		};
		
	//restarting level 2 must reset level 3 for continuity
	ResetYourWorldData();
}

export function ResetYourWorldData(){
	YourWorldData = {
		//health carries over
		Health: TheWayData.Health, 
		//axe can be used to cut wood as well as attack
		HasAxe: TheWayData.HasWeapon.Axe,
		//gold is used for ?
		Gold: TheWayData.Gold,
		//number of allies with the player, can die off 
		Allies: TheWayData.PrisonersEscaped,
		//the individual allies the player has
		Mother: TheWayData.PrisonersEscaped>0,
		Son: TheWayData.PrisonersEscaped>0,
		OldGuy: TheWayData.Prisoner1BFree && TheWayData.PrisonersEscaped>0,
		SadGal: TheWayData.Prisoner3AFree && TheWayData.PrisonersEscaped>0,
		FoulGuy: TheWayData.Prisoner5CFree && TheWayData.PrisonersEscaped>0,
		BadassGal: TheWayData.Prisoner6BFree && TheWayData.PrisonersEscaped>0,
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
		//tasks can be done at 0 energy but run a % chance of killing a party member, hurting player, or losing supplies 
		Energy: 50 + 10*(TheWayData.PrisonersEscaped-2),
		//Almost every section can be searched, keep track of all of them here
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
		HuntedForestClearing: false,
		ChoppedForestClearing: false,
		BearHealth: 10,
		SearchedGrassyLedge: false,
		CaveTorch: false,
	}
	
}