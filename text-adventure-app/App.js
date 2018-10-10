import React from 'react';
import {TouchableWithoutFeedback, View, Text, ScrollView, AppState, BackHandler, StatusBar}  from 'react-native';
import {ClickText, DefaultText, styles} from './StylesEtc.js'
import {HomePage} from './Menus/HomePage.js'
import {FileManager} from './FileManager/FileManager.js'


//App is the visual display object, in charge of animating the text on screen and allowing the user to click through to change it
//App does not know what it is displaying. All that logic is elsewhere. The only exception is the initial state: HomePage
//Its initial mounting function assembles the homepage. 
//App will also monitor swipes to go back and the app state (background or closed) and will try to save whenever these things occur

//Here is an overview of how text is displayed and removed: 
//when createPage is called on a class (see componentDidMount or handleClickAfterFade), it uses Apps preparePage to add blocks of text to App's state.toShowText. Each block holds text, whether its clickable or not, and what class to use in handleClick if it is clickable
//when createPage finishes (may be a promise), typeAnimation is called. typeAnimation prepares App to begin typing. First, state.toShowText is copied to a json variable incase we need to save the game. This variable isn't changed as toShowText is manipulated. It then tells the FileManager that App has finished writing to toShowText and createPage has stopped writing to GameData. Next it calculates our typing speed and then calls typeAnimationActual to begin the typing loop
//as long as state.toShowText is not empty, typeAnimationActual will set a timer to call addLetter every 20 milliseconds, passing the typing speed 
//addLetter takes letters off of elements in state.toShowText and adds them to elements in a list called state.displayedText. Each call to addLetter will try to add up to the typing speed number of letters (aka scale). It then alerts the system of a state change with setState, causing shouldComponentUpdate to be called.
//in shouldComponentUpdate, if a new element is added to state.displayedText, render is called. If a new element wasn't added, but instead just letter(s) to an unfinished one, just that piece of text is called to update and render is not called to do redisplay everything. 
//render then turns the elements in state.displayedText and turns them into ClickText and DefaultText DOM elements, adding them to the inside of a scrollviw with an outer view for catching swipes. Clickable text can be clicked to call handleClick
//handleClick (can only be called when all text is done being typed) calcultas the fade speed and calls fadeAnimation, which calls fadeLetter every 20 milliseconds until there are no more letters in state.displayedText. After every call render is called to make the text on screen "gobble up" 
//after this handleClickAfterFade is called, where the program waits for any saving to finish, sets a flag to let the FileManager know we're starting to change stuff and dont try to save again until we're finished, and createPage is called, starting the cycle anew 
export default class App extends React.Component {
	
  

  
  
  
  //render works like a typewriter, constructing each Text element based on the state variable displayedText
  render() {
	var displayElements=[];
		
	//for every block of text we want to display, we create a DOM element for it 
	this.state.displayedText.map((dtNode,i) =>{
		//clickable text needs to be red and attach a touch listener to its corresponding nextPage function
		if(dtNode.clickable){
			displayElements.push((<ClickText key={i} ref={component => this.latestElement = component} onPress={() => {this.handleClick(dtNode.nextPage, this)}}>{dtNode.text}</ClickText>));
		}
		else{
			displayElements.push((<DefaultText key={i} ref={component => this.latestElement = component} >{dtNode.text}</DefaultText>));
		}
	});
	
	//when we're in a menu, text is centered. when in a level, its left aligned 
	var textCenter = 'center';
	if(FileManager.inLevel()){
		textCenter = 'left';
	}

	//the first View is for responding to a swipe to go back
	//ScrollView is fixed to be full-screen (no larger), allowing the user to scroll down (generally doesnt conflict with swipe back but could based on scroll height and gesture). commented out is the previous functionality: every render it calculates this difference and scrolls to the bottom automatically (the user can then scroll back up if they wish)
	//Text is here to display our ClickText and DefaultText elements in a Text-style layout rather than a FlexView-style layout (concatting them rather than every text being in its own "box")
	return (
		<View style={styles.container} onMoveShouldSetResponderCapture={this.didSwipe} onResponderMove={()=>{this.handleSwipe(this)}}>
				<ScrollView ref='scrollView'
							onContentSizeChange={(w, h) => {this.contentHeight = h;  /*this.scrollToBottom(true);*/}}
							onLayout={ev => this.scrollViewHeight = ev.nativeEvent.layout.height}
							contentContainerStyle={styles.scroll}
							onScrollBeginDrag={()=>{this.scrolling = true;}}
							onScrollEndDrag={()=>{this.scrolling = false;}}>
					<Text textBreakStrategy='simple' style={{textAlign: textCenter}}>
						{displayElements}
					</Text>
				</ScrollView>
		</View>
    );
  }
  


	
	//every 20 milliseconds, add a letter to the children rendered in this view 
	//if there are no more letters to type, stop 
	typeAnimationActual(scale){
		this.clearTimeout();
		
		if(this.state.toShowText.length > 0){
			this.allowClicks = false;
			
			
			this.timeoutId = setTimeout(() => {this.addLetter(this, scale)}, 20);
		}
		else{
			this.allowClicks = true;
		}
		
	}
	
	//some setup is done prior to actually calling the typeAnimation function aka typeAnimationActual
	typeAnimation(){
		//preserve a copy of all the text we're about to display incase we need to save
		this.saveCopy();
		
		FileManager.writing = false; 
		
		//figure out how fast we want to type the screen based on how much content needs typing 
		var letters = 0;
		for (i=0; i< this.state.toShowText.length; i++){			  
			letters += this.state.toShowText[i].text.length;
		}
		var scale = Math.floor(letters/20);
		if(scale < 1){
			scale = 1;
		}
		
		
		//do the actual typing
		this.typeAnimationActual(scale);
		
	}
	
	
	//clean up any lingering listeners
	clearTimeout() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}
	
	
  //Special character constants for use in load screen
  specialSpace = "¤";
  specialSpaceExpanded = "\n                                           \n";
  specialSpaceCompressed = "\n\n";
	

	//move a letter from the toShowText list to displayedText list
	//any node that is empty in toShowText list will serve as an indicator that that text element is completely displayed, and we can progress to the next
	addLetter(that, scale){	
		//deep clone the arrays
		var displayedText2 = Object.assign([], that.state.displayedText);
		var toShowText2 = Object.assign([], that.state.toShowText);
		
		//skip this function if there's nothing to show
		if(toShowText2.length > 0) {
			
			var keepTyping = true;
			
			//the higher the scale, the more letters are displayed with a single call 
			for(i=0;i<Math.max(1, scale);i++){
				
				var removeLastText = false;
				var index = 0;
			
				if(toShowText2[index].text.length < 1){
					//the last text we added a letter to finished that text. remove it from the display list and start a new text
					removeLastText = true;
					index++;
				
				}
			
				if(toShowText2.length == index){
					//the only text in the list is an empty one, don't bother, clean list, get out
					keepTyping = false;
				}
			
				else{
					//time to start modifying our texts
					//we always peel off the first letter of the toShowText, preparing it to append to the displayedText
				
	
					var firstCharacter = toShowText2[index].text.charAt(0);
					toShowText2[index].text = ''+toShowText2[index].text.slice(1);
				
					//SPECIAL SPACE CHARACTER 
					if(firstCharacter == that.specialSpace){
						firstCharacter = that.specialSpaceExpanded;
					}
				
					var canClick = toShowText2[index].clickable;
					var hasPage = toShowText2[index].nextPage;
				
					if(removeLastText){
						//start a new text!
						displayedText2.push({text:firstCharacter, clickable:canClick, nextPage:hasPage});
					
						//get rid of the empty text from the list
						toShowText2.shift();
					
						that.reRender = true;
					}
					else if (displayedText2.length==0){
						//no text displayed so far, start a new text!
						displayedText2.push({text:firstCharacter, clickable:canClick, nextPage:hasPage});
					
						that.reRender = true;
					
					}
					else{
						//append the last text in our list					
						displayedText2[displayedText2.length-1].text += firstCharacter;
						that.latestElementNewText = displayedText2[displayedText2.length-1].text;
						
						that.typeOne = true;
					}
				
				}
			}
			
			if(keepTyping){
				//we keep trying to type since we didn't hit an end
				that.typeAnimationActual(scale);
			}
			else{
				//the only text in the list is an empty one, don't bother, clean list, get out
				toShowText2 = [];
				that.allowClicks = true; 
				that.reRender = true;
			}
			
			that.setState({toShowText: toShowText2, displayedText: displayedText2});


		}
		
		//we're done displaying
		else{
			that.allowClicks = true; 
		}
	}
  
  
  
  //holds a reference to the last text element rendered on screen 
  latestElement = null;
  latestElementNewText = "";
  //used to determine if a full rerender is needed or just a single piece of text
  reRender = false;
  typeOne = false;
  
  
	//when we call setState, we are either totally rerendering the tree or just adjusting the last text on it or neither
	//we do this solely for performance. on screens with many elements, calling rerender for each letter is expensive. The Load text (load save file) needs this performance increase incase there are many load files
	shouldComponentUpdate(nextProps, nextState){
		if(this.reRender){
			//a new element has been added to the display 
			this.reRender = false;
			this.typeOne = false;
			return true;
		}
		else if (this.typeOne){
			//a preexisting element has a letter (or up to "scale" letters) appended 
			this.typeOne = false;
			if(this.latestElement){
				this.latestElement.reWrite(this.latestElementNewText);
			}
			return false;
		}
		else{
			//no elements need changing
			return false;
		}
		
	}


  
	savableCopy = "";
	//this holds a copy of the screens current text so that we can save it to file if needed
	//we need to use a special case for the "nextPage" values, via saving their class as just a name so we can specifically load it later in FileManager
	saveCopy(){
		this.savableCopy = FileManager.jsonWriter(this.state.toShowText);
	}
	
	
  startX = 0;
  startY = 0;
  direction= 0;
  timestamp = 0;
  
  //check to see if user swiped left or right 
  didSwipe(evt){  	 
	  var curX = evt.nativeEvent.pageX;
	  var curY = evt.nativeEvent.pageY;
	  
	  //too much time has passed since the swipe started, reset 
	  if(evt.nativeEvent.timestamp > this.timestamp+250){
		  this.timestamp = evt.nativeEvent.timestamp;
		  this.resetSwipe();
		  return false;
	  }
	  
	  //continue 
	  else{
		  this.timestamp = evt.nativeEvent.timestamp;
	  }
	  
	  //we're on a new swipe
	  if(this.startX == 0){
		  this.startY = curY;
		  this.startX = curX;
		  return false;
	  }
	  
	  //we're on the second reading of a new swipe
	  if(this.direction == 0){
		  if(curX == this.startX){
			  return false;
		  }
		  //set the direction of X to either positive (right) or negative (left) 
		  this.direction = (curX-this.startX)/Math.abs(curX-this.startX)

	  }
	  
	  
	  //Y has changed too much, reset
	  if(curY > this.startY + 75 || curY < this.startY - 75){
		  this.resetSwipe();
		  return false;
	  }
	  
	  //looks good so far
	  else{
	  
		//positive direction, we're swiping right
		if(this.direction > 0){
			//we've completed a swipe!
			if(curX > this.startX + 100){
				this.resetSwipe();
				return true;
			}
			  
			//we're not there yet
			else{
				return false;
			}
		  
		}
	  
		//negative direction, we're swiping left
		else{
			
			//we've completed a swipe!
			if(curX < this.startX - 100){
				this.resetSwipe();
				return true;
			}
			  
			//we're not there yet
			else{
				return false;
			}
		}
	  
	  }
  }
  
  //reset the swipe-detection numbers
  resetSwipe(){  
	this.direction = 0;
	this.startX = 0;
	this.startY = 0;
  }
  
  
  //we're swiping, go back to homescreen and possibly save 
	handleSwipe(that){
		if(that.allowClicks){
			if(FileManager.canSave()){
				that.allowClicks = false;
				FileManager.SaveGame(that, true).then((value)=>
				{
					that.allowClicks = true;
					that.handleClick(HomePage, that);
				});;
					
			}
			else{
				that.handleClick(HomePage, that);
			}
			
		}
	  
	}
  
  handleClick(nextPage, that){
	  //can we click?
	  if(that.allowClicks){
		  that.allowClicks = false;
		  
		  //figure out how fast we want to erase the screen based on how much content is on it 
		  var letters = 0;
		  for (i=0; i< that.state.displayedText.length; i++){
			  //remove all special space characters before counting letters + fading letters
			  if(that.state.displayedText[i].text == that.specialSpaceExpanded){
				  that.state.displayedText[i].text = that.specialSpaceCompressed;
			  }
			  
			  letters += that.state.displayedText[i].text.length;
		  }
		  var scale = Math.floor(letters/10);
		  if(scale < 1){
			  scale = 1;
		  }
		  
		  //now, erase the screen
		  that.fadeAnimation(nextPage, scale);
		  //when that finishes, it will continue with handleClickAfterFade(nextPage)
		  
	  }
  }
  
  handleClickAfterFade(nextPage){
	  FileManager.writing = true;
	  while(FileManager.saving){
		  //just incase, we dont wanna change anything while its saving 
	  }
	  FileManager.needsSave = true;
	  
	  //nextPage are classes that implement createPage, which populates toShowText so we can call typeAnimation
	  var newContent = nextPage.createPage(this);
	  
	  //we check for a "then" function as a hack to see if createPage returned a promise (some of our pages use async functions). if it did, we wait for the promise to resolve before typing
	  if(newContent != undefined && (typeof newContent.then == 'function')){
		newContent.then((value)=>{this.typeAnimation();});
	  }
	  else{
		this.typeAnimation();
	  }
  }
  
  
  	//every 20 milliseconds, remove a letter at random in this view 
	//if there are no more letters to remove, stop
	fadeAnimation(callbackPage, scale=1){
		this.clearTimeout();
		if(this.state.displayedText.length > 0){
			this.timeoutId = setTimeout(() => {this.fadeLetter(this, callbackPage, scale)}, 20);
		}
	}
  
  
	//randomly remove a letter from the screen
	//when there are no letters in a given text, remove it from the list
	//when there are no texts left, we're done
  	fadeLetter(that, callbackPage, scale){
		that.reRender = true;
		
		//deep clone the array
		var displayedText2 = Object.assign([], that.state.displayedText);
		
		//skip this function if there's nothing to remove
		if(displayedText2.length > 0) {
			
			//the more letters in the starting displayedText list, the more letters it takes off with a single call
			for(i = 0; i<scale; i++){
				
				var index = Math.floor(Math.random() * displayedText2.length);
				var finished = false;
			
				while(displayedText2.length > 0 && displayedText2[index].text.length < 1 ){
					//the randomly selected text already has all its letters removed. remove it from the display list and start a new text
					displayedText2.splice( index, 1 );
					index = Math.floor(Math.random() * displayedText2.length);
				}
			
				if(displayedText2.length == 0){
					//no more texts, finish
					finished = true;
				}
			
				else{
					//time to start modifying our texts
					//randomly take a letter from the text
					var textToMod = displayedText2[index].text;
					var letterIndex = Math.floor(Math.random() * textToMod.length);
					textToMod = textToMod.slice(0, letterIndex) + textToMod.slice(letterIndex+1);
					displayedText2[index].text = textToMod;
			
				}
			}
			
			that.setState({displayedText: displayedText2});
			
			if (!finished){
				//we keep trying to type since we didn't hit an end
				that.fadeAnimation(callbackPage, scale);
			}
			else{
				//we've cleared all the text, now move to the next state
				that.handleClickAfterFade(callbackPage);
			}


		}
		
	}
  
  
  
  //used by Pages to add text objects to the state 
  preparePage(textSegment, pageChangeOnClick=null){
	  if(pageChangeOnClick == null){
		  this.state.toShowText.push({text:textSegment, clickable:false});
	  }
	  
	  else{
		  this.state.toShowText.push({text:textSegment, clickable:true, nextPage:pageChangeOnClick});		  
	  }
  }
  
  
  
  
  
  
  constructor(props){
	  super(props);
	  //console.disableYellowBox = true
	  //note this ignores a warning caused by our "save periodically" timer
	  //react native does not have an optimized long-term timer at the moment, so everyone suggests suppressing the warning 
	  console.ignoredYellowBox = ['Setting a timer'];
	  //the state is clean to start, ready to be typed into 
	  this.state = {displayedText: [], toShowText: [], allowClicks: false};  
	  //our primary view(s) should adapt to text being added 
	  this.contentHeight = 0;
	  this.scrollViewHeight= 0;
	  //bind context for swiping 
	  this.resetSwipe = this.resetSwipe.bind(this);
	  this.didSwipe = this.didSwipe.bind(this);
	  //a number of file-related work that needs to be done before anything else 
	  FileManager.onStartUp();
	  //used to detect when we go into background 
	  this.appState = AppState.currentState
	  
  }
  
    componentDidMount() {
		HomePage.createPage(this).then((value)=>{this.typeAnimation();});
		setTimeout(() => {this.periodicSave(this)}, 300000);
		AppState.addEventListener('change', this.handleAppStateChange);
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
		 StatusBar.setHidden(true);
	}
  
    componentWillUnmount() {
		this.clearTimeout();
		AppState.removeEventListener('change', this.handleAppStateChange);
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}
	
	
	scrolling = false;
	
	//utility function for moving the ScrollView down as text is rendered
	//currently not used
  scrollToBottom(animated = true) {
	if(!this.allowClicks){
	if(!this.scrolling){
		const scrollHeight = this.contentHeight - this.scrollViewHeight;
		if (scrollHeight > 0) {
		const scrollResponder = this.refs.scrollView.getScrollResponder();
		scrollResponder.scrollResponderScrollTo({x: 0, y: scrollHeight, animated});
		}
	}
	}
	else{
		this.scrollToTop();
	}
  }
  
  	//utility function for moving the ScrollView up when text is finished 
	//currently not used
  scrollToTop(animated = true) {
	const scrollHeight = this.contentHeight - this.scrollViewHeight;
	if (scrollHeight > 0) {
	this.refs.scrollView.scrollTo({x: 0, y: 0, animated});
	}
	
  }
  
  
	//save game every 8 minutes
	periodicSave(that){
		if(FileManager.canSave()){	
			FileManager.SaveGame(that, false);
		}
		
		setTimeout(() => {that.periodicSave(that)}, 480000);
	}
	
	
	
	//save game when app is put into background/closed 
	handleAppStateChange=(nextAppState)=>{
		if (this.appState === 'active' && nextAppState.match(/inactive|background/) ) {
			if(FileManager.canSave()){	
				FileManager.SaveGame(this, false);
			}
		}
		
		this.appState = nextAppState;
	}
	
	
	//swipe back when android back button pressed
	handleBackButton=()=>{
		this.handleSwipe(this);
		return true;
	}
	
	
  

	
  
}



	
	

