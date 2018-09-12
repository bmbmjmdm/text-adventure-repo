import {OpenAppStore} from './OpenAppStore.js'

//Tell the user to rate my app 
export class ComingSoon {

	static createPage(that){
		that.preparePage("Coming Soon! I'm so happy you enjoy my work. If you'd like more levels, give me 5 stars ")
		that.preparePage("here", OpenAppStore);
		that.preparePage(" to motivate me to write more! You can also leave a review stating which level you want most.");
		
	}


}