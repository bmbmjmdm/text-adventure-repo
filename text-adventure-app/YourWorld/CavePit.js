import {CaveExit} from './CaveExit.js';
import {YourWorldData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';

//if the player has vision, they'll climb into the pit using vines if they have them, the badass woman if she's there, or just jumping 
//if they jump, they're trapped, game over 
//if they dont have vision, they'll fall in for damage. They can then use the vines or woman to escape, or die if they have neither
//in the pit is a skeleton and some gold, water, flint, and sharp stones 
export class CavePit {

	static createPage(that){
		//vision
		if(YourWorldData.CaveTorch){
			//BA helps user down
			if(YourWorldData.BadassGal){
				that.preparePage("The woman lies down on the ground by the edge and motions for you to do the same. You follow her instructions, \"Ok, now hang off the edge by your arms... Ok now take my hands, there you go, and a little bit lower, little bit more, are your feet touching?\" They are, you feel the water and a bit of panic strikes. If this is too deep, will she be able to get you out? Oh shit. Oh shit oh- ok your feet hit the ground. Phew. \"Ok, I'll wait here.\" ");
			}
			
			//user uses vine to get down
			else if (YourWorldData.Vines > 0){
				that.preparePage("You tie a vine to a stalagmite and tug on it: seems steardy. You lower yourself over the side, shimmying, scraping feet, inching down the wall slowly. Eventually your feet touch the water, you continue, they're submerged, up to the shin now, and then they touch ground. You can stand here, nice! ");
			}
			
			//user jumps down
			else{
				that.preparePage("You grab the ledge with your hands and lower yourself as far as your arms will go. You then let go and plop into some shallow water up to your shins. Nice, solid ground. ");
			}
			
			this.findSupplies(that);
			
			//BA helps them out of hole
			if(YourWorldData.BadassGal){
				that.preparePage("\"You just about done down there?\" Your companion calls down. Soon she's reaching a hand down and you're jumping to grab her, successfully! You ");
				that.preparePage("make your way out.", CaveExit);
			}
			
			//user climbs vine out 
			else if (YourWorldData.Vines > 0){
				YourWorldData.Vines --;
				that.preparePage("You thank your lucky stars this pit wasn't filled with more water as you grab the vine, lean back and start to climb. Time to ");
				that.preparePage("make your way out.", CaveExit);
			}
			
			//user dies in hole
			else{
				this.dieInHole(that);
			}
		}
		
		//no vision
		else{
			YourWorldData.Health -= 2;
			
			that.preparePage("Stumbling through the darkness, you inch your way further and further into the belly of darkness. Into the abyss of echoing ambiance and terrifying unknown. The dripping draws closer and the- your foot steps onto nothingness, air, falls clear through where the floor should be and suddenly you're falling. After nearly a second you crash into a foot of water and mounds of stone, some sharp, all hard, taking 2 damage. ");
			
			//dead
			if(YourWorldData.Health <= 0){
				that.preparePage("Your back lands on a jagged stone and snaps something vital. You... you can't move. The darkness watches paitiently");
				that.preparePage("...", HomePage);
			}
			
			//alive for now
			else{
			
				this.findSupplies(that);
			
				//BA helps user out
				if(YourWorldData.BadassGal){
					that.preparePage("\"You alright down there?\" The old woman yells down at you. Apparently she had been a bit more cautious, or at least aware of the fact that you plummeted before her. You confirm you're alive and ask for some help. Soon, you're jumping and grabbing a much needed hand which pulls you out with a vigor. It seems like this pit was the end of the path, guess it's time to ");
					that.preparePage("turn around.", CaveExit);
				}
			
				//user uses vine to get out
				else if (YourWorldData.Vines > 0){
					YourWorldData.Vines --;
					that.preparePage("You feel around the pit for a way out, but find nothing. Your heart starts up, this is it, this is- no, think. You search your bag for something, anything, and start pulling out the vines you found before. Tying them together you make a lasso and do your best to find the ledge you fell off of. Echolocation serves you well as you smack the vines against solid wall several times. Eventually you find the ledge and after a few good throws the vine catches! Thank God for stalagmites. You climb out quickly, steadily, carefuly, and eventually make it back to where you were. You kiss the salty ground and decide to finally ");
					that.preparePage("turn around, ", CaveExit);
					that.preparePage("the path ends here anyway.");
				}
			
				//user dies
				else{
					this.dieInHole(that);
				}
				
			}
		}
 
	}
	
	
	
	static findSupplies(that){
		YourWorldData.Health += 3;
		YourWorldData.Water ++;
		YourWorldData.Flint ++;
		YourWorldData.SharpRocks ++;
		
		that.preparePage("You start feeling around at the various surfaces in the water. One thing becomes blindingly apparent: there's a skeleton in here with you. Looks like someone was doing exactly what you're doing when... you try not to think about it. You quickly stop fondling the long-gone corpse and feel around elsewhere. There's a bunch of rocks in here, and the steady drip from above is now dripping on your head. There must be a leak or else this hole would be filled. Hm. Regardless, some of these rocks seem useful. One is definitely flint, another jagged like a cruel blade, and another... oddly smooth. Almost like a... like a gem. Woah. As you press the warmth of your hand against its chilled surface, the gem begins to glow. Feint at first, but soon a blinding radiance flashes before going dark again. The many cuts and bruises around your body dull as you feel refreshed, invigorated, like you could climb a mountain! You gain 3 health and now have "+YourWorldData.Health+". After pocketing everything worth while, you take out your waterskin and fill it a little with the dripping water. You don't exactly want to dip it in the pool steeping with a dead body. ");
	}
	
	
	static dieInHole(that){
		that.preparePage("You start feeling around the sides of the pit. Ok, they're pretty solid, and there's no holes, and you jump around but the wall is too high to reach the top of. Fuck. Shit. What do you do? The dripping drops smack your head like clockwork. You slowly grow insane, begging your skeleton friend to tell you a way out. But there is none. ");
		that.preparePage("There is none.", HomePage);
	}



static getName(){ return "CavePit"; }
}