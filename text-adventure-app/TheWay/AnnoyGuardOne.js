import {ClingyGuardOne} from './ClingyGuardOne.js';
import {PlayDeadGuardOne} from './PlayDeadGuardOne.js';
import {BribeGuardOne} from './BribeGuardOne.js';
import {TheWayData} from '../GameData.js';

//by talking to the guard, the player just annoys her
export class AnnoyGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility += 2;
		
		that.preparePage("You start babbling on about how scary the big bad fire is. \"Stay by me, you be fine.\" Well that didn't work, now she's paying even more attention to you and not exactly encouraging you to leave. How do you get out? You could use her words against her and ");
		that.preparePage("get clingy.", ClingyGuardOne);
		that.preparePage(" A bit more dramatic approach might be to throw yourself to the ground and ");
		that.preparePage("play dead.", PlayDeadGuardOne);
		if(TheWayData.Gold>0){
			that.preparePage(" Of course, she may just let you look after yourself for a ");
			that.preparePage("bit of gold.", BribeGuardOne);
		}
		
		
	}


}