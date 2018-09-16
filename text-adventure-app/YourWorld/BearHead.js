import {BearTorso} from './BearTorso.js';
import {BearDash} from './BearDash.js';
import {BearKills} from './BearKills.js';
import {BearDies} from './BearDies.js';
import {YourWorldData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';

//strike the bear's head as it leans in to attack
export class BearHead {

	static createPage(that){
		var weapon = "sword";
		var damage = 3;
		if(YourWorldData.HasAxe){
			weapon = "axe";
			damage = 4;
		}
		
		YourWorldData.BearHealth -= damage;
		
		that.preparePage("As the blood-thirsty jowels snap out like the gates of hell unleashing, cleave your "+weapon+" up to intercept them. It catches beneath the bear's jaw and just at the edge of its throat, tearing a bloody wound that claps its mouth shut and sends it stumbling. You deal "+damage+" damage as sweat drips down your arms and dirt stains your face. ");
		
		//bear kills player
		if(YourWorldData.Health <= 0){
			BearKills.createPage(that);
		}
		
		//bear dies
		else if (YourWorldData.BearHealth <= 0){
			BearDies.createPage(that);
		}
		
		//alive
		else{
			that.preparePage("The bear breathes heavy and wavers but doesn't back down. It attempts to tackle you with its neck bent in like a furry, obese bullet. Or train. Your "+weapon+" is positioned in the bear's abdomen but, for all you know, that's mostly fat. Do you ");
			that.preparePage("drive it into the bear's torso", BearTorso);
			that.preparePage(" or try to ");
			that.preparePage("slash and dash?", BearDash);
			
			
		}
		
		
	}
		
	
}
