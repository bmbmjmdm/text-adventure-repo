import {SettlingInData} from '../GameData.js';
import {HHEnter} from './HHEnter.js';
import {HHRefuse} from './HHRefuse.js';

//Helping hand contacts the player at the city center
export class HHContact {

	static createPage(that){
		that.preparePage("Soon, you're resting at your inn, pondering the city you've seen so far. A curiosity builds in your belly and walks you out the door for a stroll around the Center Block. You admire the churches as the sun sets behind you, casting an orange light on the monuments. As you're walking a nearby block, entertained by arguing merchants and uptight Empire soldiers, a man beckons you, \"Friend! Friend!\" He's wearing a nice wool suit with a green-lined lapel, a patch of three circles on each shoulder. \"I've heard a bit about you, and would like to welcome you to chat.\" The man is standing by small stone building, perhaps large enough for two or three rooms with elegant wooden windows. He motions toward the door, preparing to open it for you. Do you ");
		that.preparePage("enter", HHEnter);
		that.preparePage(" or ");
		that.preparePage("refuse?", HHRefuse);
	}



static getName(){ return "HHContact"; }
}