import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed the foul smelling man at camp to gain energy 
export class FeedFoul {

	static createPage(that){
		that.preparePage("You give the rank man your "+YourWorldData.Eating+". He flashes a devlish grin, winks and laughs, then begins "+YourWorldData.EatDrink+"ing. ";

		if(YourWorldData.Eating == "meat" && !YourWorldData.Campfire){
			that.preparePage("After he finishes, he lets out a burp more foul than you could've imagined. You can't imagine that's normal for him, maybe it was the uncooked meat? ");
		}
		if(YourWorldData.Eating == "berries"){
			that.preparePage("He licks his fingers as he speaks, \"Hank oo tho mutsch! Beh-eeths awe mah hayve-it! ");
			YourWorldData.Energy += 10;
		}
		
		preparePage("Time to get away.", Camping);
		
		
	}

}