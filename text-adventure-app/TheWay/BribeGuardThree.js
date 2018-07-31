import {Node6A} from './Node6A.js';
import {AttackGuardThree} from './AttackGuardThree.js';
import {TheWayData} from '../GameData.js';

//bribe guard three, auto success
export class BribeGuardThree {

	static createPage(that){
		TheWayData.Gold--;
		TheWayData.GuardThree.Hostility -= 2;
		
		that.preparePage("You take out some coin and drop it on the floor in front of you. You explain that you're going to pass through now. ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardThree.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardThree.Hostility++;
			}
			else{
				TheWayData.GuardThree.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardThree.Hostility > 0){
			that.preparePage("\"I-I don't think so... criminal scum!\" The young man looks offended and ready to ");
			that.preparePage("fight,", AttackGuardThree);
			that.preparePage(" though timid still.");
		}
		
		//passive
		else{
			TheWayData.GuardThree.Neutralized = true; 
			that.preparePage("The young man is speechless, holding his sword towards you as he bends down to pick up the gold. He examines it, then you. Eyes wide, the young man puts his sword away and goes about his business, and trying to forget you're there. This leaves you to do what you will in this ");
			that.preparePage("room.", Node6A);
		}
	}


}