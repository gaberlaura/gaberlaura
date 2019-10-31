import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <form action="/action_page.php" className="contact-form">
                Full name:<br/>
                <input type="text" name="fullname"/>
                <br/>
                Email:<br/>
                <input type="text" name="email"/>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Contact;