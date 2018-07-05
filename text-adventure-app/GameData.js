
//game data records decisions in a single game as well as the current state (paragraph) the user is in 
export var GlobalData = {Story2Unlocked:false, Story3Unlocked:false};


export var ARoomData = {Health: 10, BrokeLantern: false, DraggedGlass:false, CutBindings:false, GlassSafe: false, ThrewGlass:false, ThrewBlanket:false, ThrewRope:false, BurntBlanket: false, WrappedHandsFeet:false, RefusedDeal:false, MadeDeal:false, MadeBetterDeal:false};
export function ResetARoomData(){
	ARoomData = {Health: 10, BrokeLantern: false, DraggedGlass:false, CutBindings:false, GlassSafe: false, FullGlass:false, ThrewGlass:false, ThrewBlanket:false, ThrewRope:false, BurntBlanket: false, WrappedHandsFeet:false, RefusedDeal:false, MadeDeal:false, MadeBetterDeal:false};
}