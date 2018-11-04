import {SettlingInData} from '../GameData.js';
import {AmbushCalculator} from './AmbushCalculator.js';
import {RRAfterAmbush} from './RRAfterAmbush.js';

//get ambushed by HH goons 
export class RRAmbush {

	static createPage(that){
		SettlingInData.AfterAmbush = RRAfterAmbush;
		that.preparePage("The woman darts her eyes around, hushes her voice, and puts a hand on your chest. As a gentle tapping, dragging of footsteps begin to emerge around you, the moonlight outlines shoulders and heads. You have company. The woman begins muttering some words under her breath again, you pick up the ending, \"-and let thy walk thine path with sight true.\" You feel a warmth emanate from her hand and fill your body as you recoil. What did she do? What did- you begin to see through the darkness, the figures of three men becoming apparent. They're surrounding you and your (hopefully) friend, wielding swords and chains. You realize you can make out all of the shapes around you as if it were daytime, the only difference being the sky which is completely black. It's miraculous, though the situation isn't. Your (still hopefully) friend draws a dagger and nudges you. \"Helpers, the lot of them. Prepare yourself.\" She flashes a grin to you suddenly, \"My name's Nell. We're in this together now.\" Well that's... good? ");

		AmbushCalculator.createPage(that);
	}



static getName(){ return "RRAmbush"; }
}