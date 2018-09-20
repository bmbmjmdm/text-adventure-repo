import {BearBlock} from './BearBlock.js';
import {BearSwing} from './BearSwing.js';
import {YourWorldData} from '../GameData.js';

//attack the bear for a free attack
export class BearSurprise {

	static createPage(that){
		var damage = 2;
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
			damage = 3;
		}
		
		YourWorldData.BearHealth -= damage;
		
		that.preparePage("You sneak up to the bear as best you can, treading lightly on light grass, watching the dirt for sticks and acorns, watching the bear for anything alarming. Luckily, it seems distracted by a bush, prodding its head in and biting at something. You manage to get within mere feet of it before it starts pulling it's head out, alert to something, and you immediately bring your "+weapon+" down just as its eyes see it. With a chop you deal "+damage+" damage and open a wound through the thicket of fur and muscle. It bleeds crimson through the deep brown on its shoulder and lets out a roar. ");
		that.preparePage("The bear retaliates by twisting around and now teeth and claw descend upon you. Do you try to ");
		that.preparePage("block", BearBlock);
		that.preparePage(" with your "+weapon+" or ");
		that.preparePage("swing it?", BearSwing);
		
	}
		
	

static getName(){ return "BearSurprise"; }
}