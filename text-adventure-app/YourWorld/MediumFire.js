import {Camping} from './Camping.js';

//the player makes a medium fire to restore some energy. uses flint if they have it or 2x kindling
export class MediumFire {

	static createPage(that){
		YourWorldData.Energy += 20;
		var hasFlint = false;
		
		if(YourWorldData.Flint > 0){
			hasFlint = true;
			YourWorldData.Kindling --;
			YourWorldData.Flint --;
		}
		else{
			YourWorldData.Kindling -= 2;
		}
		
		YourWorldData.Campfire = true;
		
		that.preparePage("You assemble some twigs and shavings into a small tipi-shape. It's leaning, and could use some stronger branches, but that's what you have. ");
		if(hasFlint){
			that.preparePage("You strike a rock against your sliver of flint and sparks spray into the pit. A few bangs later and the flint snaps, but with it, a flame is birthed and begins to consume the pyre from the bottom up. ");
		}
		else{
			that.preparePage("Nearly an hour goes by as you rub twigs together, blowing ever so gently to scatter the sparks among the shavings. Eventually things begin to glow, then fire is born, and smoke arises as ashes fall. ");
		}
		
		that.preparePage("You sit by the fire for a few moments admiring your work, appreciating the warmth, the light. It may not be much, but a little goes a long way out ");
		that.preparePage("here.", Camping);
		that.preparePage(" A warm soul may be just what you need.");
		
			
	}


}