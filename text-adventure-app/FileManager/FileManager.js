import {levelFile} from '../GameData.js'
import {AsyncStorage}  from 'react-native';
import * as GameData from '../GameData.js';

//manages files via saving and loading  
export class FileManager {
	
	//the level file is an object that extends LevelFile and holds important functions for saving game states 
	//it is set either in the LoadGame function or in the ./X/X class (such as ARoom, etc)
	static levelFile = undefined;
	static saving = false;
	static clearLevelFileLater = false;

	static setLevelFile(file){
		this.levelFile = file;
	}
	
	static canSave(){
		if(this.clearLevelFileLater || this.saving){
			return false;
		}
		
		else{
			return this.levelFile != undefined;
		}
	}
	
	static clearLevelFile(){
		if (this.saving){
			this.clearLevelFileLater = true;
		}
		else{
			this.levelFile = undefined;
		}
	}
	
	
	//save the current game in progress
	static SaveGame(that, remove){
		this.saving = true;
		this.levelFile.saveData(that);
		var stringFile = JSON.stringify(this.levelFile);
		
		var d = new Date();
		var minutes = ""+d.getMinutes();
		if(parseInt(minutes) < 10){
			minutes = "0"+minutes;
		}
		//name of file is "levelname month/date hours:minutes"
		var name = this.levelFile.getName()+" "+ (d.getMonth()+1)+"/"+d.getDate() +" " + d.getHours()+":"+minutes;
		
		//save data using async 
		_storeData = async () => {
			try {
				await AsyncStorage.setItem(name, stringFile);
				if(remove || clearLevelFileLater){
					this.levelFile = undefined;
				}
				this.clearLevelFileLater = false;
				this.saving = false;
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
		console.log("Loading "+name);
		//load data using async
		_retrieveData = async () => {
			try {
				const value = await AsyncStorage.getItem(name);
				if (value != null) {
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
	
	
	//save the current GlobalData object in GameData
	static saveGlobalData(){
		//NOTE this DOES NOT preserve any functions or classes held in GlobalData
		var stringFile = JSON.stringify(GameData.GlobalData);
		
		//save data using async 
		_storeData = async () => {
			try {
				await AsyncStorage.setItem("GlobalData", stringFile);
			} catch (error) {
				// Error saving data
				alert(error);
			}
		}
		
		return _storeData();
		
		
	}
	
	
	//get all file names for the purpose of loading
	static async GetFileNames(){
		var returnMe = [];
		//get all file names using async 
		_retrieveKeys = async () => {
			try {
				const value = await AsyncStorage.getAllKeys();
				if (value !== null) {
					for(fileNumber in value){
						//whats the filename according to our filesystem
						var fileName = value[fileNumber];
						
						//return all filenames that ARENT "GlobalData"
						if(fileName != "GlobalData"){
							returnMe.push(value[fileNumber]);
						}
					}
				}
				return returnMe;
				
			} catch (error) {
				// Error saving data
				alert(error);
			}
		}
		 
		 return _retrieveKeys();
	}
	
	
	//this takes an array of filenames and removes them from our saved files 
	static async removePreviousSave(savedGames){
		//remove files using async
		_removeData = async () => {
			try {
				await AsyncStorage.multiRemove(savedGames);
			} catch (error) {
				// Error saving data
				alert(error);
			}
		}
		
		return _removeData();
	}
	
	
	
	//accepts the string name of a level (ex: "ARoom", "TheWay") and returns the names of all save files of that level
	static async getFileNamesForLevel(levelName){
		//the following 3 lines retrieve the proper filename of the given gameClass, by looking it up in our level files 
		var loadableFiles = await this.GetFileNames();
		var ourLevelFile = eval('new this.LevelFiles.'+levelName+"File()");
		var fileName = ourLevelFile.getName();
		
		var savedGames = [];
		
		//now check all save files to see if any contain the given fileName 
		for(fileNumber in loadableFiles){
			//whats the filename according to our filesystem
			var savedFileName = loadableFiles[fileNumber];
			
			if(savedFileName.includes(fileName)){
				savedGames.push(savedFileName);
			}
		}
		
		return savedGames;
	}
	
	

	static async finishLevel(that, levelName){
		this.clearLevelFile();
		
		while(this.saving){
			//wait just incase 
		}
		
		//set global data to our finished level's data
		eval('GameData.GlobalData.Last'+levelName+'Data = GameData.'+levelName+'Data');
		
		//save global data 
		await this.saveGlobalData();
		
		
		//erase all save files for this level
		await this.removePreviousSave(await this.getFileNamesForLevel(levelName));
		
		
		
	}
	
	
	
	
	
	
	
	
	
	static async onStartUp(){
		//for development purposes, clears all data 
		//await AsyncStorage.multiRemove(await AsyncStorage.getAllKeys());
		this.requireFolders();
		await this.initGlobalData();
	}
	
	
	
	static async initGlobalData(){
		var fileNames = await this.GetFileNames();
		
		_retrieveGlobal = async () => {
			try {
				const value = await AsyncStorage.getItem("GlobalData");
				
				if (value != null) {
					//we have played before, load our GlobalData object into GameData
					GameData.setGlobalData(JSON.parse(value));
				}
				
				else{
					//we have never played before, do nothing, waiting until the end of a player's first level to save the GlobalData object  
				}
				
			} catch (error) {
				// Error retrieving data
				alert(error);
			}
		}
		
		return _retrieveGlobal();
	}
	
	
	
	
	
	
	
	
	static ARoomFiles;
	static LevelFiles;
	static TheWayFiles;
	static YourWorldFiles;
	static HomePageFiles;
	
	static requireFolders(){
		//we have to include all of this here in order to load classes referenced in saved properties
		//trust me there's no better way to do it 
		const ARoomFilesTemp = requireAll('./ARoom');	
		const TheWayFilesTemp = requireAll('./TheWay');
		const YourWorldFilesTemp = requireAll('./YourWorld');
		const HomePageFilesTemp = requireAll('./HomePage');
		const LevelFilesTemp = requireAll('./FileManager');
		
		this.ARoomFiles = this.formatFiles(ARoomFilesTemp);
		this.LevelFiles = this.formatFiles(LevelFilesTemp);
		this.TheWayFiles = this.formatFiles(TheWayFilesTemp);
		this.YourWorldFiles = this.formatFiles(YourWorldFilesTemp);
		this.HomePageFiles = this.formatFiles(HomePageFilesTemp);
	}
	
	
	//the plugin require-all has the files in a really messy format, so we do this to make sure the object contains all the files as properties named that file name
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
					//this.levelFile.nameSpace is the folder the filename is, OR the file could be in the HomePage folder
					//We use "Files" here because that's what the import object name is (see the onStartUp() function)
					var fileName = obj[property].name;
					
					const filePath = 'this.'+this.levelFile.nameSpace+'Files'+'.'+fileName;
					const secondFilePath = 'this.'+'HomePageFiles'+'.'+fileName;
					
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
	
	
	//we have a custom json writer because some of our objects hold classes as properties 
	//these are represented as functions in javascript, and cant be saved normally, so we have a custom method where we look the class up by name when we load the json 
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