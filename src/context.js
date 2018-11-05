import React, {Component} from 'react';
import MockUsers from './Mocks/MockUsers';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;

    }
}

class Provider extends Component {
    state = {
        contacts: MockUsers,
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export default Provider;
export const Consumer = Context.Consumer;