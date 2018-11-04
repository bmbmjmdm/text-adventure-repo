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

		that.preparePage("There are two main churches in Xanaph, both by the Center Block and both a testament to its architectural achievements. One had started as wood, but with steel and iron being shaped in new and magnificent ways, its windows became laced with dripping metallic fringes, its steeple was stretched high, high into the air with thin, long, perfectly angled shining beams, and its cross was hoisted to the clouds. On the other end of the block is a church of etched, smooth stone, marble swirled into the archways and a spiraling steeple looking fluid. The carvings are masterful, entire portraits and landscapes in some places. There's something about their lines that make you feel something. Something calling to you. You decide on the stone church, entering to find dozens of rows of thick, dark wood speckled with marble and crystal shards. The nave is occupied by nearly a hundred people, praying, chatting, admiring the interior mosaics before candlelight. You approach a section towards the front and take a seat. There's no service currently, but something still calls. You strain your attention trying to listen, a believer or not, when your focus is drawn. You see a man standing at the corner of an isle wearing a stiff robe with crosses on its collar. He's holding a book with a cross on it, a \"Bibel\" you've been told, and is talking to another man in a similar robe. However this man's robe has three small, green circles on it instead of crosses. His also doesn't extend beyond his feet, but is hemmed to make walking easier, perhaps quicker. He hands the priest a small velvet sack, whispering something, and then walks away. On his way out the green circle man surveys the crowd, spotting you, looks around again, and then back to you. Did he recognize you? You're blending in nicely with the common folk, and besides, he continued out in no more or less of a hurry. Hm. You consider speaking to the priest, perhaps ");
		
		if(SettlingInData.Gold > 0){
			that.preparePage("bribing", ChurchBribe);
		}
		else{
			that.preparePage("bribing");
		}
		
		that.preparePage(" him considering that velvet sack he just received. You also think about going to the front and lighting a candle, ");
		
		if(SettlingInData.Gold > 0){
			that.preparePage("donating,", ChurchDonate);
		}
		else{
			that.preparePage("donating,");
		}
		
		
		that.preparePage(" and praying upon the alter. ");
		
		//can buy nothing
		if(SettlingInData.Gold < 1){
			SettlingInData.Church = false; 
			that.preparePage("Unfortunately, however, you don't have any gold. Looks like you'll have to ");
			that.preparePage("leave", ExploreCity);
			that.preparePage(" without the grace of god.");
			
		}
		if(SettlingInData.Gold > 1){
			that.preparePage("Alternatively you could do ");
			that.preparePage("both", ChurchBoth);
			that.preparePage(" or ");
			that.preparePage("neither.", ExploreCity);
			that.preparePage(" You probably won't be coming back for a while though.");
		}
		else{
			that.preparePage("Or you could ");
			that.preparePage("leave.", ExploreCity);
			that.preparePage(" You probably won't be coming back for a while though.");
		}
	}



static getName(){ return "Church"; }
}