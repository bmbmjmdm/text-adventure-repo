import {HornBlip} from './HornBlip.js';
import {HornGod} from './HornGod.js';
import {YourWorldData} from '../GameData.js';

//Get foot stuck in the snow while hiking, contemplating between what gives life meaning and what that makes us 
export class HornStuck {

	static createPage(that){
		that.preparePage("Your hands wrap stone and lift your body past a patch of steep snow. As you walk over the rock, then past, your foot suddenly plunges in deep beside it. You're up to your right thigh in snow, foot lodged beneath hard ice and hard rock. You hold your weight up with your hands and bow your left leg atop the frozen snow to help, trying desperately not to sink deeper. You twist and shift, try to find a way to dislodge your foot but it's hard. You can't see it and your weight is distracting. Could this be it? Is your existance, perhaps an ");
		that.preparePage("insignificant blip in a void,", HornBlip);
		that.preparePage(" perhaps a ");
		that.preparePage("godly personification of the universe,", HornGod );
		that.prepagePage(" ending?");
	}

}


