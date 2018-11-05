import React, {Component} from 'react';
import { Consumer } from '../context';
import uuid from 'uuid';
import FormGroup from 'src/Components/FormGroup';

class AddContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        city: '',
        showForm: false
    };

    toggleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    };

    submitNewContact = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone, city } = this.state;
        const newContact = {
            name,
            email,
            phone,
            city,
            id: uuid()
        }
        dispatch({type: 'ADD_CONTACT', payload: newContact});
        this.setState({
            name: '',
            email: '',
            phone: '',
            city: ''
        });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    render() {
        const { name, email, phone, city} = this.state;
        const { onChange } = this;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">Add User
                                    <button className={"btn btn-primary btn-sm m-2" }
                                            onClick={this.toggleShowForm}>toggle
                                    </button>
                                </div>
                                <div className="card-body pt-0 pb-0"
                                     style={{transition: ".3s",
                                         overflow: "hidden",
                                         height: this.state.showForm ? "400px" : "0px"}}
                                >
                                    <form onSubmit={this.submitNewContact.bind(this, dispatch)}>
                                        <FormGroup
                                            label='Name'
                                            name={name}
                                            type='text'
                                            placeholder='Enter Name...'
                                            onChange={onChange}
                                        />
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input className="form-control"
                                                   name="name"
                                                   type="text"
                                                   placeholder="Enter name..."
                                                   value={name}
                                                   onChange={onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input className="form-control"
                                                   name="email"
                                                   type="email"
                                                   placeholder="Enter email..."
                                                   value={email}
                                                   onChange={onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="form-control"
                                                   name="phone"
                                                   type="tel"
                                                   placeholder="Enter tel..."
                                                   value={phone}
                                                   onChange={onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="city">City</label>
                                            <input className="form-control"
                                                   name="city"
                                                   type="text"
                                                   placeholder="Enter city..."
                                                   value={city}
                                                   onChange={onChange}
                                            />
                                        </div>
                                        <input type="submit"
                                               value="Add Contact"
                                               className="btn"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContactForm;