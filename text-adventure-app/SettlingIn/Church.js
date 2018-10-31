import {SettlingInData} from '../GameData.js';
import {ChurchBribe} from './ChurchBribe.js';
import {ChurchDonate} from './ChurchDonate.js';
import {ChurchBoth} from './ChurchBoth.js';
import {ExploreCity} from './ExploreCity.js';

//donate, bribe priest, both, or do nothing at the Church in city center 
export class Church {

	static createPage(that){
		SettlingInData.Church = true; 
		SettlingInData.Center++;

		that.preparePage("There are two main churches in Xanaph, both by the Center Block and both a testament to the architectural achievements of humankind. One had started as wood, but with steel and iron being shaped in new and magnificent ways, its windows became laced with dripping metallic fringes, its steeple was stretched high, high into the air with thin, long, perfectly angled, shining beams, and its cross was hoisted to the clouds, towards above. On the other end of the block is a church of etched, smooth stone, marble swirled into the archways and a spiraling steeple looking fluid. The carvings are masterful in places, entire portraits and landscapes themselves. There's something about their lines that feels like something. Something calling to you. You enter the more down to earth church, entering to find dozens of rows of thick, dark wood speckled with marble and crystal shards. The nave is occupied by nearly a hundred people, praying, chatting, admiring the interior mosaics before candlelight. You approach a section towards the front and take a seat. There's no service currently, but something still calls. You strain your attention trying to listen, a believer or not, when your focus is drawn. You see a man standing at the corner of an isle wearing a stiff robe with crosses on its collar. He's holding a book with a cross on it, a \"Bibel\" you've been told, and talking to another man in a similar robe. However this man's robe has three small, green circles on it instead of crosses. His also doesn't extend beyond his feet, but is hemmed to make walking easier, perhaps quicker. He hands what you assume is the priest a small velvet sack, whispering something, and then walks away. On his way out the green circle man surveys the crowd, spotting you, looks around again, and then back to you. Did he recognize you? You're blending in nicely with the common folk, and besides, he continued out in no more or less of a hurry. Hm. You consider speaking to the priest, perhaps ");
		that.preparePage("bribing", ChurchBribe);
		that.preparePage(" him considering what was probably in that velvet sack. You also consider going to the front and lighting a candle, ");
		that.preparePage("donating,", ChurchDonate);
		that.preparePage(" and praying upon the alter. ");
		
		if(SettlingInData.Gold > 1){
			that.preparePage("Alternatively you could do ");
			that.preparePage("both", ChurchBoth);
			that.preparePage(" or ");
			that.preparePage("neither.", ExploreCity);
		}
		else{
			that.preparePage("Or you could ");
			that.preparePage("leave.", ExploreCity);
		}
	}



static getName(){ return "Church"; }
}