import {SettlingInData} from '../GameData.js';
import {ApothecaryHeal} from './ApothecaryHeal.js';
import {ApothecaryPoison} from './ApothecaryPoison.js';
import {ApothecaryBoth} from './ApothecaryBoth.js';
import {ExploreCity} from './ExploreCity.js';


//Apothecary at the outskirts where player can buy potions 
export class Apothecary {

	static createPage(that){
		SettlingInData.Apothecary = true; 
		SettlingInData.Outskirts++;
		
		that.preparePage("You wander a caravan courtyard in search of mystic brews. There's a lutenist busking beside a crumbling adobe pillar, pointy shoes and all. He smiles gently next to a wood bowl holding six copper pieces. A chill tune fills the air as babies cry, street venders yell, and winds howl. The nearby mountain looms in the unobscured air. As you stroll through, one vender gets your attention with the colorful fluids adorning her wagon's shelf. They're an assortment of glass and stone jars and vials, some showing red, some green, and some purple. You inquire as to what they do, how much they are, and what the yellow/blue sashes around some of them mean. \"Them heal, them hurt, them-\" the woman looks you in the eye sharply, a flat hat on her head and a leather jacket obscuring her body. She looks deep into you, a feeling of nakedness suddenly striking. \"Them you can't afford.\" You ask again about the yellow/blue sashes on some of the bottles. \"Them be not for you.\" Her gaze is steadfast, decided. You stand and wait, unsure of this woman. As nothing is happening, a man of rags and a dull cough approaches next to you. The woman looks to him the same as she did you, as he struggles to speak, \"My, my bo-\" The woman says, \"Mhm mhm mhm mhm mhm-\" as she grabs a red potion off the wagon, a yellow ribbon about its neck, and pushes it into the man. He coughs, \"Than-than-\" coughs, and excuses himself. The woman shoots back to you, \"One gold for ");
		
		if(SettlingInData.Gold > 0){
			that.preparePage("heal,", ApothecaryHeal);
		}
		else{
			that.preparePage("heal,");
		}
		
		that.preparePage(" one gold for ");
		
		if(SettlingInData.Gold > 0){
			that.preparePage("hurt.\"", ApothecaryPoison);
		}
		else{
			that.preparePage("hurt.\"");
		}
			
		that.preparePage(" That man didn't pay a thing! She's either real nice to him or real mean to you. Do you want one of her tinctures? ");
		
		
		//can buy nothing
		if(SettlingInData.Gold < 1){
			SettlingInData.Apothecary = false; 
			that.preparePage("Oh wait, you don't have any gold. Looks like you'll have to ");
			that.preparePage("leave", ExploreCity);
			that.preparePage(" empty handed.");
			
		}
		//can buy 2 things
		else if(SettlingInData.Gold > 1){
			that.preparePage("You could buy ");
			that.preparePage("both", ApothecaryBoth);
			that.preparePage(" even, or ");
			that.preparePage("neither.", ExploreCity);
			that.preparePage(" You probably won't be coming back for a while though.");
		}
		//can buy 1 thing
		else{
			that.preparePage("Or you could ");
			that.preparePage("leave.", ExploreCity);
			that.preparePage(" You probably won't be coming back for a while though.");
		}
	}



static getName(){ return "Apothecary"; }
}