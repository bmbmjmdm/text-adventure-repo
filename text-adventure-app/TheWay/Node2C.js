import {Node2B} from './Node2B.js';
import {Node3A} from './Node4C.js';
import {Node1B} from './Node1B.js';
import {TheWayData} from '../GameData.js';

//make prisoner stop player from running right if they're on bad terms and the guard is there 
//also make this node have differently-looking walls. it should be an obvious post, thus signalling this is the right way as well as there's a guard inside 
export class Node2C {

	static createPage(that){
		
		//coming from 1B
		if(TheWayData.LastNode == '1B'){
			
			if(){
			}
				
			}
			
			//prisoner stops them 
			else{
				
			}
			
		}
		
		else if(TheWayData.LastNode == '2B'){
			TODO
		}
		
		else if(TheWayData.LastNode == '4C'){
			TODO
		}
		
		
		//neutralize guard one as she is dealing with the fire
		if(TheWayData.GuardOne.Health > 0){
			TheWayData.GuardOne.Neutralized = true;
		}
		
		that.preparePage("");
		
		TheWayData.LastNode = '2C';
	}


}