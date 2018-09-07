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
					//first we parse the json object into a temporary LevelFile form
					this.levelFile = JSON.parse(value);
					//now we parse the screen data and set it to our current screen
					that.state.toShowText = this.jsonParser(this.levelFile.screenState);
					//finally we parse the game data and use the file's provided function name to set it to the proper game data object 
					var fileGameData = this.jsonParser(this.levelFile.data);
					var evalString = "GameData"+"."+this.levelFile.loadFunction+"(fileGameData)";
					eval(evalString);
					
					//now we replace this.levelFile with a new empty level file
					this.levelFile = eval('new this.LevelFiles.'+this.levelFile.nameSpace+'File()');
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
	
	
	
	static ARoomFiles;
	static LevelFiles;
	
	static onStartUp(){
		//we have to include all of this here in order to load classes referenced in saved properties
		//trust me there's no better way to do it 
		const ARoomFilesTemp = requireAll('./ARoom');	
		const TheWayFilesTemp = requireAll('./TheWay');
		const YourWorldFilesTemp = requireAll('./YourWorld');
		const TopLevelFilesTemp = requireAll('./HomePage');
		const LevelFilesTemp = requireAll('./FileManager');
		
		this.ARoomFiles = this.formatFiles(ARoomFilesTemp);
		this.LevelFiles = this.formatFiles(LevelFilesTemp);
	}
	
	static formatFiles(filesTemp){
		var newObj = {};
		for(objKey in filesTemp){
			for(subObjKey in filesTemp[objKey]){
				newObj[subObjKey] = filesTemp[objKey][subObjKey];
			}
		}
		return newObj;
	}
	
	
	
	
	//helper function for the screen state and GameData json parsing. 
	//this is needed to evaluate the string versions of the classnames (aka functions) held in the "nextPage" properties or certain GameData properties
	//this assumes the objectToParse is either an array of objects or single object, containing properties which may contain "property.isFunction === true". Any properties that evaluate to true are looked up as files. See jsonParserActual for implementation
	static jsonParser(objectToParse){
		var objectParsed = JSON.parse(objectToParse);
		if(Array.isArray(objectParsed)){
			for(var index in objectParsed){
				var obj = objectParsed[index];
				objectParsed[index] = this.jsonParserActual(objectParsed[index]);
				}
				
			return objectParsed;
		}
		
		else{
			return this.jsonParserActual(objectParsed);
		}
		

    }


	
	//where all the real work gets done 
	static jsonParserActual(obj){
		for (var property in obj) {
			//a property we set in jsonWriter
			if(obj[property].isFunction === true){
				if (obj.hasOwnProperty(property)) {
					//obj[property] is the filename and the classname
					//this.levelFile.nameSpace is the folder the filename is, OR the file could be in the top level folder
					//We use "Files" here because that's what the import object name is (see top of this file) for that folder 
					var fileName = obj[property].name;
					
					const filePath = 'this.'+this.levelFile.nameSpace+'Files'+'.'+fileName;
					const secondFilePath = 'this.'+'TopLevelFiles'+'.'+fileName;
					
					console.log("====");
					console.log(this.ARoomFiles);
					
					var nextPageClass = eval(filePath);
					
					if(!nextPageClass){
						nextPageClass = eval(secondFilePath);
					}
					
					if(!nextPageClass){
						alert("Failed to load properly, corrupted save file!");
					}
					
					obj[property] = nextPageClass;
				}
			}
		}
		return obj;

    }
	
	
	static jsonWriter(object){
		return JSON.stringify(object, 
		(key, value)=>{
			if (typeof value === 'function') {	
				return {"isFunction": true, "name":value.name};
			} 
			else {
				return value;
			}
		});
	}
	
	
}