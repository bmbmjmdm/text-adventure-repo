import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed son at camp to gain energy 
export class FeedSon {

	static createPage(that){
		that.preparePage("You hand the child the "+YourWorldData.Eating+" and he takes it hesitantly. ");
		if(YourWorldData.Mother){
			that.preparePage("His mother gives you a smile and pushes him forward. \"Th-thank woo\" he says before digging in. ");
		}
		else{
			that.perparePage("His expression is broken, he still hasn't recovered. ");
		}
		if(YourWorldData.Eating == "meat" && !YourWorldData.Campfire){
			that.preparePage("After he eats, you notice him gagging a little, rolling on the floor, acting strangely. Maybe you should've cooked that meat. ");
		}
		if(YourWorldData.Eating == "water"){
			that.preparePage("The water's gone in a gulp, he must have been quite thirsty. ");
			YourWorldData.Energy += 10;
		}
		
		that.preparePage("The night waits, watches.", Camping);
		
		
	}

}