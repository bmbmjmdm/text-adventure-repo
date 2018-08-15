import {TheWayData} from '../GameData.js';
import {GodForgives} from './GodForgives.js';
import {GodRepent} from './GodRepent.js';

//Player says they've acted against God, guards get pissed
export class IsSinner {

	static createPage(that){
		TheWayData.GuardFour.Hostility += 2;
		
		that.preparePage("A dogmatic superiority rolls through the guards' eyes as one opens their mouth in a rage, \"Sinner! Ery last one a'ya. Jus' bloody, good-fer-nothin', God-fersakin' sinners. We might a'well cut ya up right now, save God th'hassle.\" The guard's lip quivers like his axe as he takes a step closer. \"Yer beyond my forgiveness.\" The man of god's words make the response too easy. You think to tell him that God is forgiving. But there are many views on this. Do you claim ");
		that.preparePage("God is ever forgiving", GodForgives);
		that.preparePage(" or ");
		that.preparePage("God forgives those who repent?", GodRepent);
	}
	
}