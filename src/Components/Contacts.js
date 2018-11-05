import React, {Component} from 'react';
import Contact from '../Components/Contact';
import { Consumer }from '../context'

class Contacts extends Component {

    render() {
        console.log('[Contacts][Render]')
        return(
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return(
                        <div className="col-sm-8">
                            {contacts.map(contact =>
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                />
                            )}
                            <button className="btn btn-danger mb-3">
                                RESTORE DELETED USERS
                            </button>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;