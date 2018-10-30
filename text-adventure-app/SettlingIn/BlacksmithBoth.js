import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//buy a shield and bow
export class BlacksmithBoth {

	static createPage(that){
		SettlingInData.Gold -= 2;
		SettlingInData.Shield = true;
		SettlingInData.Bow = true;
		that.preparePage("You purchase a barely dinged up shield and bow for 23 silver, or about 2 gold. They're not the best make, but anything better would have cost ten times as much. The shield is mostly wood with a thin ring of metal around it and another steel circle in the center. It's quite small and has a leather strap in back. The blacksmith explains as he hands a few arrows, \"That there's a buckla, wear it on ya forearm so ye can keep your hands free! Take these arrows, on meh; them Helpin' Hands be eying ya real good. May wanna skedaddle from these parts... just mah opinion.\" You ask who or what the Helping Hands are and he motions to the figures with the three green circles. You feel a bit uneasy, thank him, and take your leave. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "BlacksmithBoth"; }
}