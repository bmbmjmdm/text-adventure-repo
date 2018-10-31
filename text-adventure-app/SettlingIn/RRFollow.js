import {SettlingInData} from '../GameData.js';
import {RRAmbush} from './RRAmbush.js';
import {RRSafe} from './RRSafe.js';

//follow contact into alley for stealth bonus 
export class RRFollow {

	static createPage(that){
		SettlingInData.Stealth++;
		
		that.preparePage("You stand up beside the woman and she nods, setting off at a brisk pace into the thin crowd of makeshift community. She's mumbling something under her breath. Maybe prayer? You duck into a mosh of adobe huts, disjointed alleys and small courtyards between them. Your companion leads you to a circle of dirt surrounded by clay walls. Your stealth rises to "+SettlingInData.Stealth+". As darkness begins to fall, the woman turns to you. Her eyes gleam gently, like a cat's, as she speaks, \"You may call me, us, Riffraff, others do. We try to look out for these people, the less fortunate. Not everyone is lucky enough to go off adventuring, some have families to take care of or illness to deal with. Consider yourself lucky.\" You're about to ask how lucky could you be for spending years in prison, but then realize you're free. She has a point. \"Now my turn: why are you so interested? You've been eying us.\" You realize you actually have been, guessing it's just because they stick out. \"Well, that's nice to hear. We heard-\" ");
		
		//if user is stealthy, they dont get ambushed. because theyre in an alley, 0 counts as positive
		if(SettlingInData.Stealth < 0){
			RRAmbush.createPage(that);
		}
		else{
			RRSafe.createPage(that);
		}
	}



static getName(){ return "RRFollow"; }
}