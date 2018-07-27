
import {Node6A} from './Node6A';
import {TheWayData} from '../GameData.js';

//searches node 6A for the nothing it has
export class Search6A {

	static createPage(that){
		
		TheWayData.Searched.Node6A = true;
		
		that.preparePage("You begin lining your hands on the benches, shelves, doorframes. You inspect spects of dirt and interogate ants. ");
		//guard's alive, comments 
		if(TheWayData.GuardThree.Health > 0 ){
			that.preparePage("The guard peeks over his shoulder every now and then curious as to what you're doing. Maybe an inspection? ");
		}
		//guard's dead, silent
		else{
			that.preparePage("You search almost every inch... avoiding the young man on the floor. ");
		}
		
		that.preparePage("It quickly becomes aparent that the only thing of value in this room are the swords. Yours is looking decent enough though, so you pass. With a heavy heart, you ");
		that.preparePage("give up searching.", Node6A);

	}


}