import React,{Component} from "react"
import {Text,View,TextInput} from "react-native";

class Barang extends Component {
  constructor(props){
    super(props);
    this.state ={
      inputan1 : "",
      inputan2 : ""

    }
  }
  handleInput1 = (events)=>{
    this.setState({inputan1:events});
  }

  handleInput2 = (events)=>{
    this.setState({inputan2:events});
  }

  render(){
    return(
      <View>
        <TextInput
          onChangeText={this.handleInput1}
          placeholder="Masukkan Nama Barang"
          value = {this.state.inputan1}
        />
        <TextInput
          onChangeText={this.handleInput2}
          placeholder="Masukkan Jumlah Barang"
          keyboardType="numeric"
          value = {this.state.inputan2}
        />
        <Text>{this.props.namabelanja}</Text>
        <Text>Nama Barang : {this.state.inputan1}</Text>
        <Text>Jumlah Barang : {this.state.inputan2}</Text>
      </View>
    )
  }
}



export default Barang;
