import React from 'react';
import { StyleSheet, Text } from 'react-native';
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
    return (<Text style={styles.defaultText}>{this.props.children}</Text>);
  }
  
}


//the clickable text class 
//CANNOT HAVE LENGTH 0 TEXT
export class ClickText extends React.Component {
	
  render() {
    return (<Text style={styles.clickText} onPress={this.props.onPress}>{this.props.children}</Text>);
  }
  
}