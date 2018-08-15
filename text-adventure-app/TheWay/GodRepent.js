import {TheWayData} from '../GameData.js';
import {MansLaws} from './MansLaws.js';
import {HelpOthers} from './HelpOthers.js';

//convincing guardfour failing 
export class GodRepent {

	static createPage(that){
		TheWayData.GuardFour.Hostility += 2;
		
		that.preparePage("The guard clicks his teeth and cocks an eyebrow. \"Ey, true. You best get repentin' 'en, yeah? No better place 'an a cell.\" Well shit. That backfired a little. Do you want to try and convince him that ");
		that.preparePage("man's laws aren't God's? ", MansLaws);
		that.preparePage("That sitting in a cell might not be God's view of repenting? Or you could argue that ");
		that.preparePage("you can do more good and earn God's forgiveness by helping others,", HelpOthers);
		that.preparePage(" which you can't do from inside a cell.");
		
	}
	
}