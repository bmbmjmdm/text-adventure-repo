
import {Node4A} from './Node4A';
import {TheWayData} from '../GameData.js';

//searches node 4A for the gold it has
export class Search4A {

	static createPage(that){
		
		TheWayData.Searched.Node4A = true;
		TheWayData.Gold += 1;
		that.preparePage("You slowly lower yourself to your knees, then begin to feel around the floor. It feels sticky in some places, dirty in others. There's some kind of furnishing that seems to have been knocked around and ripped... and a sword on the ground. You continue feeling around until you come across some fabric- oh those are pants... on a leg. You feel about the leg and realize it's attached to a body (thank god), but the person doesn't respond. You can smell rot and feel more and more stickyness. As your hands glaze over what feels like a fatal wound, you decide to stop. Pulling your hands back, one catches on the person's pocket...it'd be a shame not to check now. Reaching inside, you find a thick coin, and while taking it can smell the remains of whoever this is on your hands. You ");
		that.preparePage("take the gold and stand back up.", Node4A);

		
		
	}


}