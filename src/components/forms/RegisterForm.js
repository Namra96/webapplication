
import React, { Component } from 'react'
import{Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class RegisterForm extends Component{
state = {
    data: {firstname : "",
     surname: "",
       email: "",
    password: ""},
    loading: false,
    errors:{}
    
}

onChange = e => this.setState({ data:{...this.state.data,[e.target.name]: e.target.value }
});

onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors});
}

validate = (data) => {
   const errors = {};
   if(data.firstname.length < 3) errors.firstname = "Your name must contain atleast 3 characters";
   if(data.surname.length < 3) errors.surname = "Your name must contain atleast 3 characters";
   if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
   if(!data.password) errors.password = "Cant be blank";
   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,32}$/;

   if (!passwordRegex.test(data.password)) errors.password = "Password must contain atleast 8 digits, , 1 uppercase, 1 number and 1 special character";
 
  // if((data.password.length < 8)) errors.password = "Password must contain atleast 8 digits, , 1 uppercase, 1 number and 1 special character";
   return errors; 
}

render(){
    const { data,errors } = this.state;
    return(
        <Form onSubmit={this.onSubmit}>
            <h1>Register a new account!</h1>
             <Form.Field error={!!errors.firstname}>
                <label >First Name</label>
                <input 
                type="text" 
                id="firstname"
                name="firstname" 
                value={data.firstname}
                onChange={this.onChange}/>
               {errors.firstname && <InlineError text={errors.firstname}/>}
            </Form.Field>
            <Form.Field error={!!errors.surname}>
                <label >Surname</label>
                <input 
                type="text" 
                id="surname"
                name="surname" 
                value={data.surname}
                onChange={this.onChange}/>
               {errors.surname && <InlineError text={errors.surname}/>}
            </Form.Field>
            <Form.Field error={!!errors.email}>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="example@example.com"
                value={data.email}
                onChange={this.onChange}/>
               {errors.email && <InlineError text={errors.email}/>}
            </Form.Field>
            <Form.Field error={!!errors.password}>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password"
                name="password" 
                placeholder="Make it secure"
                value={data.password}
                onChange={this.onChange}/>
                {errors.password && <InlineError text={errors.password}/>}
            </Form.Field>

            <Button primary>Register</Button>
        </Form>
    );
}
}

export default RegisterForm;