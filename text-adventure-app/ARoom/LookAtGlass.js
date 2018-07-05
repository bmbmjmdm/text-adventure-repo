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
			that.state.toShowText.push({text:"You dragged the glass far enough away from the ", clickable:false});
			that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" to be safely used, and boy did it work on those bindings. Still wanna cut something? Maniac. ", clickable:false});
			if(ARoomData.ThrewBlanket || ARoomData.BurntBlanket){
				that.state.toShowText.push({text:"Too bad you don't have that blanket anymore, huh? I guess instead you could ", clickable:false});
				that.state.toShowText.push({text:"cut the rope", clickable:true, nextPage:CutRope});
				that.state.toShowText.push({text:" but I don't know what good would come of that. Maybe just ", clickable:false});
			}			
			else if(ARoomData.WrappedHandsFeet){
				that.state.toShowText.push({text:"You already shredded that blanket, what's next?", clickable:false});
				that.state.toShowText.push({text:" Cutting the rope? ", clickable:true, nextPage:CutRope});
				that.state.toShowText.push({text:"Do you want to die? Hell, knowing you you probably wanna do something crazy like, I don't know, ", clickable:false});
			}
			else{
				that.state.toShowText.push({text:"What about the ", clickable:false});
				that.state.toShowText.push({text:"blanket?", clickable:true, nextPage:LookAtBlanket});
				that.state.toShowText.push({text:" That thing's already torn, I bet you could ", clickable:false});
				that.state.toShowText.push({text:"shred it with ease.", clickable:true, nextPage:CutBlanket});
				that.state.toShowText.push({text:" Or maybe ", clickable:false});
				that.state.toShowText.push({text:"slice up the rope?", clickable:true, nextPage:CutRope});
				that.state.toShowText.push({text:" Up to you, you could even ", clickable:false});
			}
			that.state.toShowText.push({text:"pick the glass up and ", clickable:false});
			that.state.toShowText.push({text:"throw it", clickable:true, nextPage:ThrowGlass});
			that.state.toShowText.push({text:" through the ", clickable:false});
			that.state.toShowText.push({text:"window.", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:" I mean, what do you got to lose? Besides your sanity. And your life. The ", clickable:false});
			that.state.toShowText.push({text:"room's", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:" still on fire after all and every passing breath feels harder to draw.", clickable:false});
			
			
		}
		else if(ARoomData.DraggedGlass){
			that.state.toShowText.push({text:"Wow that glass looks perfect for ", clickable:false});
			that.state.toShowText.push({text:"cutting those bindings,", clickable:true, nextPage:LookAtBindings});
			that.state.toShowText.push({text:" like it was made for doing just that. But what do I know? Maybe you'd rather curl up in ", clickable:false});
			that.state.toShowText.push({text:"bed", clickable:true, nextPage:LookAtBlanket});
			that.state.toShowText.push({text:" instead.", clickable:false});
		}
		else{
			ARoomData.DraggedGlass = true;
			ARoomData.Health = ARoomData.Health-1;
			that.state.toShowText.push({text:"You feel the ebbing heat of flames as you reach a bare foot towards the glass. You cut yourself trying to handle it, but eventually drag over a sizable chunk. Coughs begin itching up your throat as the smoky ", clickable:false});
			that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"makes you forget about your cut. You take 1 damage, leaving you with " + ARoomData.Health +" health. Now to deal with those ", clickable:false});
			that.state.toShowText.push({text:"bindings.", clickable:true, nextPage:LookAtBindings});
		}

		
		that.typeAnimation();
	}


}