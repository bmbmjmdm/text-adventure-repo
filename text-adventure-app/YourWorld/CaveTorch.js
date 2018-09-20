import {CaveKill} from './CaveKill.js';
import {CaveSneak} from './CaveSneak.js';
import {CaveExit} from './CaveExit.js';
import {YourWorldData} from '../GameData.js';

//light a torch in the cave, revealing bats ahead
export class CaveTorch {

	static createPage(that){
		YourWorldData.Kindling --;
		YourWorldData.CaveTorch = true;
		
		that.preparePage("You patch some sticks and leaves, bark and moss together to form a makeshift torch. It won't last long and its light only spreads a foot or so, but that's enough. You watch glimmering stone guide you towards a corridor, the damp, dank musk of soil and salt inviting you in. Your torch extends ahead of you as you crawl, and soon the walls begin to widen and the ceiling lifts high. You're in larger chamber now, though most of it's dark. You step forward cautiously, the distant drips timing your footfall. Soon, you see... something move in the blackness. Like darkness itself is alive. You freeze. You wait... ... It moves again, then twists, shifts, and you can make out two tiny, furry ears dangling upside down. You can only guess what that is: a bat. You don't see any others but it's impossible to tell in here. You could try and ");
		that.preparePage("kill it,", CaveKill);
		that.preparePage(" maybe even gather some meat for later, but that's risky. ");
		that.preparePage("Sneaking past", CaveSneak);
		that.preparePage(" looks possible given how large this chamber is, but who knows if you'll just run into more bats? Or if you want, ");
		that.preparePage("turn around", CaveExit);
		that.preparePage(" now.");
 
	}



static getName(){ return "CaveTorch"; }
}