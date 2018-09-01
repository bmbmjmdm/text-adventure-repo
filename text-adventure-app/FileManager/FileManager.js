import {levelFile} from '../GameData.js'
import {AsyncStorage}  from 'react-native';
import * as GameData from '../GameData.js';


//manages files via saving and loading  
export class FileManager {
	
	static levelFile = undefined;

	static setLevelFile(file){
		this.levelFile = file;
	}
	
	static canSave(){
		return this.levelFile != undefined;
	}
	
	//save the current game in progress
	static SaveGame(that){
		this.levelFile.saveData(that);
		var stringFile = JSON.stringify(this.levelFile);
		
		var d = new Date();
		//name of file is "levelname month/date hours:minutes"
		var name = this.levelFile.getName()+" "+ (d.getMonth()+1)+"/"+d.getDate() +" " + d.getHours()+":"+d.getMinutes();
		
		//save data using async 
		_storeData = async () => {
			try {
				await AsyncStorage.multiRemove(await AsyncStorage.getAllKeys());
				await AsyncStorage.setItem(name, stringFile);
				this.levelFile = undefined;
			} catch (error) {
				// Error saving data
				alert(error);
			}
		}
		
		return _storeData();
		
		
	}
	
	//load a game from file 
	//this is called on click, so once the data is loaded we don't need to do anymore as the typing animation will take over
	static LoadGame(that, name){
		//load data using async
		_retrieveData = async () => {
			try {
				const value = await AsyncStorage.getItem(name);
				if (value !== null) {
					//first we parse the json object into our normal LevelFile form
					this.levelFile = JSON.parse(value);
					//now we parse the screen data and set it to our current screen
					that.state.toShowText = this.jsonParser(JSON.parse(this.levelFile.screenState));
					//finally we parse the game data and use the file's provided function name to set it to the proper game data object 
					var fileGameData = JSON.parse(this.levelFile.data);
					var evalString = "GameData"+"."+this.levelFile.loadFunction+"(fileGameData)";
					eval(evalString);
				}
				
			} catch (error) {
				// Error retrieving data
				alert(error);
			}
		}
		
		return _retrieveData();
	}
	
	
	//get all file names for the purpose of loading
	static async GetFileNames(){
		var returnMe = [];
		//get all file names using async 
		_retrieveKeys = async () => {
			try {
				const value = await AsyncStorage.getAllKeys();
				if (value !== null) {
					returnMe = value;
				}
				return returnMe;
				
			} catch (error) {
				// Error saving data
				alert(error);
			}
		}
		 
		 return _retrieveKeys();
	}
	
	
	//helper function for the screen state json parsing. 
	//this is needed to evaluate the string versions of the classnames (aka functions) held in the "nextPage" properties
	static jsonParser(array){
		for(var index in array){
			var obj = array[index];
			for (var property in obj) {
				if(property === "nextPage"){
					if (obj.hasOwnProperty(property)) {
						//obj[property] is the filename and the classname
						//this.levelFile.nameSpace is the folder the filename is, OR it could be in the top level folder
						
						//const filePath = '../'+this.levelFile.nameSpace+'/'+obj[property]+'.js';
						//var nextPageClass = await import(filePath);
						require('require-all');
						requireAll('./imgs');
						
						
						//if(nextPageClass
						//obj[property] = 
						//bindings.LookAtBindings
					}
				}
			}
		}
		
		return array;

    }
	
	
}