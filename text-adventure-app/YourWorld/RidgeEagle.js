import {RidgeAttack} from './RidgeAttack.js';
import {RidgeDoff} from './RidgeDoff.js';
import {YourWorldData} from '../GameData.js';

//Eagle attacks player as a storm begins, they must choose wether to fight or release pack
export class RidgeEagle {

	static createPage(that){
		that.preparePage("As you hurry down the ridge for some form of shelter, you feel their rage closing in; you can't see more than a foot ahead at this point and the speed of the fog is terrifying. A wind threatens to push you off the ridge, gust crumbling fragile rock and you cling to the mountain with hands and knees tight. You squint your eyes, wanting to see something reassuring but there's nothing to see. Everything is smoky chaos and you're just trying to hold on for dear life. In all of this you feel a sudden tug on your back, your bag is being pulled and you feel a strange scrape on your shoulder. In a split second you recognize it as a talon and don't have time to wait. Do you ");
		that.preparePage("try to doff your bag", RidgeDoff);
		that.preparePage(" so the bird can take it? Or do you ");
		that.preparePage("try to grab the bird?", RidgeAttack); 
		
	}


static getName(){ return "RidgeEagle"; }
}