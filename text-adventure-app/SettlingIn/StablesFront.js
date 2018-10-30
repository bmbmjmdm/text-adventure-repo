import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//working the front of the stable with Nilda, +gold, -stealth
export class StablesFront {

	static createPage(that){
		SettlingInData.Stealth--;
		SettlingInData.Gold++;
		that.preparePage("Nilda cracks a feint smile and exhales heavily. \"No' that's nice ta 'ere.\" She immediately turns you around and pushes you towards the crowd, yelling out some useful suggestions like \"We don' mail drugs and we don' sell meat.\" People are pushy but well meaning, everyone trying to hear from their family across the land or get a horse out of here, some paying with gold and others with food. Every now and then you see someone with a blue or yellow sash on their arm, and when you ask them what that means, they say its nothing special. But this one time, one time you saw a young woman with two babies and a toddler nearby the stalls. She was begging for food. An older man wearing a dirty, ripped blue sash on his bicep came over and picked one of the babies up right out of her arms! She stood and cried at first, began to yell but then stopped. The young woman hugged the mangled-beard fellow and seemed to rest a hand on his sash. The man then walked away, just like that. That man straight up took that woman's baby and she was nearly thanking him for it. Still though, whenever you ask, the sash seems to be nothing. You make good money helping Nilda with all these people, getting tips every now and then. You have enough gold to pay for your inn and 2 extra! Unfortunately you spoke to a lot of people, so you now have "+SettlingInData.Stealth+" stealth. As the days pass, Nilda takes on a few more people, the crowds growing bigger, and then they die out. One by one people are let go until you find yourself jobless. \"Jus' the way o' tha business.\" ");
		
		ExploreCity.createPage(that);
		
	}



static getName(){ return "StablesFront"; }
}