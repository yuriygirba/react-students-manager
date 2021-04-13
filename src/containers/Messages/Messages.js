import React, {Component} from 'react';

import './Messages.css';

class Messages extends Component {
    state = {
        message: "",
        recipient: "",
        isSent: false
    }

    changeRecipientHandler = (event) => {
        this.setState({recipient: event.target.value});
    }
    
    changeMessageHandler = (event) => {
        this.setState({message: event.target.value});
    }

    sendMessageHandler = () => {
        if (this.state.message.length > 0 && this.state.recipient.length > 0){
            this.setState({isSent: true})
        }
    }

    render(){
        let content = !this.state.isSent 
                        ?   <div>
                                <p>Recipient: <input type="text"  value={this.state.recipient} onChange={this.changeRecipientHandler}/></p>
                                <p>Your message: <textarea type="text" cols="40" rows="5"  value={this.state.message} onChange={this.changeMessageHandler}/></p>
                                <p><button onClick={this.sendMessageHandler}>Send</button></p>
                            </div>
                        
                        :<div>Your message to {this.state.recipient} was sent</div>;
         
        //let content = "Hi";
        return (
            <div className="Messages">
                <h1>Message Submission Form</h1>
                {content}
            </div>
        );    
    };
}

export default Messages;

