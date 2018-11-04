import {SettlingInData} from '../GameData.js';
import {RRAmbush} from './RRAmbush.js';
import {RRSafe} from './RRSafe.js';

//stay in dirt field against contact's request, stealth penalty 
export class RRStay {

	static createPage(that){
		SettlingInData.Stealth--;
		
		that.preparePage("You stay seated and stare at your shabby though confident friend. She lets out a sigh and sits back down. \"Have it your way.\" The woman closes her eyes and mumbles a few words under her breath. Is she praying? The sun is half-obscured by the crest of the mountaintop, a deep orange cast across the clouds overhead and a feint pink slips away with the sun. You're sitting in a fairly open dirt clearing, thirty or so meters from any cover. Your stealth drops to "+SettlingInData.Stealth+". As darkness begins to fall, the woman opens her eyes. They gleam gently, like a cat's, as she speaks, \"You may call us Riffraff, others do. We try to look out for these people, the less fortunate. Not everyone is lucky enough to go off adventuring, some have families to take care of or illness to deal with. Consider yourself lucky.\" You're about to ask how lucky could you be for spending years in prison, but then realize you're free. She has a point. \"Now my turn: why are you so interested? You've been eying us.\" You realize you actually have been, guessing it's just because they stick out. \"Well, that's nice to hear. We heard-\" ");
		
		//if user is stealthy, they dont get ambushed. because theyre in an open field, 0 counts as negative
		if(SettlingInData.Stealth <= 0){
			RRAmbush.createPage(that);
		}
		else{
			RRSafe.createPage(that);
		}
	}



static getName(){ return "RRStay"; }
}