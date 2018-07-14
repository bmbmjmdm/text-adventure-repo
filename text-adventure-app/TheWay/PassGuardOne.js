import {1Bto1A} from './1Bto1A.js';
import {1Bto1C} from './1Bto1C.js';
import {TalkPrisoner1B} from './TalkPrisoner1B.js';
import {TheWayData} from '../GameData.js';

//Diplomacy challenge succeeded! Now move on down one of the hallways, unfortunately player cannot release the cellmate 
export class PassGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Neutralized = true;
		//make guard leave as you're "making your escape", fetch water or something
		
	}


}