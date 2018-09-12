import {RidgeNarrow} from './RidgeNarrow.js';
import {Levels} from '../Menus/Levels.js';
import {YourWorldData} from '../GameData.js';

//go around the rocks atop the ridge
export class RidgeAround {

	static createPage(that){
		YourWorldData.Energy -= 10;
		YourWorldData.Health --; 
		YourWorldData.Flint ++;
		
		that.preparePage("You grasp hold of the side of the rocks and slowly lower a foot down onto the slope. Dirt slides under your feet and you nearly slip, grasping hold of the stone for dear life. Your stable. You walk across carefully, repeating this slip and hold and pray process again and again. Eventually you grasp hold of the stone and it gives, breaking off in your hand and leaving you dangling by the other. You climb back up with scrapes in your arms, having taken 1 damage. You have "+YourWorldData.Health+" health and return to the ridge with a handful of flint. ");
		
		//dead
		if(YourWorldData.Health <= 0){
			that.preparePage("You feel feint as the blood trickles down your arm, you lose your balance atop the ridge and");
			that.preparePage("...", Levels);
		}
		
		//continue
		else{
			RidgeNarrow.createPage(that);
		}
	}

}

