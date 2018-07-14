import {Node1B} from './Node1B.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

//a successful attempt at getting the guard to disregard the player. Guard will then make a decision whether to attack or not 
export class BrainMeltGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility -= 2;
		that.preparePage("The guard tells you to be quiet, but you keep on rambling. As your words spill out, they start to blend, slur, fall apart into a mush until you're eventually spewing nonsense noises. You begin spinning dizzily, your arms and legs wet noodles until you collapse to the side of the guard. ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardOne.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardOne.Hostility++;
			}
			else{
				TheWayData.GuardOne.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardOne.Hostility > 0){
			that.preparePage("But this doesn't fool her. She lifts you to your feet and is eyeing you heavily. \"Nice try scum.\" The fire hardly concerns her now next to you. Looks like you'll have to ");
			that.preparePage("fight", AttackGuardOne);
			that.preparePage(" to get out of this.");
		}
		
		//passive
		else {
			TheWayData.GuardOne.Neutralized = true;
			that.preparePage("The guard looks confused, opening her mouth to say something but is left speechless by what she's seeing. She lets out a satisfied humph, believing you got what you deserved, and turns her attention to the fire. On the ground you crawl away slowly, then get up and decide ");
			that.preparePage("what to do next.", Node1B);
		}
		
		
		
	}


}