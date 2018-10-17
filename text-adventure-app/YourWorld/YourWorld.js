import {SearchPrison} from './SearchPrison.js';
import {TalkAlliesPrison} from './TalkAlliesPrison.js';
import {FindPath} from './FindPath.js';
import {ResetYourWorldData} from '../GameData.js';
import {YourWorldData} from '../GameData.js';
import {FileManager} from '../FileManager/FileManager.js'
import {YourWorldFile} from '../FileManager/YourWorldFile.js';

export class YourWorld {

	static createPage(that){
		ResetYourWorldData();
		FileManager.setLevelFile(new YourWorldFile());
		
		that.preparePage("The gate opens up as you work the pully mechanism, metal slowly cranking to let light flood in. You're nearly blinded by the sight of daylight. How long has it been? You can hardly remember the days, maybe years that have passed in that dark, damp cell. As your eyes adjust and you begin to step out, you take a look at the world around you. It's... beautiful. Beautiful but... you're still trapped. You find yourself in a valley, surrounded on all sides by mountains scraping the sky, rocks tumbling down their scarred faces and smashing into the ground like a threat. The valley is filled with grass and shrubs, small trees and possibly game running beneath the thickets of vegetation. Green: that's a color you haven't seen in some time. You take a deep breath and let the sound of wind rustling nature tickle your ears. ");
		if(YourWorldData.Allies > 0){
			that.preparePage("You hear the mottly crew of cellmates make their way out behind you, and watch as people lie down in the grass, frollic in flowers, or stare at the sun. ");
		}
		
		if(YourWorldData.Health  < 6){
			that.preparePage("The taste of fresh air, the feeling of sun on your skin invigorates you. You have 6 health now as the day washes over you. ");
			YourWorldData.Health = 6;
		}
		
		that.preparePage("It's a wonderful moment of peace. Soon, however, you realize it won't last. You might feel free, but there's still a ways to go. Nature can be as cruel as a jail and will leave you for dead if you spend too much time enjoying it. You begin looking around for your next move. You see the prison behind you: a wood and stone construct falling apart in this forgotten valley. There might be ");
		that.preparePage("something to find", SearchPrison);
		that.preparePage(" around its perimeter, but that'll take time to search. ");
		if(YourWorldData.Allies > 0){
			that.preparePage("You could also ");
			that.preparePage("talk to your coherts", TalkAlliesPrison);
			that.preparePage(" and get their take on the situation. ");
		}
		that.preparePage("Alternatively you can start");
		that.preparePage(" finding the best path out of here.", FindPath);
		that.preparePage(" It's certainly past noon so you might want to hurry, but if you don't find supplies you might not last out here. As beautiful as this free world is, surviving it won't be easy.");
	}



static getName(){ return "YourWorld"; }
}