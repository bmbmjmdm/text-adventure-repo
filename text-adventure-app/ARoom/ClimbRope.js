
import {ARoomData, GlobalData} from '../GameData.js';
import {Levels} from '../Levels.js';

export class ClimbRope {

	static createPage(that){
		
		
		if(ARoomData.ThrewGlass){
			if(ARoomData.ThrewBlanket){
				if(ARoomData.GlassSafe){
				}
				else{
					ARoomData.Health = ARoomData.Health - 2;
				}
			}
			else{
				ARoomData.Health = ARoomData.Health - 3;
			}
		}
		
		else if(ARoomData.ThrewBlanket){
		}
		else{
			ARoomData.Health = ARoomData.Health - 1;
		}

		if(ARoomData.MadeDeal || ARoomData.MadeBetterDeal){
		}
		else if (ARoomData.RefusedDeal){
		}
		else{
		}

		GlobalData.Story2Unlocked = true;
		
		that.typeAnimation();
	}


}