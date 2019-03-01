import React, { Component } from 'react';
import { View,Text } from 'react-native';


export class ImagePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{width: "100%",height: "100%",justifyContent : "center", alignItems : "center"}}>
        <Text>Aqui va el contenido</Text>
      </View>
    );
  }
}

export default ImagePicker;