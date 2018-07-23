import {Node2C} from './Node2C';
import {TheWayData} from '../GameData.js';

//successfully pickpocket guard two, gaining her keys
export class DistractGuardTwo {

	static createPage(that){
		TheWayData.HasKeys = true;
		TheWayData.GuardTwo.Pickpocket = true;
		
		that.preparePage("You casually walk up to the row of swords dangling from a wooden rack. Swiping your hand across the lot of them, they fall one by one. The guard gets up with an uproar, \"What the hell was that?!\" But you just look around, confused. After appologizing you begin picking swords up, with the guard coming to help. As the two of you are bent on the ground, you see a chance to unhook his keys. They fall with the rest of the swords, which you gather up clumsily. The guard goes back to sitting down without a word, while you ");
		that.preparePage("continue on your way.", Node2C);

		
	}


}