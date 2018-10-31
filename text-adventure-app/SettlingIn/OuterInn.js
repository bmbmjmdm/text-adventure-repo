import {SettlingInData} from '../GameData.js';
import {SleepInn} from './SleepInn.js';

//Inn on the outskirts 
export class OuterInn {

	static createPage(that){
		SettlingInData.Outskirts++;
		that.preparePage("You find a cozy inn made of adobe within the outer reaches of Xanaph. You work out a deal with the sympathetic owner: you can work for your stay until you get another job. There's plenty of cleaning to do, so hope your fingers aren't too blistered. Over the next days you end up taking a liking to the people around the outskirts, though many of them drifters they seem to watch each others' backs. You sleep like a baby while staying here and the");
		that.preparePage(" week passes ", SleepInn);
		that.preparePage("quick.");
	}



static getName(){ return "OuterInn"; }
}