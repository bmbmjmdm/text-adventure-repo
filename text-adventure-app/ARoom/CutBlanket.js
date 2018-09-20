import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtGlass} from './LookAtGlass.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class CutBlanket {

	static createPage(that){
		that.preparePage("You take the blanket and ");
		that.preparePage("glass", LookAtGlass);
		that.preparePage(" in hand and begin some good-ol-fashion tailoring. The blanket rips with ease, though unevenly and jagged in every way. By the end, the blanket is no more. What you're left with are a few strips of fabric that you immediately wrap around your feet and hands. They might not be the most impressive gloves or shoes, but they'll do. Wait, what am I saying? You're trapped in a ");
		that.preparePage("room", LookAroundRoom);
		that.preparePage(" caught on ");
		that.preparePage("fire!", LookAtFire);
		that.preparePage(" How could this possibly help? I mean, I guess the cut on your foot stopped bleeding so much. ");
		var healing = 1;
		if(ARoomData.ThrewRope){
			healing = 2;
			that.preparePage("And the burns on your hands don't hurt as bad. ");
		}
		ARoomData.Health = ARoomData.Health + healing;
		that.preparePage("But man are you gonna have a nasty infection later. Fine, you gain "+ healing + " health temporarily, putting you at "+ARoomData.Health+".");
		
		ARoomData.WrappedHandsFeet = true;
		
		
	}



static getName(){ return "CutBlanket"; }
}