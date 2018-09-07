//import {} from './.js';
import {Levels} from '../HomePage/Levels.js';
import {YourWorldData} from '../GameData.js';

//Try to balance on the ridge, leading to a minor fall and damage 
export class RidgeBalance {

	static createPage(that){
		YourWorldData.Energy -= 10; 
		YourWorldData.Health --; 
	}

}

