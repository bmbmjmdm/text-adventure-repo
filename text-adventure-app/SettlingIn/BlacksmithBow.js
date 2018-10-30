import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//buy a bow
export class BlacksmithBow {

	static createPage(that){
		SettlingInData.Gold--;
		SettlingInData.Bow = true;
		that.preparePage("You purchase a barely dinged up bow for 11 silver, or about 1 gold. It's not the best make, but anything better would have cost ten times as much. The blacksmith throws in a few arrows, but tells you quietly, \"I think ye might be needing some, them Helpin' Hands be eying ya real good. May wanna skedaddle from these parts... just mah opinion.\" You ask who or what the Helping Hands are and he motions to the figures with the three green circles. You feel a bit uneasy, thank him, and take your leave. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "BlacksmithBow"; }
}