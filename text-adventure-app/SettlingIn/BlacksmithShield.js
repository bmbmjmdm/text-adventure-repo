import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//buy a shield
export class BlacksmithShield {

	static createPage(that){
		SettlingInData.Gold--;
		SettlingInData.Shield = true;
		that.preparePage("You purchase a barely dinged up shield for 11 silver, or about 1 gold. It's not the best make, but anything better would have cost ten times as much. The shield is mostly wood with a thin ring of metal around it and another steel circle in the center. It's quite small and has a leather strap in back. The blacksmith explains, \"That there's a buckla, wear it on ya forearm so ye can keep your hands free! Ta be honest, ye probably be needing that thing; them Helpin' Hands be eying ya real good. May wanna skedaddle from these parts... just mah opinion.\" You ask who or what the Helping Hands are and he motions to the figures with the three green circles. You feel a bit uneasy, thank him, and take your leave. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "BlacksmithShield"; }
}