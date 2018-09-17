import {TheWayData} from '../GameData.js';
import {Leave} from './Leave.js';
import {BuyAxe} from './BuyAxe.js';
import {FreePrisonersEnd} from './FreePrisonersEnd.js';
import {Parry1GuardFour} from './Parry1GuardFour.js';
import {Strike1GuardFour} from './Strike1GuardFour.js';
import {Grapple1GuardFour} from './Grapple1GuardFour.js';


//Player angers guardfour by not siding with god
export class WeDefine {

	static createPage(that){
		TheWayData.GuardFour.Hostility += 2;
		
		that.preparePage("As you finish your explanation, the guard is shaking his head. \"Y'think you're so smart, eh? Think y'know more than God!");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardFour.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardFour.Hostility++;
			}
			else{
				TheWayData.GuardFour.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardFour.Hostility > 0){
			that.preparePage("Well God'll be havin' ye back in 'at cell in no time. Have at ye!\" He raises the blood-stained axe and begins pivoting around you. The other guard follows suit, taking the other side, and soon you're flanked! With two people trying to claim your head, any mistake could be fatal. What do you do? ");
			if(!TheWayData.HasWeapon.Sword){
				TheWayData.HasWeapon.Sword = true;
				that.preparePage("First thing's first, you pick up the sword at your feet as the guards get into position. Luckily they're being cautious so you have time to do so, on the other hand their caution means these guards are well trained. Now let's se... ");
			}
			
			that.preparePage("I hope you learned how to swordfight by now, because both these blokes are gonna be coming at you simultaniously. The one with the sword is cautiously waiting, watching you. The axe-barer hoists his blade into the air... Do you ");
			that.preparePage("parry", Parry1GuardFour);
			that.preparePage(", ");
			that.preparePage("grapple", Grapple1GuardFour);
			that.preparePage(", or ");
			that.preparePage("strike?", Strike1GuardFour);
		}
		
		//passive
		else{
			that.preparePage("\" The guard takes a seat and rubs his brow. The other guard stands, waiting, unsure what to do with his weapon or his time. \"Fine. Go. You ain't lastin' two minutes out there anyway.\" The other guard takes a seat next to him and places his sword down. You don't want to wait around for him to change his mind and had enough philosophizing for one day. ");
			if(TheWayData.Gold >0){
				that.preparePage("Still, the axe keeps drawing your eye. With a bit of gold in your pocket, you think about ");
				that.preparePage("offering a trade. ", BuyAxe);
				that.preparePage("Worth a shot, right? ");
			}
			
			that.preparePage("Looking at the large metal archway and gate, gathering a small bag and strap from the various shelves, ");
			TheWayData.HasBag = true;
				
			//pickup sword if dropped
			if(!TheWayData.HasWeapon.Sword){
				TheWayData.HasWeapon.Sword = true;
				that.preparePage("and picking up your sword, ");
			}
			
			that.preparePage("you can't help but see the round-up prisoners in the far corner. Many are injured, maybe fatally, but some could probably still walk. It would be extremely risky... but maybe you could ");
			that.preparePage("cut some loose ", FreePrisonersEnd);
			that.preparePage("on your way out. But why care about them? The end is so close in sight. Fuck em, just ");
			that.preparePage("leave.", Leave);
		}
	}
	
}