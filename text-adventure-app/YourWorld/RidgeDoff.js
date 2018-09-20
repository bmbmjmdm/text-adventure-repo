import {RidgeShelter} from './RidgeShelter.js';
import {YourWorldData} from '../GameData.js';

//Player releases bag to eagle, losing all supplies 
export class RidgeDoff {

	static createPage(that){
		YourWorldData.Berries = 0;
		YourWorldData.Kindling = 0;
		YourWorldData.Meat = 0;
		YourWorldData.Flint = 0;
		YourWorldData.SharpRocks = 0;
		YourWorldData.Wood = 0;
		YourWorldData.Water = 0;
		
		that.preparePage("You feel the flapping of thick feathers beat against the top of your head and lift one hand up, grabbing the ground with the other. Your bag slides off your arm and into the cloudy beyond, carried by a massive bird of prey. It has black feathers with white-rimmed wings and a redish spot on the back of its head. As you regain stability on the ridge, bearing the wind until it dies down, you realize what you just lost in that bag. Soon you can move and crawl onward, leaving what's lost behind. ");
		RidgeShelter.createPage(that);		
	}


static getName(){ return "RidgeDoff"; }
}