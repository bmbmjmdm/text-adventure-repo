import {SettlingInData} from '../GameData.js';
import {BlacksmithBow} from './BlacksmithBow.js';
import {BlacksmithShield} from './BlacksmithShield.js';
import {BlacksmithBoth} from './BlacksmithBoth.js';
import {ExploreCity} from './ExploreCity.js';

//buy a bow, shield, or both at the blacksmith in the city center
export class Blacksmith {

	static createPage(that){
		SettlingInData.Blacksmith = true; 
		SettlingInData.Center++;
		
		that.preparePage("You venture into the city center in search of forged steel. A few cobblestone streets later you come across a sign directing you down a winding hill, \"Titan's Toe Forge\" it says. There's smoke coming from the bottom and, as you descend towards a bundle of small buildings, you notice a rather large, metal construct beside them. Approaching it you can spot several armed guards, and now notice the metal forms an odd looking building. It's made of stone with bars this way and that, etched into the front the word \"Armory\". The armed guards brandish a red symbol on their armor: it looks like a cross with two horizontal slashes instead of one. You notice some of the guards speaking to men and women in stiff, well-sewn suits and cloaks. They have a greenish hue to them and are marked with their own symbol: three green circles in a pyramid. You're not sure what either of these symbols mean but don't feel like talking to guards after you broke out of prison. The green-adorned figures prod you with eyes as you make your way past, and you notice money exchanging hands. Ducking into Titan's Toe Forge, you're met with a middle-aged, bald man with large orange beard. \"Greetings! What can I do for ye?\" He's sweating something fierce as red and white embers burn in the background. You see what he has to sell: small metal fixings, tools, horse hooves, pots, swords, shields, and bows. You consider buying a ");
		that.preparePage("shield", BlacksmithShield);
		that.preparePage(" or ");
		that.preparePage("bow.", BlacksmithBow);
		
		if(SettlingInData.Gold > 1){
			that.preparePage(" Alternatively you could buy ");
			that.preparePage("both", BlacksmithBoth);
			that.preparePage(" or ");
			that.preparePage("neither.", ExploreCity);
		}
		else{
			that.preparePage(" Or you could ");
			that.preparePage("leave.", ExploreCity);
		}
	}



static getName(){ return "Blacksmith"; }
}