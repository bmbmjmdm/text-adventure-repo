import {SpeakGuardOne} from './SpeakGuardOne.js';
import {RunGuardOne} from './RunGuardOne.js';
import {AmbushGuardOne} from './AmbushGuardOne.js';
import {FreePrisonerOne} from './FreePrisonerOne.js';
import {ResetTheWayData} from '../GameData.js';
import {ARoomData} from '../GameData.js';
import {TheWayData} from '../GameData.js';

export class TheWay {

	static createPage(that){
		ResetTheWayData();
		that.preparePage("As you dust soot off yourself, the crackling fire behind you illuminates part of the hallway. You're standing at an intersection, a long hallway extends in front of you and the one you're currently in continues both to your right and left. A figure is walking towards you down the long hallway. ");
		if(ARoomData.RefusedDeal){
			that.preparePage("A man behind bars to your left screams out into the hallway, \"Down here! Down here! A prisoner's escaping!\" The figure in the distance yells out, \"You there! Wait where you are.\" And continues running towards you. ");
		}
		else{
			that.preparePage("A man behind bars to your left whispers out into the hallway, \"Hey, let me out. Come on, hurry. I can guide us out of here.\" The figure in the distance is walking at a steadfast pace. ");
		}
		
		if(TheWayData.HasWeapon.Glass){
			that.preparePage("You look at the shiv of glass in your hand and consider your options. ");
		}
		if(TheWayData.Health < 7){
			that.preparePage("The burns and cuts and bruises decorating your body worry you, though at the same time it does make you look pitiful. ");
		}
		
		that.preparePage("Maybe this guard will be sympathetic? After all you did almost burn to death. Besides they have bigger problems on their hands: that fire is still raging. Still, there's not too much you can do. You could ");
		that.preparePage("Confront the guard. ", SpeakGuardOne);
		that.preparePage("They seem to be getting pretty close anyway and maybe they'll be reasonable. Or maybe you can take them. On the other hand there's always ");
		that.preparePage("run", RunGuardOne);
		that.preparePage("ning, a favorite among the faster. "
		
		if(ARoomData.RefusedDeal){
			that.preparePage("Unfortunately due to your friend's whooping and hollering, it doesn't look like you can do much else. The guard is already running and you have a split second to decide.");
		}
		else{
			that.preparePage("Actually, it doesn't look like the guard can yet make out what's happening at this distance, so you could ");
			that.preparePage("stage an ambush by hiding behind the corner. ", AmbushGuardOne);
			that.preparePage("High risk, high reward. Last is your cohert's suggestion: you could ");
			that.preparePage("try to free him.", FreePrisonerOne);
		}
		
	}


}