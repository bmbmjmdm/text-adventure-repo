import {OpenAppStore} from './OpenAppStore.js'

//Tell the user to rate my app 
export class ComingSoon {

	static createPage(that){
		that.preparePage("Coming Soon! I'm so happy you enjoy my work. If you'd like more levels, ")
		that.preparePage("give me a nice rating", OpenAppStore);
		that.preparePage(" to motivate me to write more! You can also leave a review stating which new level you want most :)");
		
	}


}