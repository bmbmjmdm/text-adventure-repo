import {SettlingInData} from '../GameData.js';
import {SleepInn} from './SleepInn.js';

//Inn on the outskirts 
export class OuterInn {

	static createPage(that){
		SettlingInData.Outskirts++;
		that.preparePage("You find a cozy inn made of adobe within the outer reaches of Xanaph. You end up taking a liking to the people around the outskirts, thinking about spending more time here. You work out a deal with the owner who understands where you've been: you can work for your stay until you get another job. There's plenty of cleaning to do, so hope your fingers aren't too blistered. None the less, you sleep like a baby and eat like a dozen. The");
		that.preparePage(" week passes ", SleepInn);
		that.preparePage("quick.");
	}



static getName(){ return "OuterInn"; }
}