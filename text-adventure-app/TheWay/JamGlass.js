import {SnapGlass} from './SnapGlass.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {DiplomacyGuardOne} from './DiplomacyGuardOne.js';
import {TheWayData} from '../GameData.js';

export class JamGlass {

	static createPage(that){
		TheWayData.GuardOne.Hostility += 2;
		TheWayData.JammedGlass = true;
		TheWayData.HasWeapon.Glass = false;
		that.preparePage("You begin shoving the jagged glass into the metal keyhole. As it scrapes and jams, you try pushing and twisting it at every angle. After a few seconds, a voice behind you speaks up, \"You! What you doing?\" Oh man you screwed up. Talk about getting caught red handed. Well, what's the play? The guard is a scarred and dirtied woman wearing ragtag leather armor. She's missing a tooth and the rest are deep yellow, eminating a musk that makes breathing a challenge. She holds a short, chipped sword and isn't happy to see you. Do you ");
		that.preparePage("try to free the glass and attack?", SnapGlass);
		that.preparePage(" Or maybe ");
		that.preparePage("attack without the glass? ", AttackGuardOne);
		that.preparePage("She looks quite concerned about the fire, perhaps you can ");
		that.preparePage("talk her down.", DiplomacyGuardOne);

		
		
	}



static getName(){ return "JamGlass"; }
}