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
	color: '#fff'
  },
  
  //size and color of click text- medium, red
  clickText: {
	fontSize: 25,
	color: '#f00'
  }
});



//the default text class 
//CANNOT HAVE LENGTH 0 TEXT
export class DefaultText extends React.Component {
	
  render() {
    return (<Text style={styles.defaultText} onPress={this.props.onPress}>{this.props.children}</Text>);
  }
  
}


//the clickable text class 
//CANNOT HAVE LENGTH 0 TEXT
export class ClickText extends React.Component {

	constructor(props){
		super(props);
		this.didRetainPress = this.didRetainPress.bind(this);
		this.startPress = this.startPress.bind(this);
	}

	

	render() {
		return (<Text style={styles.clickText} onPress={()=>{}} onResponderMove={this.startPress} onResponderRelease={this.didRetainPress}>{this.props.children}</Text>);
	}

	
	componentX;
	componentY;
	didMove = false;

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
  
}