import {ForestClearing} from './ForestClearing.js';
import {YourWorldData} from '../GameData.js';

//search for supplies at the forest path
export class ForestPathSearch {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		if(YourWorldData.SearchedForestPath){
			that.preparePage("You return to the tree where a ray of sunlight illuminates yellow flowers around it. Strange, you thought those flowers had all blown away... After a few minutes of speaking with the tree, pleeding for answers, you've exhausted yourself spiritually only to recieve silence. You have "+ YourWorldData.Energy+" energy and decide to ");
			that.preparePage("turn around", ForestClearing);
			that.preparePage(" before going completely insane.");
		}
		
		else{
			YourWorldData.SearchedForestPath = true; 
			YourWorldData.Kindling ++;
			YourWorldData.Berries ++;
			YourWorldData.Vine ++;
			
			that.preparePage("You veer off the trail to take one less traveled. Through thick and bugs and odd smells and all, you arrive at a large tree where the trail comes to an end. It towers dozens of feet into the air, the base adorned with yellow flowers you've never seen or heard of. It smells strange here, sour in a way, but you're compelled to approach this tree. A voice arises in your mind and you're not sure if it's your own or...something else. It tells you of a sister tree, one in far away lands. You don't know what that means, or why it matters, but the thought lingers for a moment before gust of wind blows down the trunk and sprays you with flowers. Something's amist... After an hour of contemplation and look around, you find no answers. You do find some dried branches, vast vines dangling from the tree, and berries not too far away though, and now have "+ YourWorldData.Energy+" energy. You add these to your bag and decide to turn around, ");
			that.preparePage("return to your original path,", ForestClearing);
			that.preparePage(" perhaps one day you'll know what this all meant...");
			
		}
		
	}


}