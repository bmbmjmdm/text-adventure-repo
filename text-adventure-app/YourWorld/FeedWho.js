import {FeedSelf} from './FeedSelf.js';
import {FeedSad} from './FeedSad.js';
import {FeedOld} from './FeedOld.js';
import {FeedBadass} from './FeedBadass.js';
import {FeedMother} from './FeedMother.js';
import {FeedSon} from './FeedSon.js';
import {FeedFoul} from './FeedFoul.js';
import {YourWorldData} from '../GameData.js';

//decide who to feed at camp
export class FeedWho {

	static createPage(that){
		
		that.preparePage("Ok, " + YourWorldData.Eating + ", sounds good! Now...who gets to "+YourWorldData.EatDrink+"? ");
		that.preparePage("You?", FeedSelf);
		if(YourWorldData.SadGal){
			that.preparePage(" The ");
			that.preparePage("sad girl?", FeedSad);
		}
		if(YourWorldData.OldGuy){
			that.preparePage(" The ");
			that.preparePage("old guy?", FeedOld);
		}
		if(YourWorldData.BadassGal){
			that.preparePage(" The ");
			that.preparePage("badass woman?", FeedBadass);
		}
		if(YourWorldData.FoulGuy){
			that.preparePage(" The ");
			that.preparePage("foul smelling dude?", FeedFoul);
		}
		if(YourWorldData.Mother){
			that.preparePage(" The ");
			that.preparePage("mother?", FeedMother);
		}
		if(YourWorldData.Son){
			that.preparePage(" The ");
			that.preparePage("child?", FeedSon);
		}
		
	}

}