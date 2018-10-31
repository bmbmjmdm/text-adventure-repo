import {SettlingInData} from '../GameData.js';
import {MarketOutfit} from './MarketOutfit.js';
import {MarketDisguise} from './MarketDisguise.js';
import {MarketBoth} from './MarketBoth.js';
import {ExploreCity} from './ExploreCity.js';

//market where clothes and common goods are traded 
export class Market {

	static createPage(that){
		SettlingInData.Market = true; 
		SettlingInData.Outskirts++;
		
		that.preparePage("You make a winding search down possible paths around tents and word of mouth. Eventually you find a small bazaar made of sheets and feeble, wooden poles. You have to duck around most thresholds, each room packed with people, some sitting in the corners displaying goods around themselves. At some point you see a woman with braided, blond hair with a yellow sash tied at one end. When she sees you she smiles, gives a wave of acknowledgement, and dips into the crowd with a cat held against her chest. You can't seem to find her again, though why would you want to? Looking to buy that cat? Not today, I guess. Instead you see a number of slightly worn, though acceptable clothes. The fashion here is rather plain, brown and green cotton pants, grey and green wool shirts, a bit of torn silk here and there and leather coats, bags for those who don't mind the weight. You then make an interesting find. An older man is sitting on some red cloth, with a bit of bent steel tearing from it. You ask what it is and he looks you over. Whispering, he says, \"This here's an Empire uniform. A bit thrashed, but workin'.\" Do you care to ");
		that.preparePage("buy the uniform?", MarketDisguise);
		that.preparePage(" You won't be able to wear it on the streets, but it might come in handy in a pinch... You could also ");
		that.preparePage("get some normal clothes.", MarketOutfit);
		that.preparePage(" The ones you're wearing now make you stick out a little, you might get you arrested... by the fashion police. Burn. ");
		
		if(SettlingInData.Gold > 1){
			that.preparePage("You could also buy ");
			that.preparePage("both,", MarketBoth);
			that.preparePage(" or ");
			that.preparePage("neither.", ExploreCity);
		}
		else{
			that.preparePage("Or you could ");
			that.preparePage("leave.", ExploreCity);
		}
	}



static getName(){ return "Market"; }
}