import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context'

class Contact extends Component {
    state ={
        showContactInfo: false
    };

    toggleContactInfo = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    };
    deleteContact = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };

    render() {
        console.log('[Contact][Render]');
        const { name, email, phone, city, id } = this.props.contact;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className={"card card-body mb-3"}>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <h5>{name}</h5>
                                    </div>
                                    <div className="col">
                                        <button className={"btn btn-primary btn-sm m-2" }
                                                onClick={this.toggleContactInfo}>toggle
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-danger btn-sm m-2"
                                                onClick={() => this.deleteContact(id, dispatch)}>DELETE USER
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {this.state.showContactInfo ?
                                <ul className={"list-group"}>
                                    <li className={"list-group-item"}>{email}</li>
                                    <li className={"list-group-item"}>{phone}</li>
                                    <li className={"list-group-item"}>{city}</li>
                                </ul> : null
                            }
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};


export default Contact;
