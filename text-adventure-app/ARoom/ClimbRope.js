
import {ARoomData, GlobalData} from '../GameData.js';
import {Levels} from '../Levels.js';

export class ClimbRope {

	static createPage(that){
		that.state.toShowText.push({text:"As the floor begins to disappear through grey and red chaos, you climb. Higher and higher, deeper into the thicket of smoke, you climb as your life depends on it. You squeeze through the opening just barely and come tumbling down on the other side, ", clickable:false});
		
		
		if(ARoomData.ThrewGlass){
			if(ARoomData.ThrewBlanket){
				if(ARoomData.GlassSafe){
					that.state.toShowText.push({text:"landing on a not-so-soft, but helpful blanket. You wheeze and clench your burnt hands, then remember what else you threw out here. You reach under the blanket and pull out a shard of glass no larger than your thumb. It's a good thing you threw the blanket on top of that! ", clickable:false});	
				}
				else{
					ARoomData.Health = ARoomData.Health - 2;
					that.state.toShowText.push({text:"landing on a blanket with a hand-sized piece of glass on it. The fall was definitely cushioned, but nothing stops the glass from digging into your leg, dealing 2 damage. As you wheeze and clench your burnt hands, you feel you have about "+ARoomData.Health+" health remaining. You pick up the glass, at least you have that. ", clickable:false});
				}
			}
			else{
				ARoomData.Health = ARoomData.Health - 3;
				that.state.toShowText.push({text:"landing on shards of glass and a hard floor. You take 3 damage, leaving you with "+ARoomData.Health+" health. As you wheeze and pick glass from your leg, you find a piece about the size of your thumb and decide to keep it, so at least you have that. ", clickable:false});
			}
		}
		
		else if(ARoomData.ThrewBlanket){
			that.state.toShowText.push({text:"landing on a not-so-soft, but helpful blanket. You wheeze and clench your burnt hands, knowing things could've been much worse. ", clickable:false});	
		}
		else{
			ARoomData.Health = ARoomData.Health - 1;
			that.state.toShowText.push({text:"landing on a hard floor that bruises your left leg deep. You take 1 damage and now have "+ARoomData.Health+" health. You wheeze and feel a dull pain through your whole body, but at least your alive. ", clickable:false});
		}
		that.state.toShowText.push({text:"It's dark out here, the only visibility is from the room ungulfed with flames behind you, light peering through the bars on the door. It illuminates something in the distance. Someone. Who is that?", clickable:false});

		if(ARoomData.MadeDeal || ARoomData.MadeBetterDeal){
			that.state.toShowText.push({text:" A voice comes not from them, but from your left. It's the same one you heard before, \"Hey! Hey let me out of here! Quick! We had a deal!\" You see a door next to your own, where the voice is clearly coming from. At the same time, you can see the figure in the distance approaching. ", clickable:false});
			that.state.toShowText.push({text:"You don't have much time.", clickable:true, nextPage:Levels});
		}
		else if (ARoomData.RefusedDeal){
			that.state.toShowText.push({text:" A familiar voice begins yelling from the left of you, \"Guards! Guards! Down here! Someone's escaping!\" The other prisoner must not be happy about the deal you refused. The figure in the distance starts running; ", clickable:false});
			that.state.toShowText.push({text:"You don't have much time.", clickable:true, nextPage:Levels});
		}
		else{
			that.state.toShowText.push({text:" A voice comes not from them, but from your left. \"Hey! Hey let me out of here! Quick! Come on, you can't just leave me here!\" You see a door next to your own, where the voice is clearly coming from. It must be another prisoner. At the same time, you can see the figure in the distance approaching. ", clickable:false});
			that.state.toShowText.push({text:"You don't have much time.", clickable:true, nextPage:Levels});
		}

		GlobalData.Story2Unlocked = true;
		
		that.typeAnimation();
	}


}