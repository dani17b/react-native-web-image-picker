import React, { Component } from 'react';
import { View,Text } from 'react-native';


export class ImagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file : null,
      preview : null
    }
  }

  imageAttached(){
    if (this.refs.input.files && this.refs.input.files[0]) {
      let _this = this;
      
      var fileReader = new FileReader();
      let file = _this.refs.input.files[0];

      fileReader.onload = function(e) { 
        _this.setState({
          file,
          preview : e.target.result
        });

        _this.props.onLoadImage({
          type : file.type,
          path : e.target.result,
          file
        });
      }
  
      fileReader.readAsDataURL(_this.refs.input.files[0]);
    }
  }

  render() {
    return(
      <View style={{width: "100%",height: "100%",justifyContent : "center", alignItems : "center", border: "1px dashed #D7D7D7",borderRadius: "4px"}}>
        <input 
          style={{width: "100%",position: "absolute",top: 0,height: "100%", cursor : "pointer", opacity : 0}} 
          type="file"
          ref="input"
          onChange={this.imageAttached.bind(this)}
        />
        {this.state.preview == null &&
          <div style={{zIndex: 9,pointerEvents: "none"}}>
            {this.props.children}
          </div>
        }
        {this.state.preview != null &&
          <img
            style={{maxWidth: "calc(100% - 20px)",maxHeight: "calc(100% - 20px)",padding: "10px",position: "absolute",top: "0px",pointerEvents: "none"}}
            src={this.state.preview}
          />
        }
      </View>
    );
  }
}

export default ImagePicker;