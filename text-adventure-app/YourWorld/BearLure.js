import {TurnAroundForest} from './TurnAroundForest.js';
import {BearToLedge} from './BearToLedge.js';
import {BearConfront} from './BearConfront.js';
import {YourWorldData} from '../GameData.js';

//try to lure the bear out of the way using berries or meat. If no meat/berries in inventory, just find some flint 
export class BearLure {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("The bear appears to be looking the other way, at what you can't tell. You look inside your bag for something to lure the bear away with: ");
		
		//lure bear away with meat or berries
		if(YourWorldData.Berries > 0 ){
			//offset the energy loss from BearToLedge
			YourWorldData.Energy+= 10;
			that.preparePage("berries! That's perfect. You take a look at the surrounding area: lots of fallen down trees and oddly large boulders. If you were to try and climb through that, the bear would surely spot you. But since it doesn't know you're here, that bear probably wouldn't mind taking a walk through some bush for a treat. You throw a small rock at a tree in the direction of your choosing, holding your "+weapon+" at the ready just in case. The bear stops what it's doing and looks up, your breath siezes as it turns and you fear it'll see you. Just then you throw a handful of berries in the same direction as the rock, they bounce off some tree trunks and drizzle the fallen leaves with noise. The bear gets excited and runs off to them, curious as could be. It's kind of cute... but you snap to remembering what you're doing. You sneak slowly, low, steadily across the soft grass where the bear once stood and soon pass a corner of earth. ");
			BearToLedge.createPage(that);
			that.preparePage("You then hear the rustling of the bear below, off to find its next meal.");
			YourWorldData.Berries--;
		}
		else if (YourWorldData.Meat > 0){
			//offset the energy loss from BearToLedge
			YourWorldData.Energy+= 10;
			that.preparePage("meat! That's perfect. You take a look at the surrounding area: lots of fallen down trees and oddly large boulders. If you were to try and climb through that, the bear would surely spot you. But since it doesn't know you're here, that bear probably wouldn't mind taking a walk through some bush for a treat. You throw a small rock at a tree in the direction of your choosing, holding your "+weapon+" at the ready just in case. The bear stops what it's doing and looks up, your breath siezes as it turns and you fear it'll see you. Just then you throw the morcel of meat in the same direction as the rock, it crashes into some dried leaves on the floor and then silence. The bear gets excited and runs off to it, curious as could be. It's kind of cute... but you snap to remembering what you're doing. You sneak slowly, low, steadily across the soft grass where the bear once stood and soon pass a corner of earth. ");
			BearToLedge.createPage(that);
			that.preparePage("You then hear the rustling of the bear below, off to find its next meal.");
			YourWorldData.Meat--;
		}
		
		//cant lure bear away
		else{
			YourWorldData.Flint++;
			that.preparePage("nothing. Maybe you can find some berries or something nearby? You begin searching, but the surrounding area isn't very lively. It looks like something plowed through this earth, a landslide or something. The best you can find is some broken off flint by a boulder. That won't do. You add it to your bag and reconsider ");
			that.preparePage("confronting the bear", BearConfront):
			that.preparePage(" or ");
			that.preparePage("backtracking.", TurnAroundForest);
		}
	}
		
	
}