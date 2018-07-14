
//game data records decisions in a single game as well as the current state (paragraph) the user is in 
export var GlobalData = {Story2Unlocked:false, Story3Unlocked:false};


export var ARoomData;
export var TheWayData;


export function ResetARoomData(){
	ARoomData = {Health: 10, BrokeLantern: false, DraggedGlass:false, CutBindings:false, GlassSafe: false, FullGlass:false, ThrewGlass:false, ThrewBlanket:false, ThrewRope:false, BurntBlanket: false, WrappedHandsFeet:false, RefusedDeal:false, MadeDeal:false, MadeBetterDeal:false};
	ResetTheWayData();
}

//hostility determines if a guard will attack after diplomacy. positive numbers are hostile, negative are passive, and 0 is random
//neutralized means they are either dead or have been talked to. if you want specifics, check health 
export function ResetTheWayData(){
	TheWayData = {Health: ARoomData.Health, GuardOne:{Health:5, Hostility:-2, Armed:true, Neutralized:false}, Gold:0, GlassJammed:false, GlassSnapped:false, FullGlass:ARoomData.FullGlass, HasWeapon:{Glass:false, Sword: false, Shield:false, Bandages:ARoomData.CutBindings}, PrisonerFree: false, HasKeys:false};
}