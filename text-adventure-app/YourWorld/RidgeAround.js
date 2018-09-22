import {RidgeNarrow} from './RidgeNarrow.js';
import {HomePage} from '../Menus/HomePage.js';
import {YourWorldData} from '../GameData.js';

//go around the rocks atop the ridge
export class RidgeAround {

	static createPage(that){
		YourWorldData.Energy -= 10;
		YourWorldData.Health --; 
		YourWorldData.Flint ++;
		
		that.preparePage("You grasp hold of the side of the rocks and slowly lower a foot down onto the slope. Dirt slides under your feet and you nearly slip, grasping hold of the stone for dear life. You're stable. You walk across carefully, repeating this slip and hold and pray process again and again. Eventually you grasp hold of the stone and it gives, breaking off in your hand and leaving you dangling by the other. You climb back up with scrapes on your arms, having taken 1 damage. You have "+YourWorldData.Health+" health and return to the path with a handful of flint. ");
		
		if(YourWorldData.SadGal){
			that.preparePage("\"Are- are you ok?\" The girl asks wide-eyed, worried. ");
		}
		
		//dead
		if(YourWorldData.Health <= 0){
			that.preparePage("You feel feint as the blood trickles down your arm, you lose your balance atop the ridge and");
			that.preparePage("...", HomePage);
		}
		
		//continue
		else{
			if(YourWorldData.SadGal){
				that.preparePage("You wince and give a nod, trying to reassure her but unsure yourself. ");
			}
			
			RidgeNarrow.createPage(that);
		}
	}


static getName(){ return "RidgeAround"; }
}