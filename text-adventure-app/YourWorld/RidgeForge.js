import {RidgeEagle} from './RidgeEagle.js';
import {YourWorldData} from '../GameData.js';

//Spend time and energy making a path on the ridge slope 
export class RidgeForge {

	static createPage(that){
		YourWorldData.Energy -= 20; 
		that.preparePage("You begin throwing rocks against the left slope of the ridge. A clumb of dirt and corresponding stones tumble down the mountain. Once the surface has been pelted clean, you begin forging. Slowly, you press the earth at the edge of the ridge. Further and further you flatten it, making a safer path. ");
		
		//allies will help 
		if(YourWorldData.Allies > 0){
			that.preparePage("You take turns with your party, everyone contributing little by little. ");
			if(YourWorldData.SadGal){
				that.preparePage("For some reason it looks like the girl, who's morose most of the time, is now plowing away at the dirt somewhat amused. She peaks up every now and then, watching the others work and stomping the ground dutifully when it's her turn. ");
			}
		}
		
		that.preparePage("During this time the clouds overhead turn dark, passive aggressive and muttering to each other in grumbles that shake the sky gently. You quicken your pace, stomping and scooping in a fury. It's tiring but you pass the formerly-narrow stretch without any accident. Now, though, the clouds' temper has spread all around you. ");
		
		RidgeEagle.createPage(that);
	}

}

