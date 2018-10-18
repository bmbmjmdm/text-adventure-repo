import {RockyPath} from './RockyPath.js';
import {ForestPath} from './ForestPath.js';
import {YourWorldData} from '../GameData.js';

//player has less than 10 health, allowing them to reach a hidden crack to gain health 
export class CreasePath {

	static createPage(that){
		var healing = 10 - YourWorldData.Health;
		healing = Math.min(healing, 3);
		YourWorldData.Health += healing;
		
		that.preparePage("You sift through tall grass and mud as the crease opens up to you; the path winds down a wedge made by overlapping stones and erosion. This trail seems to have been beaten by some animal, though these tracks you've never seen before. As the path becomes too narrow for you to continue, turning into a crack in the earth, it leaves you wondering how this animal made it through. None of this makes much sense, least of all the dull glow from further in. You press your face against the opening, trying to get a better look, when a cool earthy smell awakens your senses. You squint, sniff, strain to see what could possibly be making that glow. Breathing the odd, pleasant aroma and gazing into the light, you suddenly feel... cleansed, regaining "+healing+" health, wondering what just happened as the wounds around your body dull. The light then goes out, darkness, and after a few minutes of nothing more happening, you leave. With "+YourWorldData.Health+" health total, you return through the open field to where this trail began. The mountain still stands tall, unwavering, rough and rigid on one face and furry, shagged with green on another. Do you take the ");
		that.preparePage("rocky path", RockyPath);
		that.preparePage(" or go ");
		that.preparePage("through the forest?", ForestPath);
	}



static getName(){ return "CreasePath"; }
}