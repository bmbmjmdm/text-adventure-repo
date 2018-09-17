
import {Node1B} from './Node1B';
import {TheWayData} from '../GameData.js';

//talking to the prisoner from node 1B after dealing with the guard. With keys (and without snapping the glass off in the lock) the player can free him
export class TalkPrisoner1B {

	static createPage(that){
		that.preparePage("You sneak up to the prisoner's cell and greet him. ");
		
		//polite or not greeting 
		if(TheWayData.RefusedDeal){
			that.preparePage("\"Whadda you want?\" ");
		}
		else{
			that.preparePage("\"Hey, kid, hurry up and get me outa here.\" ");
		}
		
		//the glass is snapped in the keyhole, nothing player can do
		if(TheWayData.GlassSnapped){
			that.preparePage("You look at the lock to find your glass snapped off within it. You try to fish it out or get some kind of leverage, but it's no use. The glass is jammed too deep and there's nothing left to grab hold of. You look sympathetically into the prisoner's eyes. \"So...so that's it? I'm gonna rot in here, maybe even burn? Well good luck to ya, pal. Best of fucking luck.\" With that heartfelt goodbye, you ");
			that.preparePage("leave", Node1B);
			that.preparePage(" your compatriot behind.");
		}
		
		else{
			//the glass is jammed, take it out 
			if(TheWayData.JammedGlass){
				TheWayData.HasWeapon.Glass = true;
				that.preparePage("You look down at the lock to see the glass still wedged in their. With some careful jostling you eventually work it free, then tuck it back into your pants. ");
			}
			
			if(TheWayData.HasKeys){
				TheWayData.Prisoner1BFree = true; 
				TheWayData.PrisonersFreed++;
				that.preparePage("The lock hangs open like the man's mouth. You flick through your keychain until you find one that fits, and with a quick twist of the wrist, it opens! The man quietly creeps out, then looks to you. \"Thank you...thank you! I never doubted you for a second, kid. ");
				if(TheWayData.MadeBetterDeal && !TheWayData.Extorted){
					that.preparePage("Before I forget, here.\" The man pulls out a gold coin from his pocket and hands it to you. It smell funny, but who cares? You gain 1 gold! \"");
					TheWayData.Gold++;
				}
				if(TheWayData.RefusedDeal){
					that.preparePage("And about what I said before... I'm sorry. Been locked up so long it's hard ta stay sane. Let alone civil. ");
				}
				
				that.preparePage("Now... I know a way outa here. I dunno if it's the best, but it sure is the fastis. Jus always follow the light. And if the light's comin from a room wit banners, go that way! I know it don't make no sense to ya now, but I believe in ya, kid. \" With that, the man creeps away from his cell and disappears to the East. You start to ");
				that.preparePage("head back.", Node1B);
				
			}
			
			else{
				that.preparePage("The lock doesn't look like it's going to open itself, unfortunately. Without any keys, you can't help this man. \"Where- where ya going?!\" He calls as you ");
				that.preparePage("go", Node1B);
				that.preparePage(" to find some keys, or just leave him for dead.");
			}
			
			
		}
		
	}


}