import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//the player makes a small fire to restore a little energy
export class SmallFire {

	static createPage(that){
		YourWorldData.Energy += 10;
		YourWorldData.Kindling --;
		YourWorldData.Campfire = true;
		
		that.preparePage("You gather some twigs and brush together and start rubbing. It's not easy, but eventually you get a feint ember. This grows and spreads like, well like fire, until the bundle is engulfed. It won't last long, but it's enough for ");
		that.preparePage("tonight.", Camping);
		
			
	}


}