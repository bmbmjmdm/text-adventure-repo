import {CaveContinue} from './CaveContinue.js';
import {CaveExit} from './CaveExit.js';
import {YourWorldData} from '../GameData.js';

//enter the cave on the side of the mountain. There will be bats and stones in here, as well as trickling water. Requires a vine or BA woman to explore completely. 
export class CaveEnter {

	static createPage(that){
		that.preparePage("You squeeze through the crack with stiff stone pressing against your ribcage, threatening to crush you then and there, but it doesn't. You emerge on the other side in a much wider chamber, though short. You have to keep to your hands and knees for now, and as you do so, you realize the floor of the cave is wet. There's a crack in the ceiling letting in light, just enough to make out the glossy white interior jagged with stalactites spiraling from the ceiling. There's enough room to move around them, and feeling the stone structures reminds you of glazed ceramics in some parts, volcanic roughness in others. The cave continues deeper past another chokepoint, if you wish to ");
		that.preparePage("squeeze through.", CaveContinue);
		that.preparePage(" There's also no shame in ");
		that.preparePage("turning around.", CaveExit);
		
		//all allies except for baddass gal will stay back 
		if(YourWorldData.Allies>0 && !(YourWorldData.Allies ==1 && YourWorldData.BadassGal)){
			that.preparePage(" As you turn to consider this option, you notice you're alone in the cave. \"It may be best if ");
			if(YourWorldData.Allies >1){
				that.preparePage("we");
			}
			else{
				that.preparePage("I");
			}
			that.preparePage(" stay out here... good luck!\"");
		}
		
		if(YourWorldData.BadassGal){
			that.preparePage(" \"Noone should spelunk alone.\" Another voice says, and soon you see the older woman squeeze her way through the crack behind you. She gives you a grin and a wink, her arms stable and body attuned as she crawls up to meet you.");
		}
 
	}



static getName(){ return "CaveEnter"; }
}