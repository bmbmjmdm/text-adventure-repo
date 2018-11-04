import {SettlingInData} from '../GameData.js';
import {StablesFront} from './StablesFront.js';
import {StablesBack} from './StablesBack.js';

//work at the stables on the outskirts
export class Stables {

	static createPage(that){
		SettlingInData.Gold++;
		SettlingInData.Outskirts++;
		SettlingInData.Stables = true;
		
		that.preparePage("You search the outskirts of town for where you think you saw a stable. After stepping on some tents by accident, but the occupants being understanding, you find the muddy trail you were looking for. The stable is made of both rotten and fresh wood, built large enough for a dozen horses though only one person running things. A woman runs to and fro with a stern look on her face. Whenever you try to get her attention, she's either outpacing you or making abrupt turns. A small crowd is gathered near the front while some people come up and take horses. The woman doesn't seem to stop them as she watches, looks at a piece of paper, looks up again, marks a tick and moves on. You finally get her attention and ask about a job. Without a word she reaches into her trousers and pulls out some gloves, slaps them in your hand and asks, \"You can ");
		that.preparePage("ride 'em where 'ey need to go", StablesBack);
		that.preparePage(" or ");
		that.preparePage("help me.", StablesFront);
		that.preparePage(" Need more 'elp 'ere than riders so it pays better.\" The small crowd makes you realize it's a bit exposed here, but the people waiting seem relaxed.");
	}



static getName(){ return "Stables"; }
}