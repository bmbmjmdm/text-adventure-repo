import {RockyFlatContinue} from './RockyFlatContinue.js';
import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//set up camp for the night at RockyFlat
export class RockyFlatCamp {

	static createPage(that){
		YourWorldData.CampContinue = RockyFlatContinue;
		
		that.preparePage("You clear a patch of ground that looks as not-lumpy as possible. The stars begin peaking out from the sky as distant planets revolve. What was once a hot day turns chilly, frigid, the wind beating the side of the mountain endlessly. But at least you're free. ");
		if(YourWorldData.SadGal){
			that.preparePage("The young woman who had spent the day cringing and stiffling sobs sits next to you. There's dried tears on her face and a far away look in her eyes. \"Thanks.\" Her voice is cracked and quiet, like she's not even sure it still works. She hugs her legs and looks up at the sky. \"Why'd you do it?\" You wait for her to elaborate, but her eyes are fixed. You ask what she means. \"Why save me?\" It's a difficult question to answer, or maybe not, either way you keep it short. She turns away from you. \"Thanks. I guess.\" With that, she empties her pockets and helps setup camp. ");
		}
		Camping.createPage(that);
		
	}


}