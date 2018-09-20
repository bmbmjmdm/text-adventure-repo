import {AttackGuardTwo} from './AttackGuardTwo.js';
import {Node2C} from './Node2C.js';
import {TheWayData} from '../GameData.js';

//tell guard truth about player's escape, he takes it as a joke, succeeds
export class SarcasticGuardTwo {

	static createPage(that){
		
		TheWayData.GuardTwo.Hostility -= 2;
		that.preparePage("You tell the guard how you climbed through a window after successfully starting an out-of-control fire. He listens in silence. After that you can see gears turning behind his eyes as his face slowly cracks, his serious demeanor succumbing to a fit of laughter. \"Oh wow, that's a good one. Haven't heard a tale like that in a while.");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardTwo.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardTwo.Hostility++;
			}
			else{
				TheWayData.GuardTwo.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardTwo.Hostility > 0){
			that.preparePage(" Regardless, an escapee is what it is. Nothing personal, kid, but I'm gonna have to put you back in your cage where you belong.\" The man starts walking towards you, ");
			that.preparePage("sword at the ready.", AttackGuardTwo);
		}
		
		//passive
		else{
			TheWayData.GuardTwo.Neutralized = true; 
			TheWayData.HasWeapon.Sword = true;
			that.preparePage("\" The guard takes a seat on a stone bench and lays down his sword. \"You know they don't pay us enough down here. We come all the way out to the goddamn mountains to work in a dark, damp cave of a prison, and we don't eat any better than you. Honestly, a laugh is worth more than I'm making here.\" The guard becomes lost in thought as he turns away. You try not to disturb him as you quietly walk over to the rack of swords, pick one up, and then look around the ");
			that.preparePage("room.", Node2C);
		}
		
		
	}



static getName(){ return "SarcasticGuardTwo"; }
}