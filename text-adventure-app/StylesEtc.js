import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import PropTypes from 'prop-types';

export const styles = StyleSheet.create({
	
  //black, centered container. the default for the whole app
  container: {
	flex: 1,
	flexDirection: 'column',
    backgroundColor: '#000',
	flexWrap: 'wrap',
	overflow:'hidden',
  },
  
  scroll: {
	flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  //default size and color of text- medium, white
  defaultText: {
	fontSize: 25,
	color: '#fff',
	fontFamily: 'Roboto'
  },
  
  //size and color of click text- medium, red
  clickText: {
	fontSize: 25,
	color: '#f00',
	fontFamily: 'Roboto'
  }
});



//the default text class 
//CANNOT HAVE LENGTH 0 TEXT
export class DefaultText extends React.Component {
	
	constructor(props){
		super(props);
		this.reWrite = this.reWrite.bind(this);
	}
	
	//children are used by default because that will update this text's value when the render() method is called in App.js
	//alternatively we use this.myText incase reWrite is called by App.js's shouldComponentUpdate, aka when a single letter (or 10 incase of increased scale) is added to this text
	render() {
		var displayText = this.props.children;
		if(this.reWritten){
			this.reWritten = false;
			displayText = this.myText;
		}
		return (<Text style={styles.defaultText} onPress={this.props.onPress}>{displayText}</Text>);
	}
  
  
	
	myText;
	reWritten = false;
	
	//when this element just has a letter added onto it, we rerender it rather than everything on screen
	reWrite(input){
		this.reWritten = true;
		this.myText = input;
		this.forceUpdate();
	}
	
}


//the clickable text class 
//CANNOT HAVE LENGTH 0 TEXT
export class ClickText extends React.Component {

	constructor(props){
		super(props);
		this.didRetainPress = this.didRetainPress.bind(this);
		this.startPress = this.startPress.bind(this);
		this.reWrite = this.reWrite.bind(this);
	}

	
	//children are used by default because that will update this text's value when the render() method is called in App.js
	//alternatively we use this.myText incase reWrite is called by App.js's shouldComponentUpdate, aka when a single letter (or 10 incase of increased scale) is added to this text
	render() {
		var displayText = this.props.children;
		if(this.reWritten){
			this.reWritten = false;
			displayText = this.myText;
		}
		return (<Text style={styles.clickText} onPress={this.startPress} onResponderMove={this.startPress} onResponderRelease={this.didRetainPress}>{displayText}</Text>);
	}

	
	componentX;
	componentY;
	didMove = false;
	myText;
	reWritten = false;
	
	//the user has pressed on the text, record the x and y position and do not allow the position to be rewritten (for now)
	startPress(evt){
		if(!this.didMove){
			this.componentX = evt.nativeEvent.locationX;
			this.componentY = evt.nativeEvent.locationY;
			this.didMove = true;
		}
	}

	//the user has released their touch, check to see if they're still on the original text they pressed. if not, allow a new position to be written
	didRetainPress(evt){
		this.didMove = false;
		
		if(evt.nativeEvent.locationY > this.componentY - 10 &&
			evt.nativeEvent.locationY < this.componentY + 10 &&
			evt.nativeEvent.locationX > this.componentX - 10 &&
			evt.nativeEvent.locationX < this.componentX + 10){
				
			this.props.onPress();
		}
	}
	
	//when this element just has a letter added onto it, we rerender it rather than everything on screen
	reWrite(input){
		this.reWritten = true;
		this.myText = input;
		this.forceUpdate();
	}
  
}