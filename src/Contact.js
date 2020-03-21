import React from 'react';
import emailjs from 'emailjs-com';

class Contact extends React.Component{

    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          date: '',
          message: ''
        }
    }
    onNameChange(e) {
        this.setState({name: e.target.value})
    }
    
    onEmailChange(e) {
        this.setState({email: e.target.value})
    }
    
    onMessageChange(e) {
        this.setState({message: e.target.value})
    }

    onDateChange(e){
        this.setState({date: e.target.value})
    }
    
    handleSubmit(e) {
        e.preventDefault();

        var formParams = {
            name: this.state.name,
            date: this.state.date,
            email: this.state.email,
            notes: this.state.message 
        };
         
        emailjs.send('default_service', 'template_QoO2AlPh', formParams, 'user_mgrC5sBvcdff8v3OP8vWL')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }

    resetForm(){
        this.setState({
            name: '',
            email: '', 
            date: '',
            message: ''
        })
     }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)} className="contact-form" method="POST">
                Name:<br/>
                <input type="text" className="form-input" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                <br/><br/>
                Today's date:
                <input type="date" className="form-input" value={this.state.date} onChange={this.onDateChange.bind(this)}/><br/><br/>
                Email:<br/>
                <input type="email" className="form-input" value={this.state.email} onChange={this.onEmailChange.bind(this)}/><br/><br/>
                Message:<br/>
                <textarea className="form-input" rows="10" cols="30" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
    
export default Contact;