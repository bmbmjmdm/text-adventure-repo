import {1Bto1C} from './1Bto1C.js';
import {1Bto2B} from './1Bto2B.js';
import {TalkPrisoner1B} from './TalkPrisoner1B.js';
import {TheWayData} from '../GameData.js';

//
export class 1Ato1B {

	static createPage(that){
		//can only do this once the guard is gone, so don't worry about her
		if(TheWayData.PrisonerFree){
			TODO
		}
		
		else{
			that.preparePage("You walk to the front of your burning cell, with flames leaking out around the sides of it. The fire is still small compared to the size of this building. ");
			if(TheWayData.GuardOne.Health <= 0){
				that.preparePage("");
				TODO death description
			}
			that.preparePage("The prisoner in the cell next to yours yells out, \"Hey man! ");
			that.preparePage("Help",);
			that.preparePage(" me, please!\" as you look around. If you ");
			that.preparePage("keep going straight,", 1Bto1C);
			that.preparePage(" you can see the hallway turns left up ahead. There's a few strips of light on the floor as well. If instead of going straight you ");
			that.preparePage("take a left here,", 1Bto2B);
			that.preparePage(" you can see the hallway extends quite a way, made visible of similar thin strips of light on the floor down the ways."); 
		}
			
		
		
		
	}


}