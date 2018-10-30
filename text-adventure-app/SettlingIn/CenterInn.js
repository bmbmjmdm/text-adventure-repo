import {SettlingInData} from '../GameData.js';
import {SleepInn} from './SleepInn.js';

//Inn in the city center  
export class CenterInn {

	static createPage(that){
		SettlingInData.Center++;
		
		that.preparePage("You find a well-kept inn made of stone and dyed wood within the city center. The people here are cold and short; no-one's looking to make friends and you're not sure why. It makes you want to avoid this area, but you need a place to sleep. You work out a deal with the begrudging owner: you can work for your stay until you get another job. There's plenty of cleaning to do, so hope your fingers aren't too blistered. None the less, you sleep like a baby and eat like a dozen. The");
		that.preparePage(" week passes ", SleepInn);
		that.preparePage("quick.");
			
	}



static getName(){ return "CenterInn"; }
}