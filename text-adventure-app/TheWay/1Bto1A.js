import {1Ato2A} from './1Ato2A.js';
import {1Ato1B} from './1Ato1B.js';
import {TheWayData} from '../GameData.js';

//
export class 1Bto1A {

	static createPage(that){
		if(TheWayData.PrisonerFree){
			TODO
		}
		
		else{
			that.preparePage("You quickly, quietly dart to your left towards a darkened corner. The man in the cell yells, \"Where are you going?!\" as you pass him. ");
			that.preparePage("You make it to a right turn, where this hallway ends and a new one begins. That one has no source of light, however, leaving you and it in the dark. You can see some kind of wall at the end, but that's it. Do you ");
			that.preparePage("walk to the end of the darkness", 1Ato2A);
			that.preparePage(" or ");
			that.preparePage(" go back?", 1Ato1B);
			}
			
		}
		
		
	}


}