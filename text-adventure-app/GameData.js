
//game data records decisions in a single game as well as the current state (paragraph) the user is in 
export var GlobalData = {Story2Unlocked:false, Story3Unlocked:false};


export var ARoomData;
export var TheWayData;

//hack to start at level 2
{GlobalData.Story2Unlocked = true; ResetARoomData(); ARoomData.Health = 8; ARoomData.ThrewGlass = true;}

export function ResetARoomData(){
	ARoomData = {
		//When health reaches 0 or less, game over
		Health: 10, 
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
		GuardFour:{Health:16, Hostility:0, Neutralized:false, Pickpocket:false}, 
		//gold is used for bribing guards and the next level
		Gold:0, 
		//glass can be used to try and free prisoner at 1b, but will fail and can get stuck inside the lock
		GlassJammed:false, 
		GlassSnapped:false, 
		FullGlass:ARoomData.FullGlass, 
		//the user gets a sword from killing GuardOne or visiting node 2C
		HasWeapon:{Glass:ARoomData.ThrewGlass, Sword: false, Bandages:ARoomData.CutBindings}, 
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
		Searched: {}
		};
}