import {SettlingInData} from '../GameData.js';
import {EndLevel} from './EndLevel.js';

//Helping hand ambush failed, player extracts information 
export class HHAfterAmbush {

	static createPage(that){
		that.preparePage("You kneel beside one of the half-living assassins and lift his head. Both of you are heaving, but you're not coughing blood. You lift your blade to his throat and demand answers. Why? Why do this to you? He begins chuckling as best he can between coughs. \"You think we make decisions? We're-\" he coughs- \"just the helpers. Whatever you-\" he coughs \"did to piss off the hands, that's why.\" You can't make heads or tails of it, you didn't do anything to offend those pompous, green circle twits. You need more information. You demand to know the name of who ordered this. \"Who cares? Who-\" the man dies with your blade at the ready. ... You walk over to one of his friends. Repeating your process, you get some answers, \"Dunno who, but the hit's old. Years old. The hands are gettin' lazy.\" That doesn't make any sense; you were in prison for as long as you can remember... everything before is a blur. You have some idea... maybe... but it's like remembering a dream. ");
		that.preparePage("What did you do?", EndLevel);
	}



static getName(){ return "HHAfterAmbush"; }
}