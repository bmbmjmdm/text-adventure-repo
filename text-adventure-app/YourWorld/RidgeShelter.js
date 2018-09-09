import {Camping} from './Camping.js';
import {RidgeShelterContinue} from './RidgeShelterContinue.js';
import {RidgeSearch} from './RidgeSearch.js';
import {YourWorldData} from '../GameData.js';

//Continue along the ridge after encountering eagle, finding shelter from the storm brewing 
export class RidgeShelter {

	static createPage(that){
		YourWorldData.Energy -= 10;
		YourWorldData.CampContinue = RidgeShelterContinue;
		that.preparePage("You stand and jog as the wind dies out for a few minutes, then drop back to your knees when it begins again. You repeat this as the haze whips and cackles, wicked and warning. You start to feel a mist in the air and know what's coming next. A freezing rain falls drop by drop, slow at first. By the time you realize the slushy chill it carries, the air is filled with pellets of hail and wet. You rush along the ridge as fast as the wind will let you, though are quickly freezing up. You don't have the clothes for this, the energy, anything. Why did you come up here? You'll never last the- just then you come up to a sudden wall. With the thicket of cloud choking your vision, you can't make out what it is. You have your suspicion though: the horn. This is the last stretch, the final hurdle, the ultimate ascent. But you can't make it now. This storm is enough to kill you and climbing the side of a winding wall would be suicide. Your wits are about you though and you begin circling the base of the wall, which the ridge stretches out to accomidate a full path around. You find a slight cove blocked off from some of the percipitation, burrowing into stone. You take shelter and try to dry off, but it seems impossible. Hours go by, you try staying warm by any means necessary but the icy wind howls your fate. At some point, you realize the storm won't let up and you'll probably spend the night here. The only question left: do you ");
		that.preparePage("brave the storm in search of tinder", RidgeSearch);
		that.preparePage(" or ");
		that.preparePage("setup camp now?", Camping);
		
		//allies huddle for warmth
		if(YourWorldData.Allies >0) {
			if(YourWorldData.Allies>1){
				that.preparePage(" Your friends huddle around you, everyone sharing their heat, shivering with fear.");
			}
			else{
				that.preparePage(" Your friend huddles with you, sharing their heat, shivering with fear.");
			}
			
			if(YourWorldData.Son){
				that.preparePage(" The little boy speaks in whimpers, \"C-c-cold.\"");
				
				if(YourWorldData.Mother){
					that.preparePage(" His mother smiles, \"That's right, Jim-Tim, c-cold.\" She pulls her son in closer and holds his hair tight.");
				}
			}
			
			if(YourWorldData.FoulGuy){
				that.preparePage(" Somehow you don't smell the pudgy man despite his body pressed against yours. You're actually happy he let himself go, more insulation.");
			}
			
		}
	}

}


