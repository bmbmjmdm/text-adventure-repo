import {TheWayData} from '../GameData.js';
import {MansLaws} from './MansLaws.js';
import {HelpOthers} from './HelpOthers.js';

//convincing guardfour successfully 
export class GodForgives {

	static createPage(that){
		TheWayData.GuardFour.Hostility -= 2;
		
		that.preparePage("The guard rolls his eyes, taps his foot and spits. \"Ey, true. I got eh job, though. I'm workin' under yer God, see?\" This might actually be working. Now, do you want to try and convince him that ");
		that.preparePage("man's laws aren't God's? ", MansLaws);
		that.preparePage("That sitting in a cell might not be God's view of repenting? Or you could argue that ");
		that.preparePage("you can do more good and earn God's forgiveness by helping others,", HelpOthers);
		that.preparePage(" which you can't do from inside a cell.");
	}
	
}