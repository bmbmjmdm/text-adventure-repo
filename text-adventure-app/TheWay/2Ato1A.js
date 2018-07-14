import {1Ato2A} from './1Ato2A.js';
import {1Ato1B} from './1Ato1B.js';
import {DiplomacyGuardOne} from './DiplomacyGuardOne.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

//
export class 2Ato1A {

	static createPage(that){
		if(TheWayData.HasKeys){
			TODO
			if(TheWayData.PrisonerFree){
			TODO
			}
		}
		
		else{
			that.preparePage("You stammer into walls on your way back to the corner. Once there, ");
			
			//the guard just showed up at 1B, gonna have to confront her
			if(!TheWayData.GuardOne.Neutralized)
				that.preparePage("you see the guard standing in front of your smoking cell. You can see that she's a woman, and she can see that you're there. \"You! Here, now!\" There's nowhere to run to unfortunately, so you walk up to her slowly. She frantically looks at you, then the fire, then you. As you reach her she asks, \"What you doing here?\" Do you ");
				that.preparePage("respond?", DiplomacyGuardOne);
				that.preparePage(" Or do you take this chance to ");
				that.preparePage("attack?", AttackGuardOne);
				that.preparePage(" She's fairly young but not too small. Her skin is rough like the leather armor she wears, her sword chipped like her teeth.");
			}
			
			//guard is gone and nothing to do in 1A, go straight to 1B
			else{
				that.preparePage("you ");
				that.preparePage("continue", 1Ato1B);
				that.preparePage(" to in front of your smoking cell.");
							
			}
			
		}
		
		
	}


}