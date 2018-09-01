import {ARoom} from './ARoom/ARoom.js';
import {GlobalData} from './GameData.js';
import {TheWay} from './TheWay/TheWay.js';
import {YourWorld} from './YourWorld/YourWorld.js';

export class Levels {

	static createPage(that){
		that.preparePage("A Room\n\n", ARoom);
		
		if(GlobalData.Story2Unlocked){
			that.preparePage("The Way\n\n", TheWay);
		}
		else{
			that.preparePage("The Way\n\n");
		}
		
		if(GlobalData.Story3Unlocked){
			that.preparePage("Your World", YourWorld);
		}
		else{
			that.preparePage("Your World");
		}
		
	}


}