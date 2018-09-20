import {DiplomacyGuardOne} from './DiplomacyGuardOne.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

export class SpeakGuardOne {

	static createPage(that){
		that.preparePage("You make yourself look as innocent as you can, brush back your nest of greasy hair and feign an awkward smile. The guard reaches you, a young woman with rough skin and missing teeth. She wears worn leather armor and brandishes a sword that looks like it lost a fight to a rock. She speaks in a panic, \"What- what you doing here?\" She looks at the rope dangling from the smoking room. \"You- you escape! You going right back- shit. Shit!\" The smoke is thick and black, taking most of her attention. She seems somewhat distracted, you could ");
		that.preparePage("attack her now ", AttackGuardOne);
		that.preparePage("or try your luck ");
		that.preparePage("convincing her to let you go.", DiplomacyGuardOne);
		
		
	}



static getName(){ return "SpeakGuardOne"; }
}