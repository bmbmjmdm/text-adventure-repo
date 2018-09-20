import {LookAtLantern} from './LookAtLantern.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtTable} from './LookAtTable.js';
import {LookAtFire} from './LookAtFire.js';
import {ClimbRope} from './ClimbRope.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtBlanket} from './LookAtBlanket.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ARoomData} from '../GameData.js';

export class LookAroundRoom {

	static createPage(that){
		
		if(ARoomData.ThrewRope && ARoomData.ThrewGlass && (ARoomData.ThrewBlanket || ARoomData.BurntBlanket || ARoomData.WrappedHandsFeet)){
			that.preparePage("As the ");
			that.preparePage("fire ", LookAtFire);
			that.preparePage("backs you into a corner against the ");
			that.preparePage("door,", LookAtDoor);
			that.preparePage(" you wonder if it was worth taking the time to do so many things. You're already feeling dizzy, and you still need to ");
			that.preparePage("climb the rope to freedom!", ClimbRope);
	
		}
		else if(ARoomData.CutBindings){
			that.preparePage("The room is filling with smoke and not much else. If you don't do something quick, the ");
			that.preparePage("fire ", LookAtFire);
			that.preparePage("will consume you. Maybe the ");
			that.preparePage("door? ", LookAtDoor);
			that.preparePage("The ");
			that.preparePage("window", LookAtWindow);
			that.preparePage(" just above it? ");
			if(!ARoomData.ThrewRope){
				that.preparePage("The ");
				that.preparePage("rope", LookAtRope);
				that.preparePage(" is so close to the ");
				that.preparePage("flames ", LookAtFire);
				if(ARoomData.WrappedHandsFeet){
					that.preparePage("but with your hands wrapped, you'll probably be fine.");
				}
				else{
					that.preparePage("that you don't think it's wise to grab it. You'll probably just burn yourself!");
				}
			}
			if(!ARoomData.ThrewGlass){
				that.preparePage(" The ");
				that.preparePage("glass", LookAtGlass);
				that.preparePage(" you used to free yourself is also nearby");
				if(!(ARoomData.ThrewBlanket || ARoomData.BurntBlanket || ARoomData.WrappedHandsFeet)){
					that.preparePage(", as well as the ");
					that.preparePage("blanket.", LookAtBlanket);
				}
				else{
					that.preparePage(".");
				}
			}
			else{
				if(!(ARoomData.ThrewBlanket || ARoomData.BurntBlanket || ARoomData.WrappedHandsFeet)){
					that.preparePage("The cozy-looking, probably not bed-bug-ridden ");
					that.preparePage("blanket ", LookAtBlanket);
					that.preparePage("is also here.");
				}
			}

		}
		else if(ARoomData.BrokeLantern){
			that.preparePage("With the ");
			that.preparePage("fire ", LookAtFire);
			that.preparePage("quickly growing, the room is much brighter now! You can see the ");
			that.preparePage("door ", LookAtDoor);
			that.preparePage("across from you made of thick wood and strips of iron, as well as the ");
			that.preparePage("rope ", LookAtRope);
			that.preparePage("on the floor near the ");
			that.preparePage("fire.", LookAtFire);
			that.preparePage(" That lantern really held a lot of oil and ");
			that.preparePage("glass,", LookAtGlass);
			that.preparePage(" it's only a matter of time before the whole room burns down, including you. Too bad you're ");
			that.preparePage("tied ", LookAtBindings);
			that.preparePage("up with nowhere to go. Oh wait, what's that? With all this light you notice there's a small ");
			that.preparePage("window ", LookAtWindow);
			that.preparePage("above the door. The ");
			that.preparePage("blanket", LookAtBlanket);
			that.preparePage(" is also visible, stains and all.");
			
		}
		
		else{
			that.preparePage("It's dark in here, barely lit by a ");
			that.preparePage("lantern ", LookAtLantern);
			that.preparePage("sitting on a wooden");
			that.preparePage(" table ", LookAtTable);
			that.preparePage("to your left. The floor is also wood, worn from many years and dull to the touch. There's a loose line of ");
			that.preparePage("rope ", LookAtRope);
			that.preparePage("on the floor in front of you, and just past that you can faintly see the outline of a");
			that.preparePage(" door ", LookAtDoor);
			that.preparePage("on the wall. There's something above the door, but it's too dark to make out. Lastly, there's some rags that pass for a ");
			that.preparePage("blanket", LookAtBlanket);
			that.preparePage(" in a dark, dank corner.");
		}
		
		
	}



static getName(){ return "LookAroundRoom"; }
}