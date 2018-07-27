
//game data records decisions in a single game as well as the current state (paragraph) the user is in 
export var GlobalData = {Story2Unlocked:false, Story3Unlocked:false};


export var ARoomData;
export var TheWayData;

//hack to start at level 2
{GlobalData.Story2Unlocked = true; ResetARoomData(); ARoomData.Health = 8; ThrewGlass = true;}

export function ResetARoomData(){
	ARoomData = {
		Health: 10, 
		BrokeLantern: false, 
		DraggedGlass:false, 
		CutBindings:false, 
		GlassSafe: false, 
		FullGlass:false, 
		ThrewGlass:false, 
		ThrewBlanket:false, 
		ThrewRope:false, 
		BurntBlanket: false, 
		WrappedHandsFeet:false, 
		RefusedDeal:false, 
		MadeDeal:false, 
		MadeBetterDeal:false};
	ResetTheWayData();
}

//hostility determines if a guard will attack after diplomacy. positive numbers are hostile, negative are passive, and 0 is random
//neutralized means they were talked down with diplomacy
//0 or less health means they were killed
export function ResetTheWayData(){
	TheWayData = {
		Health: ARoomData.Health, 
		GuardOne:{Health:5, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardTwo:{Health:8, Hostility:0, Neutralized:false, Pickpocket:false}, 
		GuardThree:{Health:8, Hostility:0, Neutralized:false, Pickpocket:false}, 
		Gold:0, 
		GlassJammed:false, 
		GlassSnapped:false, 
		FullGlass:ARoomData.FullGlass, 
		HasWeapon:{Glass:ARoomData.ThrewGlass, Sword: false, Shield:false, Bandages:ARoomData.CutBindings}, 
		Prisoner1BFree: false, 
		Prisoner3AFree: false, 
		Prisoner5CFree: false, 
		Prisoner6BFree: false, 
		PrisonersFreed: 0,
		RefusedDeal : ARoomData.RefusedDeal,
		MadeBetterDeal : ARoomData.MadeBetterDeal,
		Extorted : false,
		HasKeys:false,
		LastNode: '1B',
		SwordFightExplained: false,
		SwordFight:{Target: {}, After: {}, LastChoice:-1},
		//list of all nodes searched in the form of 'Node2A':true
		Searched: {}
		};
}