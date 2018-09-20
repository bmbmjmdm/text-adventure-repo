import {Node1B} from './Node1B';
import {TheWayData} from '../GameData.js';

//successfully pickpocket guard one, gaining her keys
export class SuccessPickPocketGuardOne {

	static createPage(that){
		TheWayData.HasKeys = true;
		TheWayData.GuardOne.Pickpocket = true;
		
		that.preparePage("The guard is running from your cell to retrieve water when you spot your mark: a chain of keys dangling from her hip. As she runs past you again, now with a barely-filled bucket, you trail her, close, and just as she steps into the cell you reach your hand out and relieve her of the keys swinging behind her. You ");
		that.preparePage("slink back into darkness,", Node1B);
		that.preparePage(" successfull.");

		
	}



static getName(){ return "SuccessPickPocketGuardOne"; }
}