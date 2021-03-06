import {Explore} from './Explore.js';
import {YourWorldData} from '../GameData.js';

//User is atop the summit, sees many strange lands, as well as clouds below them, as well as a path down. everyone in the party says something 
export class HornSummit{

	static createPage(that){
		that.preparePage("You claw your way to the top of the ice, mounting the precipice in your ascent to the heavens. You're taken aback by the view beyond this valley, the world stretches out to the horizon: rolling dimple hills and shaggy forests, a steaming, silent volcano in the distance, shadow-stricken cities (one at the bottom of this mountain you stand atop), and towns of wheat and milk. Clouds roll into the ridge below you, crashing upon the earthly spine like waves to shore. Whatever you believe, you are here. ");
		
		if(YourWorldData.Allies>0){
			that.preparePage("You did help these people, saved them. ");
		}
		
		that.preparePage("The universe created you and guided you to bring you to this moment, and all moments beyond it. If only for the universe to experience itself. \"Good\" or \"bad\", meaning or none, there is clearly nothing more natural than your very existance and all paths you may take. It is, ultimately, the universe's will, or perhaps a god's. ");
		
		if(YourWorldData.Mother){
			that.preparePage("The scarlet-haired mother rests a hand on your shoulder, \"It's... beautiful. Thank you.\" She squints in the distance, points to a small town. \"That's our home...what's left of it. If you'd like, you're welcome to come join us. The empire's been... occupying it, but that won't last long. I hope.\" ");
		}
		
		else if (YourWorldData.Son){
			that.preparePage("The young child takes your hand. \"Th-thank.\" He points in the distance, to a small town or large ruin. \"Home\" he says. ");
		}
		
		if(YourWorldData.FoulGuy){
			that.preparePage("The pudgy, foul man sits on a stone before you, rubbing his bare feet and breathing on himself. \"The forest looks to be in one piece, guess my friends are still alive! I'll be seeing them, dippies and doodlets, the who's a what of the tribe. You know. I can show you the way but,\" he looks you over, \"you may wanna clean up first.\" " );
		}
		
		if(YourWorldData.SadGal){
			that.preparePage("The girl with red, stained cheeks speaks up behind you. \"I- I know that forest. Magical stuff, stuff that just might... we should- we should go there!\" Her voice shakes like her thin form in this chill, but her eyes are set, bold, mind made up and nothing's going to stop her. ");
		}
		
		if(YourWorldData.OldGuy){
			that.preparePage("The old man laughs, harder and harder until he knocks himself over and winces standing up. \"Aye that a view. I'll be makin my way ta a special place; heard a rumor about some sand that jus can't be true. Gonna have ta find out myself!\" He nudges you. \"Pack some water, kid, and a cross.\" He sounds excited but looks a little... scared. You can't tell whether he's running from something or to it. ");
		}
		
		if(YourWorldData.BadassGal){
			that.preparePage("The older lady rests a hand on your shoulder, \"You did this. Don't forget that.\" You turn to see silver, braided hair and a gaze that's far past the horizon. \"There's much more to this world than meets the eye. I'd happily see it with you.\" She pulls a small scroll from her pants, you don't question her. \"Take this, I already know it by heart.\" You unravel the cracked parchment to find a map inside. Looking for what's marked as an X in the landscape, you see what might be a desert far, far away. ");
		}
		
		that.preparePage("There's a whole world to ");
		that.preparePage("explore,", Explore);
		that.preparePage(" a steady path down this peak, an adventure at foot.");
		
	}
		


static getName(){ return "HornSummit"; }
}