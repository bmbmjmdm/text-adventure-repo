import {ARoomData} from '../GameData.js';
import {Escape} from './Escape.js';

//the player has thrown the rope through the window and is now climbing out, they escape and finish the level
export class ClimbRope {

	static createPage(that){
		that.preparePage("As the floor begins to disappear through grey and red chaos, you climb. Higher and higher, deeper into the thicket of smoke, you climb as your life depends on it. You squeeze through the opening just barely and come tumbling down on the other side, ");
		
		
		if(ARoomData.ThrewGlass){
			if(ARoomData.ThrewBlanket){
				if(ARoomData.GlassSafe){
					that.preparePage("landing on a not-so-soft, but helpful blanket. You wheeze and clench your aching hands, then remember what else you threw out here. You reach under the blanket and pull out a shard of glass no larger than your thumb. It's a good thing you threw the blanket on top of that! ");	
				}
				else{
					ARoomData.Health = ARoomData.Health - 2;
					that.preparePage("landing on a blanket with a hand-sized piece of glass on it. The fall was definitely cushioned, but nothing stops the glass from digging into your leg, dealing 2 damage. As you wheeze and clench your aching hands, you feel you have about "+ARoomData.Health+" health remaining. You pick up the glass, so at least you have that. ");
				}
			}
			else{
				ARoomData.Health = ARoomData.Health - 3;
				that.preparePage("landing on shards of glass and a hard floor. You take 3 damage, leaving you with "+ARoomData.Health+" health. As you wheeze and pick glass from your leg, you find a piece about the size of your thumb and decide to keep it, so at least you have that. ");
			}
		}
		
		else if(ARoomData.ThrewBlanket){
			that.preparePage("landing on a not-so-soft, but helpful blanket. You wheeze and clench your aching hands, knowing things could've been much worse. ");	
		}
		else{
			ARoomData.Health = ARoomData.Health - 1;
			that.preparePage("landing on a hard floor that bruises your left leg deep. You take 1 damage and now have "+ARoomData.Health+" health. You wheeze and feel a dull pain through your whole body, but at least you're alive. ");
		}
		that.preparePage("It's dark out here, the only visibility is from the room ungulfed with flames behind you, light peering through the bars on the door. It illuminates something in the distance. Someone. Who is that?");

		if(ARoomData.MadeDeal || ARoomData.MadeBetterDeal){
			that.preparePage(" A voice comes not from them, but from your left. It's the same one you heard before, \"Hey! Hey let me out of here! Quick! We had a deal!\" You see a door next to your own, where the voice is clearly coming from. At the same time, you can see the figure in the distance approaching. ");
			that.preparePage("You don't have much time.", Escape);
		}
		else if (ARoomData.RefusedDeal){
			that.preparePage(" A familiar voice begins yelling from the left of you, \"Guards! Guards! Down here! Someone's escaping!\" The other prisoner must not be happy about the deal you refused. The figure in the distance starts running; ");
			that.preparePage("you don't have much time.", Escape);
		}
		else{
			that.preparePage(" A voice comes not from them, but from your left. \"Hey! Hey let me out of here! Quick! Come on, you can't just leave me here!\" You see a door next to your own, where the voice is clearly coming from. It must be another prisoner. At the same time, you can see the figure in the distance approaching. ");
			that.preparePage("You don't have much time.", Escape);
		}
		
		
	}



static getName(){ return "ClimbRope"; }
}