import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <form action="/action_page.php" className="contact-form">
                Name:<br/>
                <input type="text" name="fullname"/>
                <br/><br/>
                Today's date:
                <input type="date"/><br/><br/>
                Email:<br/>
                <input type="text" name="email"/><br/><br/>
                Message:<br/>
                <textarea name="message" rows="10" cols="30"></textarea>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Contact;