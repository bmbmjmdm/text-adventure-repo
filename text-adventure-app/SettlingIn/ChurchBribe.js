import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//bribe the priest to get information and a friend 
export class ChurchBribe {

	static createPage(that){
		SettlingInData.Bribe = true; 
		SettlingInData.Gold--;
		
		that.preparePage("You approach the priest, counting a few silver pieces into your hand. As you draw near he turns to you and smiles broadly, nodding his head and greeting, \"Blessings, my child.\" You give him some blessings back, then ask who he was just speaking to. The priest grows sour in the face, turning away, \"You're forgiven, child.\" You're starting to think this was a bad idea, but might as well go in! You rest a fist out in front of you with your other hand laying on top. You humble yourself before the priest who notices the awkward, though discrete gesture. He meets his hands with yours and bows, accepting the dozen silver (or 1 gold). \"I'm afraid I can't tell you more than your neighbor. He is of the Helping Hand, a noble community upholding God's name and the city. They're loved by the church, the Empire... by all.\" He looks you over, hesitates, and says, \"Best your kind stay in the nave where it's safe.\" You hear the rustling of coin in his hand. \"Though it's nice to have a new friend.\" You feel it's a good time to leave about now, before he changes his mind or cryptically hints something else. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "ChurchBribe"; }
}