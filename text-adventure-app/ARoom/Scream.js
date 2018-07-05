import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {Deal} from './Deal.js';
import {NoDeal} from './NoDeal.js';
import {ARoomData} from '../GameData.js';

export class Scream {

	static createPage(that){
		if(ARoomData.MadeDeal || ARoomData.MadeBetterDeal){
			that.state.toShowText.push({text:"You begin screaming again, but the person across the wall interrupts, \"Keep your voice down! If the guards get here you'll just wind up in another cell. Now find a way out of that ", clickable:false});
			that.state.toShowText.push({text:"room,", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:" quick.\"", clickable:false});
		}
		else if (ARoomData.RefusedDeal){
			that.state.toShowText.push({text:"You begin screaming again, but the person across the wall interrupts, \"Scream all ya want, no one's coming to help you. You're gonna burn in ", clickable:false});
			that.state.toShowText.push({text:"there, ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"burn I tell ya!\"", clickable:false});
		}
		else if(ARoomData.BrokeLantern){
			that.state.toShowText.push({text:"With the fire growing, you scream as loud as you can. Soon, a voice calls out from your left, through the wall as well as the bars in the door, \"Goddamnit I knew I smelled smoke. Your gonna get us all killed! Or maybe...maybe this is my chance! Hey, hey you! I've been workin on a plan to get outa here for a while now. I know these halls inside and out, the only problem is...I can't get outa this room. But once I do! Oh once I do they're gonna regret ever throwin me in here. But if I burn to death none of that matters, I mean, if we burn to death. You gotta find a way to get yourself out, get us both out! I mean, if you help me I'll help you, ya know? So what do ya say? Do we got a ", clickable:false});
			that.state.toShowText.push({text:"deal ", clickable:true, nextPage:Deal});
			that.state.toShowText.push({text:"or ", clickable:false});
			that.state.toShowText.push({text:"no?", clickable:true, nextPage:NoDeal});
			that.state.toShowText.push({text:"\"", clickable:false});
		}
		else{
			that.state.toShowText.push({text:"You call out, screaming for help with your ", clickable:false});
			that.state.toShowText.push({text:"bindings,", clickable:true, nextPage:LookAtBindings});
			that.state.toShowText.push({text:" but no-one seems to answer. Are you really all alone? Are you really going to die in this ", clickable:false});
			that.state.toShowText.push({text:"room?", clickable:true, nextPage:LookAroundRoom});
		}
		
		that.typeAnimation();
	}


}