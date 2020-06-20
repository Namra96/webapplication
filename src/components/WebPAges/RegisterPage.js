import React, { Component } from 'react';
import RegisterForm from "../forms/RegisterForm";
import '../Styling/myStyle.css'

class RegisterPage extends Component{

  submit = (data) => {
    console.log(data);
  };

  render(){
    return (
      <div className ='background'>
      <div className= 'formstyle'>
      <RegisterForm submit={this.submit}/>
      </div>
      </div>
    );
  }
}


export default RegisterPage;
