import React from 'react';
import {View}  from 'react-native';
import {ClickText, DefaultText, styles} from './StylesEtc.js'
import {HomePage} from './homepage.js'


//App is the visual display object, in charge of animating the text on screen and allowing the user to click through to change it
//App does not know what it is displaying. All that logic is elsewhere. The only exception is the initial state:
//Its initial constructor assembles the homepage. 
export default class App extends React.Component {
	

  
  //render works like a typewriter, constructing each Text element based on the state variable displayedText
  render() {
	var displayElements=[];
		
	this.state.displayedText.map((dtNode,i) =>{
		//clickable text needs to be blue and attach a touch listener to its corresponding function
		//TODO add click functionality
		if(dtNode.clickable){
			displayElements.push((<ClickText key={i} onPress={() => {this.handleClick(dtNode.clickObject, this)}}>{dtNode.text}</ClickText>));
		}
		else{
			displayElements.push((<DefaultText key={i}>{dtNode.text}</DefaultText>));
		}
	});
	return (
		<View style={styles.container}>
			{displayElements}
		</View>
    );
  }
  
    componentWillUnmount() {
		this.clearTimeout();
	}
	
  	componentDidMount() {
		this.typeAnimation();
	}
	
	//every 20 milliseconds, add a letter to the children rendered in this view 
	//if there are no more letters to type, stop 
	typeAnimation(){
		this.clearTimeout();
		if(this.state.toShowText.length > 0){
			this.allowClicks = false;
			this.timeoutId = setTimeout(() => {this.addLetter(this)}, 20);
		}
		else{
			this.allowClicks = true;
		}
	}
	
	//clean up any lingering listeners
	clearTimeout() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}
	

	
	//move a letter from the toShowText list to displayedText list
	//any node that is empty in toShowText list will serve as an indicator that that text element is completely displayed, and we can progress to the next
	addLetter(that){
		var displayedText2 = Object.assign([], that.state.displayedText);
		var toShowText2 = Object.assign([], that.state.toShowText);
		
		//skip this function if there's nothing to show
		if(toShowText2.length > 0) {
			
			var removeLastText = false;
			var index = 0;
			
			if(toShowText2[index].text.length < 1){
				//the last text we added a letter to finished that text. remove it from the display list and start a new text
				removeLastText = true;
				index++;
				
			}
			
			if(toShowText2.length == index){
				//the only text in the list is an empty one, don't bother, clean list, get out
				toShowText2 = [];
				that.allowClicks = true; 
			}
			
			else{
				//time to start modifying our texts
				//we always peel off the first letter of the toShowText, preparing it to append to the displayedText
				
	
				var firstCharacter = toShowText2[index].text.charAt(0);
				toShowText2[index].text = ''+toShowText2[index].text.slice(1);
				
				var canClick = toShowText2[index].clickable;
				var hasObj = toShowText2[index].clickObject;
				
				if(removeLastText){
					//start a new text!
					displayedText2.push({text:firstCharacter, clickable:canClick, clickObject:hasObj});
					
					//get rid of the empty text from the list
					toShowText2.shift();
				}
				else if (displayedText2.length==0){
					//no text displayed so far, start a new text!
					displayedText2.push({text:firstCharacter, clickable:canClick, clickObject:hasObj});
					
				}
				else{
					//append the last text in our list					
					displayedText2[displayedText2.length-1].text += firstCharacter;
				}
				
				//we keep trying to type since we didn't hit an end
				that.typeAnimation();
			}
			
			
			that.setState({toShowText: toShowText2, displayedText: displayedText2});


		}
		
		//we're done displaying
		else{
			that.allowClicks = true; 
		}
	}
  
  
  
  
  
  handleClick(clickObj, that){
	  //can we click?
	  if(that.allowClicks){
		  
		  that.allowClicks = false;
		  //first, erase the screen
		  that.fadeAnimation();
		  
		  //TODO
	  }
  }
  
  
  	//every 20 milliseconds, remove a letter at random in this view 
	//if there are no more letters to remove, stop
	fadeAnimation(){
		this.clearTimeout();
		if(this.state.displayedText.length > 0){
			this.timeoutId = setTimeout(() => {this.fadeLetter(this)}, 20);
		}
	}
  
  
	//randomly remove a letter from the screen
	//when there are no letters in a given text, remove it from the list
	//when there are no texts left, we're done
  	fadeLetter(that){
		var displayedText2 = Object.assign([], that.state.displayedText);
		
		//skip this function if there's nothing to remove
		if(displayedText2.length > 0) {
			
			var removeLastText = false;
			var index = Math.floor(Math.random() * displayedText2.length);
			
			while(displayedText2.length > 0 && displayedText2[index].text.length < 1 ){
				//the randomly selected text already has all its letters removed. remove it from the display list and start a new text
				displayedText2.splice( index, 1 );
				index = Math.floor(Math.random() * displayedText2.length);
			}
			
			if(displayedText2.length == 0){
				//no more texts, finish
				that.allowClicks = true; 
			}
			
			else{
				//time to start modifying our texts
				//randomly take a letter from the text
				var textToMod = displayedText2[index].text;
				var letterIndex = Math.floor(Math.random() * textToMod.length);
				textToMod = textToMod.slice(0, letterIndex) + textToMod.slice(letterIndex+1);
				displayedText2[index].text = textToMod;
				
				//we keep trying to type since we didn't hit an end
				that.fadeAnimation(that);
			}
			
			
			that.setState({displayedText: displayedText2});


		}
		
		//we're done displaying
		else{
			that.allowClicks = true; 
		}
	}
  
  
  
  
  
  
  
  constructor(props){
	  super(props);
	  //console.disableYellowBox = true
	  this.state = {displayedText: [], toShowText: [], allowClicks: false};  
	  HomePage.createHomePage(this);
  }
  

  
}


//game data records decisions in a single game as well as the current state (paragraph) the user is in 
var gameData = {};
  

	
	

