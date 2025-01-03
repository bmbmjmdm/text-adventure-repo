import {Linking} from 'react-native';
import {HomePage} from './HomePage.js';
import {Platform} from 'react-native';

//bring user to app store
export class OpenAppStore {

	static createPage(that){
		HomePage.createPage(that);

		//open app store for ios
		if (Platform.OS === 'ios'){
			Linking.openURL('itms-apps://itunes.apple.com/app/id1437961208');
			
			//TODO https://stackoverflow.com/questions/35612383/how-to-make-a-rate-this-app-link-in-react-native-app/41021128
		}
		
		//open play store for android
		else{
			Linking.openURL('market://details?id=com.LaplanteApps.iAdventure');
		}

		
	}


}