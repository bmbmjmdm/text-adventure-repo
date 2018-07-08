import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtBlanket} from './LookAtBlanket.js';
import {CutBlanket} from './CutBlanket.js';
import {CutRope} from './CutRope.js';
import {ThrowGlass} from './ThrowGlass.js';
import {ARoomData} from '../GameData.js';

export class LookAtGlass {

	static createPage(that){
		if(ARoomData.CutBindings){
			that.preparePage("You dragged the glass far enough away from the ");
			that.preparePage("fire", LookAtFire);
			that.preparePage(" to be safely used, and boy did it work on those bindings. Still wanna cut something? Maniac. ");
			if(ARoomData.ThrewBlanket || ARoomData.BurntBlanket){
				that.preparePage("Too bad you don't have that blanket anymore, huh? I guess instead you could ");
				that.preparePage("cut the rope", CutRope);
				that.preparePage(" but I don't know what good would come of that. Maybe just ");
			}			
			else if(ARoomData.WrappedHandsFeet){
				that.preparePage("You already shredded that blanket, what's next?");
				that.preparePage(" Cutting the rope? ", CutRope);
				that.preparePage("Do you want to die? Hell, knowing you you probably wanna do something crazy like, I don't know, ");
			}
			else{
				that.preparePage("What about the ");
				that.preparePage("blanket?", LookAtBlanket);
				that.preparePage(" That thing's already torn, I bet you could ");
				that.preparePage("shred it with ease.", CutBlanket);
				that.preparePage(" Or maybe ");
				that.preparePage("slice up the rope?", CutRope);
				that.preparePage(" Up to you, you could even ");
			}
			that.preparePage("pick the glass up and ");
			that.preparePage("throw it", ThrowGlass);
			that.preparePage(" through the ");
			that.preparePage("window.", LookAtWindow);
			that.preparePage(" I mean, what do you got to lose? Besides your sanity. And your life. The ");
			that.preparePage("room's", LookAroundRoom);
			that.preparePage(" still on fire after all and every passing breath feels harder to draw.");
			
			
		}
		else if(ARoomData.DraggedGlass){
			that.preparePage("Wow that glass looks perfect for ");
			that.preparePage("cutting those bindings,", LookAtBindings);
			that.preparePage(" like it was made for doing just that. But what do I know? Maybe you'd rather curl up in ");
			that.preparePage("bed", LookAtBlanket);
			that.preparePage(" instead.");
		}
		else{
			ARoomData.DraggedGlass = true;
			ARoomData.Health = ARoomData.Health-1;
			that.preparePage("You feel the ebbing heat of flames as you reach a bare foot towards the glass. You cut yourself trying to handle it, but eventually drag over a sizable chunk. Coughs begin itching up your throat as the smoky ");
			that.preparePage("room ", LookAroundRoom);
			that.preparePage("makes you forget about your cut. You take 1 damage, leaving you with " + ARoomData.Health +" health. Now to deal with those ");
			that.preparePage("bindings.", LookAtBindings);
		}

		
		that.typeAnimation();
	}


}