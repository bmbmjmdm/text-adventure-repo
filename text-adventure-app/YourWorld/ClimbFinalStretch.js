import {ClimbSuccess} from './ClimbSuccess.js';
import {ClimbFailure} from './ClimbFailure.js';
import {YourWorldData} from '../GameData.js';

//the last part of the climb, the jump
export class ClimbFinalStretch {

	static createPage(that){
		that.preparePage("Another few feet, you're almost there! Just before getting to the top there's a point where- oh shit- there's nothing else to grab! ");
		if(YourWorldData.ClimbVine){
			that.preparePage("You want to use your vine but don't trust it with all of your weight. It'll help if you fall but... ");
		}
		
		that.preparePage("It looks like you'll have to... have to jump. Yup, just jump and throw your hand over the top and hope it holds. Your feet have a good stance at least, or one of them does. The other one...not so great. Jeez I wish I could say this looks good, but really it comes down to how much you struggled on the way up. You're just going to have to bend your knees and pray for the best. Ready or not: one...two...three... ")	
		
		if(YourWorldData.ClimbCorrect >= 2){
			that.preparePage("JUMP!", ClimbSuccess);
		}
		else{
			that.preparePage("JUMP!", ClimbFailure);
		}
 
	}


}

