import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  Image
} from 'react-native'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.images = []
    }   

    static defaultProps = {
        value: 1,
    }

    state = {
        value: this.props.value,
        index: 2,
    }

    componentDidMount() {
        for(i=1; i<=302; i++){
            this.images.push('http://127.0.0.1/'+i+'.jpg')
        }
    }
    
    render() {
        
        imgUrl = 'http://127.0.0.1/'+Math.floor(this.state.value)+'.jpg'
        return (
            <View style={styles.container}>
                <Image style={styles.preview} 
                    source={{uri:imgUrl}} />
                <Slider style={styles.slider}
                    {...this.props}
                    minimumValue={1}
                    maximumValue={300}
                    onValueChange={
                        (value) => {
                            this.setState({value: value})
                            console.log("value:"+Math.floor(value))
                        }
                    } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  slider: {
      height: 30,
      width: 300
  },
  preview: {
      backgroundColor: '#0A0000',
      height: 100,
      width: 150
  }
});