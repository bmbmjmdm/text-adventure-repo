import {ClimbAfterCrack} from './ClimbAfterCrack.js';
import {YourWorldData} from '../GameData.js';

//get supplies from bush but weaken climbing
export class ClimbBush {

	static createPage(that){
		YourWorldData.ClimbCorrect--;
		YourWorldData.SearchedClimb = true;
		YourWorldData.Berries ++;
		YourWorldData.Kindling ++;
		
		that.preparePage("You lean back with one hand on the wall, shifting your weight to your feet. With the other, you grab a branch from the bush and yank it out, throwing your center of balance back as one of your feet slip! You quickly grab the bush again with the same hand and feel a hard tug on your joints. Quickly scrambling your feet against the sheer surface you eventually find purchase, your heart racing, and the cold sweat slowly fading as you place the branch in your bag and look upward. That move costed you a lot of strength... ");
		ClimbAfterCrack.createPage(that);
		
 
	}


}