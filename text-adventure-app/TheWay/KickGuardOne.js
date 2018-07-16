import {SweepGuardOne} from './SweepGuardOne.js';
import {SecondDisarmGuardOne} from './SecondDisarmGuardOne.js';
import {TheWayData} from '../GameData.js';

//try to kick guard for minor damage, succeed
export class KickGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Health -= 1; 
		that.preparePage("Her stance is a little too forward, her sword out of place. You raise an arm in the air for balance, and to distract her, as you kick one of your legs out and hit the inside of her thigh. You deal 1 damage and she buckles slightly, but still stands. You could");
		that.preparePage(" kick her foot out", SweepGuardOne);
		that.preparePage(" now. Her grip on the sword hasn't weakened, but it's definitely closer than it was before. You might be able to");
		that.preparePage(" grab it.", SecondDisarmGuardOne);
		
		
		
	}


}