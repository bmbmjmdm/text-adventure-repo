import {ClimbWall} from './ClimbWall.js';
import {TurnAroundRocky} from './TurnAroundRocky.js';
import {Levels} from '../Menus/Levels.js';
import {YourWorldData} from '../GameData.js';

//player is trying to cross the ledge by the rock wall but will fail. Will either hurt them or kill a companion
export class ShimmyLedge {

	static createPage(that){
		YourWorldData.TriedLedge = true; 
		
		//no allies, get hurt and get some rocks 
		if(YourWorldData.Allies == 0){
			YourWorldData.Health -= 2;
			YourWorldData.Flint ++;
			YourWorldData.SharpRocks ++;
			
			that.preparePage("You wait until the breeze settles, then inch a foot out onto the ledge. It's a long way down, not much room on here either... you keep going. Your heart is in your throat by the time you're two steps out, but it seems to hold! Three steps, four, the trees far below beg you to stare at them but you keep your focus forward. The sun on your back, your arms are stretched wide to hug the wall. You take a step- a rock crumbles under your foot drags another one with it, then two, three, your foot drops as you grasp for something, anything to keep you standing. Your legs scrapes part of the ledge and opens a fresh wound as your hands pull you back up with small stones protruding from the wall. ");
			
			//dead
			if(YourWorldData.Health <= 0){
				that.preparePage("As you pull, the pain sets in from your leg and you wince, letting go of the stone in a brief moment you'll never have time to regret as you plummet down, down, ");
				that.preparePage("down.", Levels);
			}
			//alive
			else{
				that.preparePage("You quickly backtrack, careful not to upset any more rocks. You drop to your knees as you arrive on stable ground and cry at how close you came to... You wince at the pain from your leg and see blood dripping out, having taken 2 damage and now have "+YourWorldData.Health+" health. On the brightside, you notice there are some rocks in your hand you must have grabbed while scrambling back. You pocket a piece of flint and sharp rock. As your heart settles, the pounding slowly becoming inaudible, you remember where you are and the choices facing you. Take another risk and ");
				that.preparePage("climb the wall?", ClimbWall);
				that.preparePage(" Or ");
				that.preparePage("turn around", TurnAroundRocky);
				that.preparePage(" and explore the forest path?");
			}
		}
		
		//allies, send one of them off to their death
		else{
			that.preparePage("You explain the situation and it quickly becomes clear what you're asking. A hush falls over you and your friends... eventually, one speaks up, ");
			YourWorldData.Allies--;
			var pronoun = "";
			var sonDied = false;
			
			if(YourWorldData.SadGal){
				that.preparePage("\"...Ok...I'll go.\" The young woman says, wiping something from her face and clenching her jaw, trying to not look terrified. You tell her she doesn't have to but the words don't come out right, sounding...dismissive. She shoots you a look. \"I can do this.\" ");
				YourWorldData.SadGal = false;
				pronoun="she";
			}
			else if(YourWorldData.OldGuy){
				that.preparePage("\"Alright, looks like it's up ta me.\" The old man stands tall and tries to show off his shoulders, though can't help but look thin. He seems determined to prove something. ");
				YourWorldData.OldGuy = false;
				pronoun="he";
			}
			else if (YourWorldData.BadassGal){
				that.preparePage("\"Guess I'll have it a go.\" The older woman smirks and shrugs, wanders past you and looks oddly unphased about her pending doom. ");
				YourWorldData.BadassGal = false;
				pronoun="she";
			}
			else if (YourWorldData.FoulGuy){
				that.preparePage("\"Fine, fine, I'll do it.\" The potbellied man says, waving his arms like he's accepting an award and wafting a foul stench all around. You don't stop him. ");
				YourWorldData.FoulGuy = false;
				pronoun="he";
			}
			else if (YourWorldData.Son){
				that.preparePage("\"I..I coul go.\" The small boy says. He is the lightest one here, but he also probably doesn't understand the consequences. ");
				if(YourWorldData.Mother){
					that.preparePage("His mother says that she'll go instead, but you convince her otherwise. He's half her weight, less maybe. She struggles with the situation but eventually sits down, arms folded, shaking. ");
				}
				YourWorldData.Son = false;
				pronoun="he";
				sonDied = true;
			}
			else if(YourWorldData.Mother){
				that.preparePage("\"I...can go I guess.\" The mother's look is far away, like she doesn't belong here anymore, like falling wouldn't be so bad. ");
				YourWorldData.Mother = false;
				pronoun="she";
			}
			
			that.preparePage("As "+pronoun+" approaches the ledge, you hold your breath. The cliff seems to be crumbling at the slightest breeze, yet "+pronoun+" walks steadily up to it. Just before "+pronoun+"'s about to step out, the wind stands still, the sun illuminates the path perfectly and the whole world seems to watch. One step. Two steps. The ledge is actually holding! Three steps, four, five, "+pronoun+"'s just about across! Six, seven, ei-a brittle stone tired of rigid structural conformity snaps and crumbles beneath the weight. The ledge caves in, out, drops the unsuspecting victim down a tumbling rocky slide into a hush of brush below, branches snapping and dirt thumping like the last word in this discussion with fate. You're speechless. ");
			if(sonDied && YourWorldData.Mother){
				that.preparePage("The mother lets out a chilling scream and dives towards the ledge. You catch her, holding her back from throwing herself off into the unknown. She cries and bangs on your shoulder. She almost tries to push you but her efforts are half-hearted. She slumps to the floor and you spend a few hours with her, waiting for the tears to dry and hollow husk ready to continue the path forward. ");
			}
			else{
				that.preparePage("You knew this was a bad idea. Why did you do it? Why?! The question rattles your brain for some time as you look towards the forest below. You call out, praying for an answer...but hear nothing. The breeze picks up again, now terribly cold. ");
			}
			
			that.preparePage("Reality sets in, you have to keep moving. Do you ");
			that.preparePage("climb the wall?", ClimbWall);
			that.preparePage(" Or ");
			that.preparePage("turn around?", TurnAroundRocky);
			that.preparePage(" Part of you hopes the other path meets up with this part of the woods, maybe you can find your friend...but in a place this big, odds are low.");
			
		}
		
	}


}