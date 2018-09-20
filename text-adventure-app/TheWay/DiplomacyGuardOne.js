import {PlayDumbGuardOne} from './PlayDumbGuardOne.js';
import {LogicalGuardOne} from './LogicalGuardOne.js';
import {TheWayData} from '../GameData.js';

//initiating the diplomacy challenge with guard one (guard outside burning cell) 
export class DiplomacyGuardOne {

	static createPage(that){

		that.preparePage("You're a prisoner, she's a guard, most people would laugh in your face at this prospect but no, you're confident. With the fire bellowing and your tongue sharp, you got this. "); 
		if(TheWayData.Health < 7){
			that.preparePage("You caress the wounds around your body and whimper, hoping she takes pity on you. Looking into her eyes, her soul, you don't see sympathy but instead an utter lack of caring. That's good! You appear to be less of a threat to her due to your injuries. ");
			TheWayData.GuardOne.Hostility--;
		}
		that.preparePage("Now, what do you say? You can ");
		that.preparePage("play dumb ", PlayDumbGuardOne);
		that.preparePage("and hope she forgets you for the fire, or perhaps ");
		that.preparePage("be logical ", LogicalGuardOne);
		that.preparePage("and explain to her that you aren't worth the trouble."); 
		
	}



static getName(){ return "DiplomacyGuardOne"; }
}