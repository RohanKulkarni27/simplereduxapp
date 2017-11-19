import React,{Component} from 'react';
import {connect} from 'react-redux';
class bookdetail extends Component{
  render(){
    if(!this.props.selectedbook){
      return(
        <div>Please select a book</div>
      );
    }
    return(
      <div>
      <h3>Book Details are:</h3>
      <div>{this.props.selectedbook.Title}</div>
      <div>{this.props.selectedbook.pages}</div>
      </div>
    );
  }
}
function mapstatetoprops(state){
  return{
    selectedbook:state.activebook
  };
}

export default connect(mapstatetoprops)(bookdetail);
