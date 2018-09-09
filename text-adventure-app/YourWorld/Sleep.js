import {YourWorldData} from '../GameData.js';
import {Levels} from '../HomePage/Levels.js';

//go to sleep after camping, decide if anyone dies in their sleep, then continue 
export class Sleep {

	static createPage(that){
		YourWorldData.Campfire = false;
		
		that.preparePage("You find some soft earth to rest your head, just about anything will do given how tired you are. The distant howls in the darkness are...concerning, but you manage to slip away into unconciousness like you were born to. ");
		
		//sleeping with negative energy means someone might die 
		if(YourWorldData.Energy < 0){
			that.preparePage("Your body aches and breaths are shallow, you clearly overexerted yourself during the day. ");
			if(YourWorldData.Allies > 0){
					that.preparePage("It seems everyone in your party has. ");
			}
			that.preparePage("It's a deadly thing to do, you know? And now as you struggle to make it through the night, you can only hope your will is enough, or else... ");
			
			var chance = Math.random();
			//death
			if(Math.abs(Energy)/50 > chance){
				
				//kill a random ally
				if(YourWorldData.Allies > 0){
					that.preparePage("You're waken from sleep by a violent caughing, a hack and gasp and grasping for some kind of God to make it stop... and then it does. ");
					
					var motherSafe = false;
					var sonSafe = false;
					var sadSafe = false;
					var foulSafe = false;
					var oldSafe = false;
					var badassSafe = false;
					//everyone who was fed is safe, unless everyone was fed, in which case noone is safe lol
					if(YourWorldData.Safe.length != YourWorldData.Allies){
						if(YourWorldData.Safe.includes("Mother")){
							motherSafe = true;
						}
						if(YourWorldData.Safe.includes("Son")){
							sonSafe = true;
						}
						if(YourWorldData.Safe.includes("SadGal")){
							sadSafe = true;
						}
						if(YourWorldData.Safe.includes("FoulGuy")){
							foulSafe = true;
						}
						if(YourWorldData.Safe.includes("OldGuy")){
							oldSafe = true;
						}
						if(YourWorldData.Safe.includes("BadassGal")){
							badassSafe = true;
						}
					}
					
					
					var killed = false;
					
					//keep trying to kill someone until we get someone in our party who isn't safe 
					while(!killed){
						var random = Math.random();
						
						if(random < 0.17){
							if(YourWorldData.Mother && !motherSafe){
								YourWorldData.Mother = false;
								killed = true;
								that.preparePage("You look to see the mother, the kind soul you knew only a short time, lay still in her sleep. You put your hands above her mouth and feel nothing, no air, no life. ");
								
								if(YourWorldData.Son){
									that.preparePage("The small child awakes from al lthe commotion and runs to his mother, looking to you, trying to help but not sure how. There's a glimmer of understanding behind his eyes that's more of a concern than the cadaver between you. Tears begin spilling out as he screams and bangs tiny hands against your legs, chest. He doesn't know what do with himself, and neither do you. You hold him as best you can, try to brush him gently and shoo away reality, but the night is long. You fall asleep, only hoping he did too. ");
								}
								
								that.preparePage("The nightmares that plague you as you rest are that of your own mother. ");
							}
						}
						
						else if (random >= 0.17 < 0.34){
							if(YourWorldData.Son && !sonSafe){
								YourWorldData.Son = false;
								killed = true;
								that.preparePage("You look up to see the small boy lie motionless. You curse the world, yourself, as you slowly approach him and feel his cold skin. ");
								
								if(YourWorldData.Mother){
									that.preparePage("You're soon shoved aside by the boy's mother as she lays her hands on his face, his neck, his body in any which way in hopes of finding something. Something alive. Saliva drips through her clenched teeth like the tears off her cheeks and she's growling something primitive. The mother soon screams into the night, clenches the boy's shirt and swears to some God she'll find him. You fall asleep listening to her ramble and rant, curse and bargain. ");
								}
								else{
									that.preparePage("First mother, now son. The waves of sorrow hit you like a thick darkness, a blackness that seeps into your chest and drowns you from within. You fall asleep whimpering, weak. ");
								}
							}
						}
						
						else if (random >= 0.34 < 0.51){
							if(YourWorldData.SadGal && !sadSafe){
								YourWorldData.SadGal = false;
								killed = true;
								that.preparePage("You look up to find the girl, curled on her side, breathing siezed. She looks to have been crying in her sleep, about what you're not sure but... you hope she finds some rest now. You go back to bed with a lump in your throat, wishing you could have helped her. ");
							}
						}
						
						else if (random >= 0.51 < 0.68){
							if(YourWorldData.OldGuy && !oldSafe){
								YourWorldData.OldGuy = false;
								killed = true;
								that.preparePage("You look up to see the old man had crawled from where he was sleeping, but only got so far. He's face down, hands clutching dirt. Perhaps that's all he was meant to have in this life, but you wish things were different. ");
							}
						}
						
						else if (random >= 0.68 < 0.85){
							if(YourWorldData.FoulGuy && !foulSafe){
								YourWorldData.FoulGuy = false;
								killed = true;
								that.preparePage("You look around and find the foul-smelling man with clothes ripped in what looks like a rage...but now, still. Part of you is happy he won't be joining you further, another part of you despising yourself for such thoughts. Your dreams are tainted by his clueless, though pleasent demeanor. ");
							}
						}
						
						else if (random >= 0.85){
							if(YourWorldData.BadassGal && !badassSafe){
								YourWorldData.BadassGal = false;
								killed = true;
								that.preparePage("You look around and find the older woman face down in the dirt. She looks to have been trying to stand up but failed again and again. She was perhaps the strongest among you and not even she made it... your journey is cursed, you're cursed, and your dreams remind you of it again and again. ");
							}
						}
					}
					
					// ):
					YourWorldData.Allies--;
				}
				
				//kill player
				else{
					that.preparePage("You're waken from your sleep by a lump in your throat. You try to cough, wheeze, gasp, anything! Alas, it won't budge. You struggling to stand by your body is tired, bones weak and muscles bruised. You grasp for air, dear life, but soon the night ");
					that.preparePage("takes you.", Levels);
				}
			}
		}
		
		YourWorldData.Energy = Math.Max(YourWorldData.Energy, 0);
		YourWorldData.Energy += 10;
		
		that.preparePage("Eventually, the night passes and you awake feeling slightly more rested. You have "+ YourWorldData.Energy+" energy, and a " );
		that.preparePage("new day.", YourWorldData.CampContinue)
		
	}

}