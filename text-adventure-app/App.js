import React from 'react';
import {View, Text, ScrollView}  from 'react-native';
import {ClickText, DefaultText, styles} from './StylesEtc.js'
import {HomePage} from './HomePage.js'


//App is the visual display object, in charge of animating the text on screen and allowing the user to click through to change it
//App does not know what it is displaying. All that logic is elsewhere. The only exception is the initial state:
//Its initial mounting function assembles the homepage. 
export default class App extends React.Component {
	

  
  //render works like a typewriter, constructing each Text element based on the state variable displayedText
  render() {
	var displayElements=[];
		
	this.state.displayedText.map((dtNode,i) =>{
		//clickable text needs to be blue and attach a touch listener to its corresponding function
		//TODO add click functionality
		if(dtNode.clickable){
			displayElements.push((<ClickText key={i} onPress={() => {this.handleClick(dtNode.nextPage, this)}}>{dtNode.text}</ClickText>));
		}
		else{
			displayElements.push((<DefaultText key={i}>{dtNode.text}</DefaultText>));
		}
	});
	return (
		
		<View style={styles.container}>
		<ScrollView contentContainerStyle={styles.scroll}>
			<Text>
				{displayElements}
			</Text>
			</ScrollView>
		</View>
    );
  }
  
	
	
	//every 20 milliseconds, add a letter to the children rendered in this view 
	//if there are no more letters to type, stop 
		this.clearTimeout();
		
		if(this.state.toShowText.length > 0){
			this.allowClicks = false;
			
			this.timeoutId = setTimeout(() => {this.addLetter(this, scale)}, 20);
		}
		else{
			this.allowClicks = true;
		}
		
	}
	
	//this is called by outside classes, where some setup is done prior to actually calling the typeAnimation function aka typeAnimationActual
	typeAnimation(){
		//default speed is 1 letter at a time
		var scale = 1;
		var textHash = JSON.stringify( this.state.toShowText );
		if(this.visitedTextMap[textHash] == true){
			scale = 10;
		}
		else{
		}
		
		this.typeAnimationActual(scale);
		
	}
	
	//clean up any lingering listeners
	clearTimeout() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}
	

	
	//move a letter from the toShowText list to displayedText list
	//any node that is empty in toShowText list will serve as an indicator that that text element is completely displayed, and we can progress to the next
	addLetter(that, scale){
		//deep clone the arrays
		var displayedText2 = Object.assign([], that.state.displayedText);
		var toShowText2 = Object.assign([], that.state.toShowText);
		
		//skip this function if there's nothing to show
		if(toShowText2.length > 0) {
			
			var keepTyping = true;
			
			//the more times addLetter is called for a given toShowText list, the more letters it adds with a single call
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
				
				var canClick = toShowText2[index].clickable;
				var hasPage = toShowText2[index].nextPage;
				
				if(removeLastText){
					//start a new text!
					displayedText2.push({text:firstCharacter, clickable:canClick, nextPage:hasPage});
					
					//get rid of the empty text from the list
					toShowText2.shift();
				}
				else if (displayedText2.length==0){
					//no text displayed so far, start a new text!
					displayedText2.push({text:firstCharacter, clickable:canClick, nextPage:hasPage});
					
				}
				else{
					//append the last text in our list					
					displayedText2[displayedText2.length-1].text += firstCharacter;
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
			}
			
			that.setState({toShowText: toShowText2, displayedText: displayedText2});


		}
		
		//we're done displaying
		else{
			that.allowClicks = true; 
		}
	}
  
  
  
  
  
  handleClick(nextPage, that){
	  //can we click?
	  if(that.allowClicks){
		  
		  that.allowClicks = false;
		  
		  //figure out how fast we want to erase the screen based on how much content is on it 
		  var letters = 0;
		  for (i=0; i< that.state.displayedText.length; i++){
			  letters += that.state.displayedText[i].text.length;
		  }
		  var scale = Math.ceil(letters/20);
		  
		  //now, erase the screen
		  that.fadeAnimation(nextPage, scale);
		  //when that finishes, it will continue with handleClickAfterFade(nextPage)
		  
	  }
  }
  
  handleClickAfterFade(nextPage){
	  //nextPage are classes that implement createPage, which populates toShowText and calls typeAnimation
	  nextPage.createPage(this);
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
  
  
  
  
  
  
  
  constructor(props){
	  super(props);
	  //console.disableYellowBox = true
	  this.state = {displayedText: [], toShowText: [], allowClicks: false};  
	  this.visitedTextMap = {};
  }
  
    componentDidMount() {
		HomePage.createPage(this);
	}
  
    componentWillUnmount() {
		this.clearTimeout();
	}

	
  
}



	
	

