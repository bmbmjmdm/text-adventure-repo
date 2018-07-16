
//game data records decisions in a single game as well as the current state (paragraph) the user is in 
export var GlobalData = {Story2Unlocked:false, Story3Unlocked:false};


export var ARoomData;
export var TheWayData;


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
		GuardOne:{Health:5, Hostility:-2, Armed:true, Neutralized:false, Pickpocket:false}, 
		Gold:0, 
		GlassJammed:false, 
		GlassSnapped:false, 
		FullGlass:ARoomData.FullGlass, 
		HasWeapon:{Glass:ARoomData.ThrewGlass, Sword: false, Shield:false, Bandages:ARoomData.CutBindings}, 
		Prisoner1BFree: false, 
		Prisoner3AFree: false, 
		PrisonersFreed: 0,
		RefusedDeal = ARoomData.RefusedDeal,
		MadeBetterDeal = ARoomData.MadeBetterDeal,
		Extorted = false,
		HasKeys:false,
		LastNode: '1B',
		2AHasGold: true};
}