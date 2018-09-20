import {ComfortGuardThree} from './ComfortGuardThree.js';
import {TakeSwordGuardThree} from './TakeSwordGuardThree.js';
import {TheWayData} from '../GameData.js';

//try to convince the guard you're also a guard, success
export class DecieveGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Hostility -= 2;
		
		that.preparePage("You say how some prisoners escaped and a fire broke out, you were nearly killed in the chaos but made it out by the skin of your teeth. They robbed you, but luckily you found a sword at the other barracks. The young man clings to your every word and is nodding his head, his sword trembling and still pointed at you. Do you want to ");
		that.preparePage("comfort him?", ComfortGuardThree);
		that.preparePage(" Now might also be a good chance to ");
		that.preparePage("take his sword.", TakeSwordGuardThree);
		
		
	}



static getName(){ return "DecieveGuardThree"; }
}