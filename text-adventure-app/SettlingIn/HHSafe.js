import {SettlingInData} from '../GameData.js';
import {EndLevel} from './EndLevel.js';

//user eavesdrops safely on the helping hand 
export class HHSafe {

	static createPage(that){
		that.preparePage("You stealthily rest hand against the door for stability and slow your breathing. You're able to listen to feint voices on the other side, some laughing, some spitting, some talking. \"-most had 'em\" ... \"have been nice, need to pay for a new\" ... \"the hands want it done then I'm sure it\" ... \"bounty from years ago, how's that punk still walking around\" ... \"that's why they're hands\" ... \"we're helpers\" ... \"hear that?\" You take that as your cue and run down the road, dipping into an alleyway as soon as you can. From what you gathered, there's a bounty on your head... from years ago? But you were in prison all that time, how could... You try to remember your life before jail and can only come up with a blur. You can't... quite remember. ");
		that.preparePage("What did you do?", EndLevel);
	}



static getName(){ return "HHSafe"; }
}