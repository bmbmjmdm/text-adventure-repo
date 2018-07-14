import {2Ato1A} from './2Ato1A.js';

import {TheWayData} from '../GameData.js';

//
export class 1Ato2A {

	static createPage(that){
		if(TheWayData.PrisonerFree){
			TODO
		}
		
		else{
			if(TheWayData.HasKeys){
				TODO
			}
			
			//must turn around
			else{
				that.preparePage("You walk to the end of the hallway, using vague blurs to guide you to a vague surface. Your extended hands bump into a door. You try the handle but the door just shakes, indicating it's locked. Without the keys you'll have to ");
				that.preparePage("turn around.", 2Ato1A);
			}
			
		}
		
		
	}


}