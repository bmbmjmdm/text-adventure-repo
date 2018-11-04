import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//donate to the church and become blessed AND bribe the priest 
export class ChurchBoth {

	static createPage(that){
		SettlingInData.Blessing = true; 
		SettlingInData.Bribe = true; 
		SettlingInData.Gold -= 2;
		
		that.preparePage("You approach the priest, counting a few silver pieces into your hand. As you draw near he turns to you and smiles broadly, nodding his head and greeting, \"Blessings, my child.\" You give him some blessings back, then ask who he was just speaking to. The priest grows sour in the face, turning away, \"You're forgiven, child.\" This is starting to feel like a bad idea, but might as well go all in! You rest a fist out in front of you with your other hand laying on top. You humble yourself before the priest who notices the awkward, though discrete gesture. He meets his hands with yours and bows, accepting the dozen silver (or 1 gold). \"I'm afraid I can't tell you more than your neighbor. He is of the Helping Hand, a noble community upholding God's name and the city. They're loved by the church, the Empire... by all.\" He looks you over, hesitates, and says, \"Best your kind stay in the nave where it's safe.\" You hear the rustling of coin in his hand. \"Though it's nice to have a new friend.\" You feel it's a good time to leave about now, before he changes his mind or cryptically hints something else. You approach the alter and bow your head, whispering some words under your breath. Maybe you pray, maybe you ridicule, none the less you light some pretty candles and admire the carved marble lined with gemstone. You feel a force between your ears and a sudden breath fill your lungs. You're not sure what that was, perhaps you were possessed? You drop a gold coin in the donations plate before leaving, feeling oddly healthy. You can't help but think someone's watching you, hopefully not the green-trimmed-robe man. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "ChurchBoth"; }
}